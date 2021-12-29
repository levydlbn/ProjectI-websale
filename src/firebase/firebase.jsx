import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"


const firebaseConfig = initializeApp({
    apiKey: "AIzaSyDoMekZDO_cI3-G1Y_RH4IvyxwH45mqvvs",
    authDomain: "sport-store-app-1b606.firebaseapp.com",
    projectId: "sport-store-app-1b606",
    storageBucket: "sport-store-app-1b606.appspot.com",
    messagingSenderId: "145750652546",
    appId: "1:145750652546:web:2a2a39d94ce42f37e4a69b",
    measurementId: "G-KRJPFTDL4Y"
})

export const auth = getAuth()
export default firebaseConfig