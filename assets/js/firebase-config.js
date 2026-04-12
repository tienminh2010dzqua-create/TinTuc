// ========================================
// 🔥 CẤU HÌNH FIREBASE - THAY THẾ THÔNG TIN CỦA BẠN
// ========================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-storage.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQct3m6cgDof2Bt2H61NKTiU317wVaKGI",
  authDomain: "jsi13-44388.firebaseapp.com",
  projectId: "jsi13-44388",
  storageBucket: "jsi13-44388.firebasestorage.app",
  messagingSenderId: "516770387411",
  appId: "1:516770387411:web:a52d7739e2c12ed8ab0b26",
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
