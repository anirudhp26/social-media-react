import React from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import './Home.css';
export default function Home() {
    const [loginStatus, setLoginStatus] = React.useState(false);
    const [username, setUsername] = React.useState('');
    const navigate = useNavigate();
    Axios.defaults.withCredentials = true;
    React.useEffect(() => {
        Axios.get('https://backend-sm.vercel.app/checkLogin').then((response) => {
            if (response.data.loggedIn === true) {
                setLoginStatus(response.data.loggedIn);
                setUsername(response.data.username);
                document.getElementById('loading').style.display = 'none';
            } else {
                navigate('/login');
            }
        })
    });

    // const homeContent = () => {
    //     if (loginStatus === false) {
    //         return(
    //             <a href="/login">Login kr bhai kya kr rha, aisa karega kya sale, login kr havle</a>
    //             )
    //         }
    //         else {
    //             return(
    //                 <>
    //                     <p>Welcome {username}</p>
    //                 </>
    //             )
    //         }
    // }
    return(
        <>
            <Header username={username} loginStatus={loginStatus} />
            <span className="sr-only" id="loading"></span>
            {/* {homeContent()} */}
        </>
    )
}