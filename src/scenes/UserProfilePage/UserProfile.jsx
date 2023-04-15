import React from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Header from "../../components/Header/Header";
import './UserProfile.css'
export default function UserProfile() {
    const [userinfo, setUserinfo] = React.useState({});
    let { username } = useParams();
    return(
        <>
            <Header />
            <div className="profile-root">
                <div className="psec-1">
                    <i className="fa-regular fa-user"></i>
                    <div className="psec1-userinfo">
                        <p>{username}</p>
                        <p>Full Name</p>
                        <div className="connectionInfo">
                            <div>
                                <p className="connection-num">100</p>
                                <p className="connection-type">Following</p>
                            </div>
                            <div>
                                <p className="connection-num">100</p>
                                <p className="connection-type">Followers</p>
                            </div>
                        </div>
                        <button>Follow/Unfollow</button>
                    </div>
                </div>
                <div className="psec-2"></div>
            </div>
        </>
    )
}