import React from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Header from "../Header/Header";
export default function UserProfile() {
    const [userinfo, setUserinfo] = React.useState({});
    let { username } = useParams();
    // React.useEffect(() => {
    //     Axios.post("https://backend-sm.vercel.app/getUserinfo").then((responce) => {
    //         setUserinfo(responce.data);
    //     })
    // }, []);
    return(
        <>
            <Header />
            <p>Profile page for {username}</p>
            <div className="profile-root">
                <div className="psec-1">
                    <i className="fa-regular fa-user"></i>
                    <div className="psec1-userinfo">
                        <p>{username}</p>
                        <p>Full Name</p>
                        <div className="connectionInfo">
                            <p>Following</p>
                            <p>Followers</p>
                        </div>
                        <button>Follow/Unfollow</button>
                    </div>
                </div>
                <div className="psec-2"></div>
            </div>
        </>
    )
}