"use client";
import FormField from "@/components/formField";
import {useState} from "react"
import axios from "axios";

export default function LoginPage() {
    const [user, setUser] = useState({
        
            username: "",
            password: ""
        
    })
    const formValidation = () => {
        if (user.username === "" || user.password === "") {
            alert("Please fill all the fields");
            return false;
        }
        return true;
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formValidation() === true) {
            axios.post("/api/login", user)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

    return (
        <div className="login-page-wrapper">
            <div className="login-page-rightside">
                <div className="form-heading">
                    <h1>Log in</h1>
                    <p>Welcome back! Please enter your details.</p>
                </div>
                <form className="login-form" onSubmit={handleSubmit}>
                    <FormField container={{
                        label: "Username",
                        placeholder: "Enter your username",
                        type: "text",
                        value: user.username,
                        onChange: (e) => setUser({...user, username: e.target.value})
                    }} />
                    <FormField container={{
                        label: "Password",
                        placeholder: "••••••••",
                        type: "password",
                        value: user.password,
                        onChange: (e) => setUser({...user, password: e.target.value})
                    }} />
                    <fieldset className="combined-fields">
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Remember for 30 days</span>
                        </label>
                        <span className="forget-pswd">Forgot password?</span>
                    </fieldset>
                    <button type="submit">Sign in</button>
                    <div className="social-logins-container">
                        <div className="social-login">
                            <img src="images/googleIcon.png" alt=""/>
                        </div>
                        <div className="social-login">
                        <img src="images/facebookIcon.png" alt=""/>
                        </div>
                    </div>
                    <p>Don’t have an account? <span>Sign up</span></p>
                </form>
            </div>
        </div>
    )
}