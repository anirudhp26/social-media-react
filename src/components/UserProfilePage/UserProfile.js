import React from "react";
import { useParams } from "react-router-dom";
export default function UserProfile() {
    let { username } = useParams();
    return(
        <p>Profile page for {username}</p>
    )
}