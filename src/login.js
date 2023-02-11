import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signInWithEmailPassword, signInWIthGoogle } from './firebase';
import { useAuth } from "react-firebase-hooks/auth";
import "./login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuth(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            //maybe add a loading screen
        return;
        }
        if (user) navigate("/dashboard");
        }, [user, loading]);
        return (
            <div className="login"> 
                <div className="login__container">
                    <input type="text" className='login__textbox' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" className='login__textbox' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="login__button" onClick={() => signInWithEmailPassword(email, password)}>Login</button>
                    <button className="login__button" onClick={() => signInWIthGoogle()}>Login with Google</button>
                    <Link to="/reset" className="login__reset">Reset Password</Link>
                    <Link to="/register" className="login__register">Register</Link>
                </div>
            </div>
        )
        }


    
    
    
    )
}

