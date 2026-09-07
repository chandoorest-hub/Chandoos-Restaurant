/* ============================================================
   FIREBASE CONFIG — Chandoos Restaurant.
   These keys are safe to be public; access is controlled by Firestore rules.
   ============================================================ */
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBnFS3Z3TiEZajNJKSNu6Nl8W7qTOcggBs",
  authDomain: "chandoos-4c157.firebaseapp.com",
  projectId: "chandoos-4c157",
  storageBucket: "chandoos-4c157.firebasestorage.app",
  messagingSenderId: "525807029372",
  appId: "1:525807029372:web:f875fe6445ff72d8f50df9",
  measurementId: "G-1JK7ZY9FCN"
};

// Where the shared menu state is stored in Firestore.
// (One document holds availability + custom items for the whole restaurant.)
const FIREBASE_DOC_PATH = { collection: "chandoos", docId: "menu-state" };
