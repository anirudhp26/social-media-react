import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Login from "./scenes/LoginPage/Login";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from './scenes/Home/Home.jsx';
import UserProfile from "./scenes/UserProfilePage/UserProfile";
import Layout from "./Layout.js";
import { Provider } from "react-redux";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} index />
          <Route path="login" element={<Login />} />
          <Route path=":username" element={<UserProfile />} />
          <Route element={<Layout />}>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;




// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa4mP9fi709luOYj9fuGjpglI153gFsSM",
  authDomain: "test-4e8c8.firebaseapp.com",
  projectId: "test-4e8c8",
  storageBucket: "test-4e8c8.appspot.com",
  messagingSenderId: "839320921949",
  appId: "1:839320921949:web:368b555e4efab0bc796ab4",
  measurementId: "G-BL76RFB8RD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);