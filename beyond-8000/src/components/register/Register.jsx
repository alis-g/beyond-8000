export default function Register() {
    return(
                        <section id="register" className="auth-section">
                    <div className="auth-card">
                        <div className="auth-logo">▲</div>
                        <span className="eyebrow">JOIN THE COMMUNITY</span>
                        <h2>Become an explorer.</h2>
                        <p>Create your account and start discovering the Himalayas.</p>
                        <form>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" placeholder="your username" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="you@example.com" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" placeholder="••••••••" />
                            </div>
                            <button className="btn btn-primary btn-full">Create Account</button>
                        </form>
                        <p className="auth-switch">
                            Already have an account?
                            <a href="#login">Login</a>
                        </p>
                    </div>
                </section>
     );
}