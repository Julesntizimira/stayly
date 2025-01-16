"use client";
import FormField from "@/components/formField";
import PhoneNumberField from "@/components/phoneNumberField";
import DateInput from "@/components/dateInput";
import SelectField from "@/components/selectField";
import { countryCode } from "@/utils";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {User} from "@/types";
import { signIn } from "next-auth/react";


export default function RegisterPage() {
    const router = useRouter();
    const [birthDate, setBirthDate] = useState<Date | null>(null);
    const [user, setUser] = useState <User> ({
        username: "",
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        nationality: "",
        phoneNumber: "",
        countryCode: "",
        birthDate: null
    })
    const [loading, setLoading] = useState(false);

    const [step, setStep] = useState("step1");

    const formValidation = () => {
        if (step === "step1") {
            if (user.username === "" || user.password === "" || user.name === "" || user.email === "" || user.confirmPassword === "") {
                toast.error("Please fill all the fields");
                return false;
            }
            if (user.password !== user.confirmPassword) {
                toast.error("Passwords do not match");
                return false;
            }
        } else if (step === "step2") {
            if (user.nationality === "" || user.phoneNumber === "") {
                toast.error("Please fill all the fields");
                return false;
            }
        }
        return true;
    }
    const handleSubmitStepOne = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formValidation() === true) {
            setStep("step2");
        }
 
    }
    const handleSubmitSteptwo = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formValidation() === true) {
            setLoading(true);
            axios.post("/api/signup", user)
                .then(res => {
                    console.log(res.data);
                    toast.success("user created successfully");
                    setLoading(false);
                    signIn("credentials", {
                        redirect: false, // Prevent automatic redirection
                        username: user.username, // Replace with user input
                        password: user.password,   // Replace with user input
                    }).then((response) => {
                        if (!response?.error) {
                            router.push("/");
                        } else {
                            toast.error("Invalid Credentials");
                            console.log("Sign-in failed:", response?.error);
                            router.push("/login");
                        }})
                })
                .catch(err => {
                    console.log(err);
                    toast.error("user creation failed")
                })
        }
    }
    useEffect(() => {
        if (birthDate) {
            setUser({
                ...user,
                birthDate: birthDate
            })
        }
    }, [birthDate]);

    return (

        <div className="login-page-wrapper register-page-wrapper">

            {
                loading ? (
                    <div className="login-page-rightside">
                        <div className="waiting">
                            <h3>Waiting for your email conformation...</h3>
                            <svg className="spinner" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M18.0003 6.16667C14.9061 6.16667 11.9387 7.39583 9.75075 9.58375C7.56282 11.7717 6.33366 14.7391 6.33366 17.8333C6.33366 20.9275 7.56282 23.895 9.75075 26.0829C11.9387 28.2708 14.9061 29.5 18.0003 29.5C21.0945 29.5 24.062 28.2708 26.2499 26.0829C28.4378 23.895 29.667 20.9275 29.667 17.8333C29.667 14.7391 28.4378 11.7717 26.2499 9.58375C24.062 7.39583 21.0945 6.16667 18.0003 6.16667ZM3.41699 17.8333C3.41699 9.77896 9.94595 3.25 18.0003 3.25C26.0547 3.25 32.5837 9.77896 32.5837 17.8333C32.5837 25.8877 26.0547 32.4167 18.0003 32.4167C9.94595 32.4167 3.41699 25.8877 3.41699 17.8333Z" fill="black" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.0004 6.16669C14.9925 6.16033 12.0996 7.3221 9.93148 9.40711C9.7932 9.53963 9.63018 9.64362 9.45172 9.71315C9.27326 9.78267 9.08285 9.81636 8.89137 9.8123C8.69989 9.80824 8.51108 9.7665 8.33573 9.68947C8.16038 9.61244 8.00192 9.50163 7.86939 9.36336C7.73687 9.22508 7.63287 9.06206 7.56335 8.8836C7.49383 8.70514 7.46013 8.51473 7.4642 8.32325C7.46826 8.13177 7.51 7.94296 7.58703 7.76761C7.66406 7.59226 7.77487 7.4338 7.91314 7.30127C10.6243 4.69586 14.2403 3.24359 18.0004 3.25002C18.3872 3.25002 18.7581 3.40367 19.0316 3.67716C19.3051 3.95065 19.4588 4.32158 19.4588 4.70835C19.4588 5.09513 19.3051 5.46606 19.0316 5.73955C18.7581 6.01304 18.3872 6.16669 18.0004 6.16669Z" fill="black" />
                            </svg>
                        </div>
                    </div>
                ) :
                    step === "step1" ? (

                        <div className="login-page-rightside">
                            <div className="form-heading">
                                <h1>Sign up</h1>
                                <p>Welcome back! Please enter your details.</p>
                            </div>
                            <form className="login-form" onSubmit={handleSubmitStepOne}>
                                <FormField container={{
                                    label: "Name",
                                    placeholder: "Enter your name",
                                    type: "text",
                                    required: true,
                                    value: user.name,
                                    onChange: (e) => setUser({ ...user, name: e.target.value })
                                }} />
                                <FormField container={{
                                    label: "Username",
                                    placeholder: "Enter your username",
                                    type: "text",
                                    required: true,
                                    value: user.username,
                                    onChange: (e) => setUser({ ...user, username: e.target.value })
                                }} />
                                <FormField container={{
                                    label: "Email",
                                    placeholder: "Enter your email",
                                    type: "text",
                                    required: true,
                                    value: user.email,
                                    onChange: (e) => setUser({ ...user, email: e.target.value })
                                }} />
                                <FormField container={{
                                    label: "Password",
                                    placeholder: "Create a password",
                                    type: "password",
                                    hint: "Must be at least 8 characters.",
                                    required: true,
                                    value: user.password,
                                    onChange: (e) => setUser({ ...user, password: e.target.value })
                                }} />
                                <FormField container={{
                                    label: "Password",
                                    placeholder: "Confirm password",
                                    type: "password",
                                    hint: "Must be at least 8 characters.",
                                    required: true,
                                    value: user.confirmPassword,
                                    onChange: (e) => setUser({ ...user, confirmPassword: e.target.value })
                                }} />

                                <button>Create Account</button>
                                <div className="social-logins-container">
                                    <div className="social-login">
                                        <img src="images/googleIcon.png" alt="" />
                                        <p>Sign up with Google</p>
                                    </div>
                                </div>
                                <p>Already have an account? <span
                                    onClick={() => router.push("/login")}
                                >Log in</span></p>
                            </form>
                        </div>) : (
                        <div className="login-page-rightside">
                            <div className="form-heading">
                                <h2>Just one more step...</h2>
                            </div>
                            <form className="login-form" onSubmit={handleSubmitSteptwo}>
                                <SelectField container={{
                                    label: "Nationality",
                                    options: countryCode.map((country) => ({
                                        value: country.name,
                                        label: country.name
                                    })),
                                    value: user.nationality,
                                    onChange: (e) => setUser({
                                        ...user,
                                        nationality: e.target.value
                                    })
                                }} />
                                <PhoneNumberField
                                    container={{
                                        user,
                                        setUser
                                    }}
                                />
                                <DateInput 
                                container={
                                    {
                                        date: birthDate,
                                        setDate: setBirthDate
                                    }
                                } />

                                <button>Next step</button>
                            </form>
                        </div>
                    )
            }

        </div>
    )
}