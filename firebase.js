// Import các function cần thiết từ SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Cấu hình Firebase cho ứng dụng web của bạn
const firebaseConfig = {
  apiKey: "AIzaSyAhSLdVUbGd-qJeL5upatkkhBNfL3a9Mtc",
  authDomain: "fblab1-a1c17.firebaseapp.com",
  projectId: "fblab1-a1c17",
  storageBucket: "fblab1-a1c17.appspot.com",
  messagingSenderId: "351189355025",
  appId: "1:351189355025:web:bf4c925b0b30d148843fb0",
  measurementId: "G-8D9QV2VQ6P"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Khởi tạo Firestore
const db = getFirestore(app);

export { db };
