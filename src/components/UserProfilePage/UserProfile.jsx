import React from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Header from "../Header/Header";
export default function UserProfile() {
    let { username } = useParams();
    // React.useEffect(() => {
    //     Axios.get("https://backend-sm.vercel.app/getUserinfo").then((responce) => {
    //         setLoggedUser(responce.data);
    //     })
    // }, [loggeduser]);
    return(
        <>
        <Header />
            <p>Profile page for {username}</p>
        </>
    )
}