import React from "react";
import './Header.css'
import { useNavigate } from "react-router-dom";
import Axios from "axios";
export default function Header(props) {
    Axios.defaults.withCredentials = true;
    const [users, setUsers] = React.useState([]);
    const navigate = useNavigate();
    const logout = () => {
        Axios.get('https://backend-sm.vercel.app/logout').then((response) => {
            navigate('/login');
        })
    }

    const userSearch = () => {
        Axios.get('https://backend-sm.vercel.app/getUsers').then((responce) => {
            console.log(responce.data);
            setUsers(responce.data);
        })
    }
    const onlyForLoggedin = () => {
        if (props.loginStatus) {
            return (
                <div className="acc-section">
                    <img src="./anon-pp.png" alt="pp" onMouseEnter={() => {
                            var img = document.getElementById("more-options")
                            img.classList.toggle("dropdown-ul-modified")
                        }
                    }></img>
                    <a href="/">{props.username}</a>
                    <ul className="dropdown-ul" id="more-options" onMouseLeave={() => {
                        var img = document.getElementById("more-options")
                        img.classList.toggle("dropdown-ul-modified")
                    }
                }>
                        <li className="dropdown-li"><a onClick={() => {
                            navigate(`/${props.username}`)
                        }}>My Account</a></li>
                        <li className="dropdown-li"><a href="/">Settings</a></li>
                        <li className="dropdown-li" onClick={logout}><a href="/">Logout</a></li>
                    </ul>
                </div>
            )
        } else{
            return(
                <button onClick={navigate('/login')}>Login/SignUP</button>
            )
        }
    }
    return (
        <>
            <div className="root">
                <p>LOGO</p>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Explore</a></li>
                    <input placeholder="Search" onChange={userSearch}></input>
                </ul>
                {onlyForLoggedin()}
            </div>
        </>
    )
}