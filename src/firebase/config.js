//// burada google firebase ile etkileşime buradan girilecek.
//firebase ile etkileşime geçildi
import { initializeApp} from "firebase/app";
//authentication işlemleri için (kullanıcı kaydı)
import { getAuth } from "firebase/auth";
//firebase database erişimi için
import {getFirestore} from "firebase/firestore";
//storage erişimi için
import {getStorage} from "firebase/storage";

export const firebaseConfig = {
    apiKey: "AIzaSyCGBe2D_qDc8g6vpClm6v9QiZrX8g48hbY",
    authDomain: "e-ticaret-class-a1b46.firebaseapp.com",
    projectId: "e-ticaret-class-a1b46",
    storageBucket: "e-ticaret-class-a1b46.appspot.com",
    messagingSenderId: "32571939905",
    appId: "1:32571939905:web:61cc2c33e459c555077ac0",
    measurementId: "G-F63X20H0B1"
  };

  const app= initializeApp(firebaseConfig);
  export const auth = getAuth (app);
  export const db = getFirestore (app);
  export const storage = getStorage (app);

  export default app;