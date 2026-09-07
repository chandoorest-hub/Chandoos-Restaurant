/* Vercel Serverless Function: /api/chat
   Secure proxy to Groq. The API key stays on the server (env var GROQ_API_KEY)
   and is NEVER sent to the browser.

   The browser POSTs: { question: string, menu: [...], history?: [...] }
   We build a system prompt that restricts the assistant to the menu only. */

const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';
const MODEL = 'llama-3.1-8b-instant'; // fast + cheap; good for menu Q&A

function buildMenuText(menu) {
  if (!Array.isArray(menu)) return '(no menu provided)';
  const lines = [];
  menu.forEach(function (cat) {
    lines.push('## ' + cat.title);
    (cat.items || []).forEach(function (it) {
      const price = Array.isArray(it.price) ? it.price.join(' / ') : it.price;
      const status = it.soldOut ? ' [SOLD OUT]' : '';
      lines.push('- ' + it.name + ' : Rs ' + price + status);
    });
  });
  return lines.join('\n');
}

module.exports = async function handler(req, res) {
  // Basic CORS (same-origin on Vercel, but harmless if called from the site).
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.status(204).end(); return; }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const key = process.env.GROQ_API_KEY;
  if (!key) {
    res.status(500).json({ error: 'Server not configured: missing GROQ_API_KEY.' });
    return;
  }

  try {
    // Vercel may pass body as string or object depending on runtime.
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const question = (body.question || '').toString().slice(0, 500);
    const menu = body.menu || [];
    const history = Array.isArray(body.history) ? body.history.slice(-6) : [];

    if (!question.trim()) {
      res.status(400).json({ error: 'Empty question.' });
      return;
    }

    const menuText = buildMenuText(menu);

    const systemPrompt =
      "You are the menu assistant for \"Chandoos Restaurant & Bakery\". " +
      "Answer ONLY using the menu below. You may help customers find dishes, tell prices " +
      "(prices are in Indian Rupees, Rs), list items in a category, suggest options by budget " +
      "or type (veg/non-veg, spicy, sweet), and say whether an item is available. " +
      "If an item is marked [SOLD OUT], tell the customer it's currently unavailable. " +
      "If a question is NOT about this restaurant's menu, food, prices, or availability, politely refuse " +
      "with one short sentence like: \"I can only help with the Chandoos menu.\" " +
      "Do not invent items or prices that are not in the menu. Keep answers short, friendly, and clear. " +
      "Restaurant phone: 7777 800 600. Catering and party orders are undertaken.\n\n" +
      "=== MENU ===\n" + menuText;

    const messages = [{ role: 'system', content: systemPrompt }];
    history.forEach(function (m) {
      if (m && (m.role === 'user' || m.role === 'assistant') && m.content) {
        messages.push({ role: m.role, content: String(m.content).slice(0, 500) });
      }
    });
    messages.push({ role: 'user', content: question });

    const groqRes = await fetch(GROQ_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + key
      },
      body: JSON.stringify({
        model: MODEL,
        messages: messages,
        temperature: 0.2,
        max_tokens: 400
      })
    });

    if (!groqRes.ok) {
      const detail = await groqRes.text();
      res.status(502).json({ error: 'Assistant unavailable. Please try again.', detail: detail.slice(0, 300) });
      return;
    }

    const data = await groqRes.json();
    const reply = (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) || '';
    res.status(200).json({ reply: reply.trim() || "Sorry, I couldn't find that on the menu." });
  } catch (e) {
    res.status(500).json({ error: 'Something went wrong.', detail: String(e).slice(0, 200) });
  }
};
