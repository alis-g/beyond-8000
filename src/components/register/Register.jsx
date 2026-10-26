import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";
import { validateForm } from "../../helpers";
import { useState } from "react";


const initialValues = {
    email: "",
    password: "",
    confirmPassword: ""
};

export default function Register() {
    const { register } = useAuth()
    const [values, setValues] = useState(initialValues)

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const { email, password, confirmPassword } = values;

        if (!validateForm.register(email, password, confirmPassword)) {
            return;
        }

        register({ email, password });
    };
    return (
 <section id="register" className="auth-section">
            <div className="auth-card">
                <div className="auth-logo">▲</div>

                <span className="eyebrow">JOIN THE COMMUNITY</span>

                <h2>Become an explorer.</h2>

                <p>
                    Create your account and start discovering the Himalayas.
                </p>

                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            value={values.email}
                            onChange={changeHandler}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            value={values.password}
                            onChange={changeHandler}
                        />
                    </div>

                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="••••••••"
                            value={values.confirmPassword}
                            onChange={changeHandler}
                        />
                    </div>

                    <button
                        className="btn btn-primary btn-full"
                        type="submit"
                    >
                        Create Account
                    </button>
                </form>

                <p className="auth-switch">
                    Already have an account?
                    <Link to="/login">Login</Link>
                </p>
            </div>
        </section>
    );
}