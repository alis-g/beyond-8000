import { Link } from "react-router"
import  useAuth  from "../../hooks/useAuth"
import { toast } from "react-toastify"
import { validateForm } from "../../helpers"
import { useState } from "react"

const initialValues = {
    email : '',
    password: ''
}

export default function Login() {

    const {login} = useAuth()
    const [values, setValues] = useState(initialValues)

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    };

        const submitHandler = async (e) => {
        e.preventDefault();

        const { email, password } = values;

        if (!validateForm.login(email, password)) {
            return;
        }

        login({email, password})
    };


    return (
               <section id="login" className="auth-section">
            <div className="auth-card">
                <div className="auth-logo">▲</div>

                <span className="eyebrow">WELCOME BACK</span>

                <h2>Welcome back, explorer.</h2>

                <p>Sign in to continue your Himalayan journey.</p>

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

                    <button
                        className="btn btn-primary btn-full"
                        type="submit"
                    >
                        Login
                    </button>
                </form>

                <p className="auth-switch">
                    Don't have an account?
                    <Link to="/register">Create one</Link>
                </p>
            </div>
        </section>
    );
}