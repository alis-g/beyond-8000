import { Link } from "react-router";
import  useAuth  from "../../hooks/useAuth";
import { validateForm } from "../../helpers";



export default function Register() {
    const {register} = useAuth()
    const registerAction = (formData) => {
        const { email, password, confirmPassword } = Object.fromEntries(formData)
        if(!validateForm.register(email, password, confirmPassword)){
            return
        }
        register({email, password})
        
    }
    return (
        <section id="register" className="auth-section">
            <div className="auth-card">
                <div className="auth-logo">▲</div>
                <span className="eyebrow">JOIN THE COMMUNITY</span>
                <h2>Become an explorer.</h2>
                <p>Create your account and start discovering the Himalayas.</p>
                <form action={registerAction}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="you@example.com" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="••••••••" />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" name="confirmPassword" placeholder="••••••••" />
                    </div>
                    <button className="btn btn-primary btn-full">Create Account</button>
                </form>
                <p className="auth-switch">
                    Already have an account?
                    <Link to={'/login'}>Login</Link>
                </p>
            </div>
        </section>
    );
}