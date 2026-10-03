export default function Login() {
    return(
                        <section id="login" className="auth-section">
                    <div className="auth-card">
                        <div className="auth-logo">▲</div>
                        <span className="eyebrow">WELCOME BACK</span>
                        <h2>Welcome back, explorer.</h2>
                        <p>Sign in to continue your Himalayan journey.</p>
                        <form>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="you@example.com" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" placeholder="••••••••" />
                            </div>
                            <button className="btn btn-primary btn-full">Login</button>
                        </form>
                        <p className="auth-switch">
                            Don't have an account?
                            <a href="#register">Create one</a>
                        </p>
                    </div>
                </section>
     );
}