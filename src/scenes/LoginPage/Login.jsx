import React from 'react'
import './Login.css'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Alert from '../../components/Alert/Alert.jsx';
export default function Login() {
    const [loginsignupToggle, setLoginsignuptoggle] = React.useState(true);
    const [email, setEmail] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [cpassword, setcPassword] = React.useState('');
    const [message, setMessage] = React.useState('');
    const navigate = useNavigate();
    const btntoggle = () => {
        setLoginsignuptoggle(!loginsignupToggle);
    }
    Axios.defaults.withCredentials = true;
    const formSubmitlogin = () => {
        document.getElementById("loader").style.display = "flex";
        Axios.post(`https://backend-sm.vercel.app/auth/login`, {username: username, email: email, password: password}).then((response) => {
            console.log(response);
            setMessage(response.data.message);
            setTimeout(() => {
                document.getElementById("loader").style.display = "none";
                document.getElementById("alert").style.top = "20px"
            }, 1000);
            if (response.data.loginStatus === true) {
                navigate('/');
            }
        })
    }
    const formSubmitsignup = () => {
        document.getElementById("loader").style.display = "flex";
        Axios.post('https://backend-sm.vercel.app/auth/signup', {username: username, email: email, password: password}).then((response) => {
            console.log(response.data.user);
            setMessage(response.data.message);
            navigate('/');
        })
    }
    const passwordCompare = () => {
        if (password !== cpassword) {
            return(
                <p className='chkpass-alert'>* Passwords don't match, Re-check!</p>
            )
        }
        else{
            return null;
        }
    }

    const loginsignupform = () => {
        if (loginsignupToggle === true) {        
            return (
                <div className="body">
                    <div className="container-login">
                        <p className="heading">LOGIN</p>
                        <input type="text" placeholder='username' className="authInput" onChange={(e) => {
                            setEmail(e.target.value);
                            setUsername(e.target.value);
                        }}></input>
                        <input type="password" placeholder='password' className="authInput" onChange={(e) => {
                            setPassword(e.target.value);
                        }}></input>
                        <button className="authButton" onClick={formSubmitlogin}>
                            <i className="fa-solid fa-spin fa-spinner" id='loader'></i>Login
                        </button>
                        <div className="moreSection">
                            <p style={{ margin: 'auto', fontSize: '15px', fontFamily: "'Anton', sans-serif" }}>Don't have an Account?</p>
                            <button className="moreButton" onClick={btntoggle}>
                                SignUp
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div className="body">
                    <div className="container-signup">
                        <p className="heading">SIGN UP</p>
                        <input type="text" placeholder='Email' className="authInput" onChange={(e) => {
                            setEmail(e.target.value);
                        }}></input>
                        <input type="text" placeholder='Username' className="authInput" onChange={(e) => {
                            setUsername(e.target.value);
                        }}></input>
                        <input type="password" placeholder='Password' className="authInput" onChange={(e) => {
                            setPassword(e.target.value);
                        }}></input>
                        <input type="password" placeholder=' Confirm Password' className="authInput" onChange={(e) => {
                            setcPassword(e.target.value);
                        }}></input>
                        {passwordCompare()}
                        <button className="authButton" onClick={formSubmitsignup}>
                            <i className="fa-solid fa-spin fa-spinner" id='loader'></i>SignUp
                        </button>
                        <div className="moreSection">
                            <p style={{ margin: 'auto', fontSize: '15px', fontFamily: "'Anton', sans-serif" }}>Already have an Account?</p>
                            <button className="moreButton" onClick={btntoggle}>
                                Login
                            </button>
                            <div className="g-signin2" data-onsuccess="onSignIn"></div>
                        </div>
                    </div>
                </div>
            )
        }

    }

    return(
        <>
            <div id='alert' className="alert">
                <Alert message={message} status={"alert"} />
            </div>
            {loginsignupform()}
        </>
    )
}