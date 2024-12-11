import FormField from "@/components/formField";

export default function LoginPage() {
    return (
        <div className="login-page-wrapper">
            <div className="login-page-rightside">
                <div className="form-heading">
                    <h1>Log in</h1>
                    <p>Welcome back! Please enter your details.</p>
                </div>
                <form className="login-form">
                    <FormField container={{
                        label: "Email",
                        placeholder: "Enter your email",
                        type: "text"
                    }} />
                    <FormField container={{
                        label: "Password",
                        placeholder: "••••••••",
                        type: "password"
                    }} />
                    <fieldset className="combined-fields">
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Remember for 30 days</span>
                        </label>
                        <span className="forget-pswd">Forgot password?</span>
                    </fieldset>
                    <button>Sign in</button>
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