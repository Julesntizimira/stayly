import FormField from "@/components/formField";
// import PhoneNumberField from "@/components/phoneNumberField";
// import SelectField from "@/components/selectField";

export default function RegisterPage() {
    return (
        <div className="login-page-wrapper register-page-wrapper">
            <div className="login-page-rightside">
                <div className="form-heading">
                    <h1>Sign up</h1>
                    <p>Welcome back! Please enter your details.</p>
                </div>
                <form className="login-form">
                    <FormField container={{
                        label: "Name",
                        placeholder: "Enter your name",
                        type: "text",
                        required: true
                    }} />
                    <FormField container={{
                        label: "Email",
                        placeholder: "Enter your email",
                        type: "text",
                        required: true
                    }} />
                    <FormField container={{
                        label: "Password",
                        placeholder: "Create a password",
                        type: "password",
                        hint: "Must be at least 8 characters.",
                        required: true
                    }} />
                    <FormField container={{
                        label: "Password",
                        placeholder: "Confirm password",
                        type: "password",
                        hint: "Must be at least 8 characters.",
                        required: true
                    }} />

                    <button>Create Account</button>
                    <div className="social-logins-container">
                        <div className="social-login">
                            <img src="images/googleIcon.png" alt="" />
                            <p>Sign up with Google</p>
                        </div>
                    </div>
                    <p>Already have an account? <span>Log in</span></p>
                </form>
            </div>
            {/* <div className="login-page-rightside">
                <div className="form-heading">
                    <h2>Just one more step...</h2>
                </div>
                <form className="login-form">
                    <SelectField container={{
                        label: "Nationality",
                        options: [
                            {
                                label: "Rwanda",
                                value: "Rwanda"
                            },
                            {
                                label: "US",
                                value: "US"
                            }
                        ]
                    }}/>
                   <PhoneNumberField/>
                    <button>Next step</button>
                </form>
            </div> */}
            {/* <div className="login-page-rightside">
                <div className="waiting">
                    <h3>Waiting for your email conformation...</h3>
                    <img src="images/loading.png" alt="" />
                </div>
            </div> */}

        </div>
    )
}