import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
export default function Header() {
    Axios.defaults.withCredentials = true;
    const [username, setUsername] = React.useState('');
    const [loginStatus, setLoginStatus] = React.useState(true);
    const [users, setUsers] = React.useState([]);
    const navigate = useNavigate();

    const logout = () => {
        // Axios.get("https://backend-sm.vercel.app/logout").then((response) => {
        //     navigate("/login");
        // });
    };

    const userSearch = (value) => {
        Axios.post("https://backend-sm.vercel.app/auth/getUsers", {
            keyword: value,
        })
            .then((responce) => {
                console.log(responce.data);
                setUsers(responce.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const handleSearch = (value) => {
        userSearch(value);
    };
    const onlyForLoggedin = () => {
        if (loginStatus) {
            return (
                <div
                    className="acc-section"
                >
                    <i className="fa-regular fa-user" onClick={() => {
                        var img = document.getElementById("more-options");
                        img.classList.toggle("dropdown-ul-modified");
                    }}></i>
                    {/* <img
                        src="./anon-pp.png"
                        alt="pp"
                        onClick={() => {
                            var img = document.getElementById("more-options");
                            img.classList.toggle("dropdown-ul-modified");
                        }}
                    ></img> */}
                    <a href="/">{username}</a>
                    <ul
                        className="dropdown-ul"
                        id="more-options"
                        onClick={() => {
                            var img = document.getElementById("more-options");
                            img.classList.toggle("dropdown-ul-modified");
                        }}
                    >
                        <li className="dropdown-li">
                            <a
                                onClick={() => {
                                    navigate(`/${username}`);
                                }}
                            >
                                My Account
                            </a>
                        </li>
                        <li className="dropdown-li">
                            <a href="/">Settings</a>
                        </li>
                        <li className="dropdown-li" onClick={logout}>
                            <a href="/">Logout</a>
                        </li>
                    </ul>
                </div>
            );
        } else {
            return <button onClick={() => {navigate('/login')}}>Login/SignUP</button>;
        }
    };

    return (
        <>
            <div className="root">
                <p>LOGO</p>
                <ul id="ul">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Explore</a>
                    </li>
                    <li className="mob-search">
                        <a href="/">Search People</a>
                    </li>
                    <div className="userSearch">
                        <input
                            placeholder="Search"
                            onChange={(e) => {
                                setTimeout(() => {
                                    handleSearch(e.target.value);
                                }, 1000);
                            }}
                        ></input>
                        {users.length === 0 ? (
                            <></>
                        ) : (
                            <>
                                <ul id="userSearchID">
                                    {users.map((value) => {
                                        return (
                                            <li key={value._id}>
                                                <a onClick={() => {
                                                    navigate(`/${value.username}`);
                                                }}>{value.username}</a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </>
                        )}
                    </div>
                </ul>
                {onlyForLoggedin()}
                <i className="fa-solid fa-bars" onClick={() => {
                    document.getElementById("ul").classList.toggle("menu");
                }}></i>
            </div>
        </>
    );
}
