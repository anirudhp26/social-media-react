import React from 'react';
import './Alert.css';

export default function Alert(props) {
    
    const icon = () => {
        if (props.status === "alert") {
            return(
                <i className="fa-solid fa-circle-exclamation fa-shake"></i>
            );
        } else if (props.status === "success") {
            return(
                <i className="fa-solid fa-thumbs-up"></i>
            );
        }
    }
    return (
        <div className='alert-root'>
            <div className="alert-head">
                <p>{icon()} &nbsp; Oops...</p>
                <i className="fa-solid fa-xmark" onClick={() => {document.getElementById("alert").style.top = "-18vh"}}></i>
            </div>
            <p className='alert-body'>{props.message}</p>
        </div>
    )
}
