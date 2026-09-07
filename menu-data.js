/* Chandoos Restaurant & Bakery — full menu data.
   Prices as shown on the printed menu. Edit here to update the live menu. */
const MENU = [
  {
    title: "Fire Items",
    items: [
      { name: "Miriyala Kodi Vempudu", price: "290" },
      { name: "Karepaku Chicken Dry", price: "290" },
      { name: "Bengal Chicken Shalaf", price: "290" },
      { name: "Su-Peta Chicken Sukka", price: "290" },
      { name: "Chicken Potlam Biryani", price: "290" },
      { name: "Mutton Potlam Biryani", price: "430" },
      { name: "Gongura Chicken Biryani", price: "270" },
      { name: "Mixed Non-Veg Pulao", price: "300" }
    ]
  },
  {
    title: "Soups",
    items: [
      { name: "Tomato Soup (Veg)", price: "130" },
      { name: "Manchow Veg/Chicken", price: "100/130" },
      { name: "Hot & Sour Veg/Chicken", price: "100/130" },
      { name: "Sweet Corn Veg/Chicken", price: "100/130" }
    ]
  },
  {
    title: "Veg Starters",
    items: [
      { name: "Crispy Veg", price: "240" },
      { name: "Veg Ball Manchurian", price: "210" },
      { name: "Schezwan Veg", price: "210" },
      { name: "Bhurani Veg", price: "210" },
      { name: "Gobi 65 (With Little Sauce)", price: "190" },
      { name: "Gobi Pakoda (Complete Dry)", price: "190" },
      { name: "Gobi Manchurian", price: "190" },
      { name: "Chilly Gobi", price: "200" },
      { name: "Hong Kong Gobi", price: "200" },
      { name: "Babycorn 65 (With Little Sauce)", price: "210" },
      { name: "Babycorn Pakoda (Complete Dry)", price: "210" },
      { name: "Golden Fried Babycorn", price: "240" },
      { name: "Mushroom 65 (With Little Sauce)", price: "230" },
      { name: "Mushroom Pakoda (Complete Dry)", price: "230" },
      { name: "Mushroom Manchurian", price: "230" },
      { name: "Chilly Mushroom", price: "230" },
      { name: "Salt & Pepper Mushroom", price: "250" },
      { name: "Paneer 65 (With Little Sauce)", price: "260" },
      { name: "Paneer Pakoda (Complete Dry)", price: "260" },
      { name: "Paneer Manchurian", price: "260" },
      { name: "Chilly Paneer", price: "260" },
      { name: "Paneer Majestick", price: "270" },
      { name: "Paneer Salt & Pepper", price: "270" },
      { name: "Hong Kong Paneer", price: "270" }
    ]
  },
  {
    title: "Non-Veg Starters",
    items: [
      { name: "Boiled Egg", price: "20" },
      { name: "Double Egg Omlette", price: "80" },
      { name: "Double Egg Masala Omlette", price: "100" },
      { name: "Egg 65 (With Little Sauce)", price: "180" },
      { name: "Chilly Egg", price: "180" },
      { name: "Egg Manchurian", price: "180" },
      { name: "Egg Bhurji", price: "180" },
      { name: "Chicken Pakoda (Bone/Boneless)", price: "260/270" },
      { name: "Chicken 65 (With Little Sauce)", price: "270" },
      { name: "Chicken 77", price: "270" },
      { name: "Chicken 555", price: "290" },
      { name: "Chicken Manchurian", price: "260" },
      { name: "Chilly Chicken", price: "260" },
      { name: "Schezwan Chicken", price: "270" },
      { name: "Chicken Majestick", price: "290" },
      { name: "Hong Kong Chicken", price: "280" },
      { name: "Dragon Chicken", price: "290" },
      { name: "Lanka Chicken", price: "280" },
      { name: "Chicken Drumsticks (Complete Dry)", price: "290" },
      { name: "Chicken Lollipop (Saucy)", price: "290" },
      { name: "Fish 65 (With Little Sauce)", price: "290" },
      { name: "Fish Pakoda (Complete Dry)", price: "290" },
      { name: "Chilly Fish", price: "290" },
      { name: "Fish Manchurian", price: "290" },
      { name: "Prawns Pakoda (Complete Dry)", price: "290" },
      { name: "Prawns 65 (With Little Sauce)", price: "300" },
      { name: "Prawns Manchurian", price: "300" },
      { name: "Chilly Prawns", price: "300" },
      { name: "Dragon Prawns", price: "310" }
    ]
  },
  {
    title: "Tandoori Non-Veg",
    items: [
      { name: "Chicken Tikka", price: "290" },
      { name: "Todays Special Chicken Tikka", price: "310" },
      { name: "Tangdi Kabab Half/Full (Leg Pieces)", price: "190/380" },
      { name: "Tandoori Chicken Half/Full", price: "260/490" }
    ]
  },
  {
    title: "Indian Breads",
    items: [
      { name: "Phulka", price: "20" },
      { name: "Chapathi", price: "30" },
      { name: "Naan Plain/Butter", price: "40/45" },
      { name: "Roti Plain/Butter", price: "30/35" },
      { name: "Garlic Naan", price: "60" },
      { name: "Chilli Garlic Naan", price: "70" },
      { name: "Cheese Naan", price: "70" },
      { name: "Cheese Garlic Naan", price: "80" },
      { name: "Lacha Parata", price: "40" },
      { name: "Pudhina Parata", price: "50" },
      { name: "Aloo Parata", price: "70" },
      { name: "Butter Kulcha", price: "40" },
      { name: "Paneer Kulcha", price: "80" },
      { name: "Masala Kulcha", price: "80" }
    ]
  },
  {
    title: "Veg Gravies",
    items: [
      { name: "Dal Fry / Tadka", price: "160/180" },
      { name: "Gobi Masala", price: "180" },
      { name: "Aloo Gobi Masala", price: "180" },
      { name: "Mix Veg Curry", price: "180" },
      { name: "Kadai Veg", price: "190" },
      { name: "Veg Kolhapuri", price: "190" },
      { name: "Babycorn Masala", price: "200" },
      { name: "Kaju Babycorn Masala", price: "250" },
      { name: "Paneer Butter Masala", price: "250" },
      { name: "Kaju Paneer", price: "260" },
      { name: "Paneer Chatpata", price: "260" },
      { name: "Paneer Kolhapuri", price: "250" },
      { name: "Mushroom Masala", price: "240" },
      { name: "Mushroom Curry", price: "240" },
      { name: "Methi Chaman", price: "260" },
      { name: "Kaju Curry", price: "280" },
      { name: "Kaju Masala", price: "280" },
      { name: "Malai Kofta Curry", price: "320" }
    ]
  },
  {
    title: "Non-Veg Gravies",
    items: [
      { name: "Egg Curry", price: "180" },
      { name: "Egg Kheema Masala", price: "180" },
      { name: "Egg Masala", price: "180" },
      { name: "Chicken Curry (Bone)", price: "250" },
      { name: "Chicken Kolhapuri", price: "280" },
      { name: "Butter Chicken Masala (Boneless)", price: "290" },
      { name: "Chicken Tikka Masala", price: "290" },
      { name: "Punjabi Chicken Curry", price: "290" },
      { name: "Chicken Hyderabadi Bone/Boneless", price: "280/290" },
      { name: "Chicken Chettinadu Bone/Boneless", price: "280/290" },
      { name: "Rayalaseema Chicken Bone/Boneless", price: "260/280" },
      { name: "Black Pepper Chicken Curry Boneless", price: "280/290" },
      { name: "Kadai Chicken Bone/Boneless", price: "280/290" },
      { name: "Methi Chicken Bone/Boneless", price: "280/290" },
      { name: "Mughlai Chicken Boneless", price: "290" },
      { name: "Todays Special Chicken Curry (Boneless)", price: "320" },
      { name: "Fish Curry (Boneless)", price: "300" },
      { name: "Fish Masala (Boneless)", price: "300" },
      { name: "Kadai Fish (Boneless)", price: "310" },
      { name: "Prawns Curry", price: "300" },
      { name: "Prawns Masala", price: "300" },
      { name: "Kadai Prawns", price: "310" },
      { name: "Mutton Curry", price: "370" },
      { name: "Mutton Masala", price: "370" },
      { name: "Mutton Hyderabadi Masala", price: "380" },
      { name: "Mutton Roghan Josh", price: "380" },
      { name: "Mutton Kolhapuri", price: "380" }
    ]
  },
  {
    title: "Veg Biryanis",
    items: [
      { name: "Veg Biryani", price: "180" },
      { name: "Paneer Biryani", price: "240" },
      { name: "Mushroom Biryani", price: "230" },
      { name: "Kaju Biryani", price: "250" },
      { name: "Kaju Paneer Biryani", price: "260" }
    ]
  },
  {
    title: "Veg Indian Rice",
    items: [
      { name: "Curd Rice", price: "80" },
      { name: "Kaju Pulav", price: "240" },
      { name: "Green Peas Pulav", price: "180" },
      { name: "Jeera Rice", price: "180" }
    ]
  },
  {
    title: "Non-Veg Biryanis",
    items: [
      { name: "Biryani Rice", price: "150" },
      { name: "Egg Biryani", price: "180" },
      { name: "Chicken Dum Biryani", price: "220" },
      { name: "Chicken 65 Biryani", price: "250" },
      { name: "Fried Piece Chicken Biryani", price: "250" },
      { name: "Chicken Joint Biryani", price: "270" },
      { name: "Chicken Tangdi Biryani", price: "260" },
      { name: "Chicken Lollypop Biryani", price: "250" },
      { name: "Special Chicken Biryani", price: "270" },
      { name: "Fish Fry Biryani", price: "260" },
      { name: "Prawns Fry Biryani", price: "270" },
      { name: "Mutton Fry Biryani", price: "380" },
      { name: "Chicken Family Pack Biryani", price: "500" },
      { name: "Mutton Fry Family Pack Biryani", price: "800" }
    ]
  },
  {
    title: "Chinese Veg Fried Rice",
    note: "Plain / Schezwan",
    items: [
      { name: "Veg Fried Rice", price: "170/180" },
      { name: "Gobi Fried Rice", price: "180/190" },
      { name: "Mushroom Fried Rice", price: "190/200" },
      { name: "Paneer Fried Rice", price: "210/220" },
      { name: "Chandoos Special Veg Fried Rice", price: "240" }
    ]
  },
  {
    title: "Chinese Non-Veg Fried Rice",
    note: "Plain / Schezwan",
    items: [
      { name: "Egg Fried Rice", price: "180/190" },
      { name: "Chicken Fried Rice", price: "210/220" },
      { name: "Chandoos Special Chicken Fried Rice", price: "250" },
      { name: "Prawn Fried Rice", price: "240/250" },
      { name: "Mix Non-Veg Fried Rice", price: "290/300" }
    ]
  },
  {
    title: "Chinese Veg Noodles",
    note: "Plain / Schezwan",
    items: [
      { name: "Veg Noodles", price: "170/180" },
      { name: "Gobi Noodles", price: "170/180" },
      { name: "Mushroom Noodles", price: "190/200" },
      { name: "Paneer Noodles", price: "190/200" }
    ]
  },
  {
    title: "Chinese Non-Veg Noodles",
    note: "Plain / Schezwan",
    items: [
      { name: "Egg Noodles", price: "180/190" },
      { name: "Chicken Noodles", price: "210/220" },
      { name: "Prawn Noodles", price: "220/230" },
      { name: "Mix Non-Veg Noodles", price: "290/300" }
    ]
  },
  {
    title: "Mocktails",
    items: [
      { name: "Mint Mojito", price: "90" },
      { name: "Ginger Cola", price: "90" },
      { name: "Blue Lagoon", price: "100" },
      { name: "Green Apple", price: "100" },
      { name: "Water Melon", price: "100" }
    ]
  },
  {
    title: "Ice Creams",
    items: [
      { name: "Vanilla", price: "70" },
      { name: "Strawberry", price: "70" },
      { name: "Pista", price: "90" },
      { name: "Butterscotch", price: "90" },
      { name: "Chocolate", price: "100" },
      { name: "Black Currant", price: "100" },
      { name: "Caramel Nuts", price: "120" },
      { name: "Belgium Dark Chocolate", price: "120" }
    ]
  },
  {
    title: "Milkshakes",
    items: [
      { name: "Vanilla", price: "100" },
      { name: "Strawberry", price: "100" },
      { name: "Pista", price: "110" },
      { name: "Butterscotch", price: "110" },
      { name: "Chocolate", price: "120" },
      { name: "Oreo", price: "120" },
      { name: "Caramel", price: "140" },
      { name: "Dark Chocolate", price: "140" },
      { name: "Kitkat Thick Shake", price: "170" },
      { name: "Very Berry Merry Thick Shake", price: "170" }
    ]
  },
  {
    title: "Cool Cakes",
    cols: ["500 Gms", "1 KG"],
    items: [
      { name: "Vanilla", price: ["350", "700"] },
      { name: "Strawberry", price: ["350", "700"] },
      { name: "White Forest", price: ["350", "700"] },
      { name: "Pineapple", price: ["350", "700"] },
      { name: "Blueberry", price: ["350", "700"] },
      { name: "Butterscotch", price: ["350", "700"] },
      { name: "Black Currant", price: ["350", "700"] }
    ]
  },
  {
    title: "Premium Cool Cakes",
    cols: ["500 Gms", "1 KG"],
    items: [
      { name: "Oreo", price: ["450", "900"] },
      { name: "Choco Smoobi", price: ["425", "850"] },
      { name: "Choco Vanilla", price: ["425", "850"] },
      { name: "Caramel", price: ["425", "850"] },
      { name: "Choco Pineapple", price: ["425", "850"] },
      { name: "Choco Blueberry", price: ["425", "850"] },
      { name: "Black Forest", price: ["425", "850"] },
      { name: "Cashewnut Fluffy", price: ["550", "1000"] },
      { name: "Dry Fruit", price: ["550", "1000"] },
      { name: "Dark Fantasy", price: ["450", "900"] },
      { name: "Red Velvet", price: ["—", "900"] },
      { name: "Rich Truffle", price: ["500", "1000"] },
      { name: "More Chocolate", price: ["500", "1000"] },
      { name: "Death By Chocolate", price: ["500", "1000"] },
      { name: "Choco Chips", price: ["500", "1000"] },
      { name: "Choco Scotch", price: ["500", "900"] },
      { name: "Choco Coffee", price: ["500", "900"] },
      { name: "Choco Cashewnut", price: ["550", "1000"] },
      { name: "Choco Almond", price: ["600", "1000"] },
      { name: "Choco Dry Fruit", price: ["550", "950"] },
      { name: "Choco Oreo", price: ["450", "900"] },
      { name: "Choco Pista", price: ["600", "1100"] }
    ]
  }
];
