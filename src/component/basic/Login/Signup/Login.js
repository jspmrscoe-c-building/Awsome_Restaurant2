import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
// import image from  "../images/14.jpg"
import './signup.css';


const Login = ()=>{
    return (
        <>
        <section className="signup">
            <div className="container mt-5">
                <div className="signu-form">
                   
                    <form className="register-form" id="registration-form">
                    <h2 className="form-title">Login</h2>

                        <div className="form-group">

                            <label htmlFor="email">
                            <i class="zmdi zmdi-account-box-mail"></i>
                            </label>
                            <input type="email" name="email" id="email"  autoComplete="off" placeholder="Your Email"/>

                        </div>
                   
                        <div className="form-group">

                            <label htmlFor="password">
                            <i class="zmdi zmdi-lock"></i>
                            </label>
                            <input type="text" password="password" id="password"  autoComplete="off" placeholder="Your password"/>

                        </div>

                        <div className="form-group-button">
                            <input type="submit" name="signup" id="signup" className="form-sumit"
                            value="register"
                            />
                        </div>

                    </form>
                    <div className="signup-image">
                    </div>
                </div>
            </div>

        </section>

       
        </>
    )
};
export default Login