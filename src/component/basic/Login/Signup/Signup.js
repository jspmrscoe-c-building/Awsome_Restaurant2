import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
// import image from  "../images/14.jpg"
import './signup.css';


const Signup = ()=>{
    return (
        <>
        <section className="signup">
            <div className="container mt-5">
                <div className="signu-form">
                    <h2 className="form-title">SignUp</h2>
                    <form className="register-form" id="registration-form">

                        <div className="form-group">

                            <label htmlFor="name">
                            <i class="zmdi zmdi-account"></i>
                            </label>
                            <input type="text" name="name" id="name"  autoComplete="off" placeholder="First name"/>

                        </div>
                        <div className="form-group">

                            <label htmlFor="name">
                            <i class="zmdi zmdi-account"></i>
                            </label>
                            <input type="text" name="name" id="name"  autoComplete="off" placeholder="Last name"/>

                        </div>
                        <div className="form-group">

                            <label htmlFor="email">
                            <i class="zmdi zmdi-account-box-mail"></i>
                            </label>
                            <input type="email" name="email" id="email"  autoComplete="off" placeholder="Your Email"/>

                        </div>
                        <div className="form-group">

                            <label htmlFor="Phone">
                            <i class="zmdi zmdi-code-smartphone"></i>
                            </label>
                            <input type="text" Phone="Phone" id="Phone"  autoComplete="off" placeholder="Your Phone"/>

                        </div>
                   
                        <div className="form-group">

                            <label htmlFor="password">
                            <i class="zmdi zmdi-lock"></i>
                            </label>
                            <input type="text" password="password" id="password"  autoComplete="off" placeholder="Your password"/>

                        </div>
                        <div className="form-group">

                            <label htmlFor="Conferm password">
                            <i class="zmdi zmdi-lock"></i>
                            </label>
                            <input type="text" Conferm password="Conferm password" id="Conferm password"  autoComplete="off" placeholder="Conferm password"/>

                        </div>

                        <div className="form-group-button">
                            <input type="submit" name="signup" id="signup" className="form-sumit"
                            value="register"
                            />
                        </div>

                    </form>
                    </div>
                    <div className="signup-image">
                        <figure>
                        <img src="/images/signup.png" className="best"/>
                        </figure>
                        <NavLink to ="/Login" className="sign-image-link">I amAlready Register</NavLink>
                    </div>
              
            </div>
            <hr />
        <hr />
        <hr />
        <hr />
        <hr />

        </section>
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />


       
        </>
    )
};
export default Signup