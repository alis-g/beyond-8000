import { Link } from "react-router"
import { useAuth } from "../../context/auth-context"

export default function Login() {

    const {login} = useAuth()

    const loginAction = (formData) =>{
        const {email, password} = Object.fromEntries(formData)

        if(!email || !password){
            alert('Email and password are required!')
            return
        }
       
        login({email, password})
    }
    return (
        <section id="login" className="auth-section">
            <div className="auth-card">
                <div className="auth-logo">▲</div>
                <span className="eyebrow">WELCOME BACK</span>
                <h2>Welcome back, explorer.</h2>
                <p>Sign in to continue your Himalayan journey.</p>
                <form action={loginAction}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="you@example.com" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="••••••••" />
                    </div>
                    <button className="btn btn-primary btn-full">Login</button>
                </form>
                <p className="auth-switch">
                    Don't have an account?
                    <Link to={"/register"}>Create one</Link>
                </p>
            </div>
        </section>
    );
}