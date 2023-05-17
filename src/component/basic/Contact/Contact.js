import React from "react";
import "./Contact.css"

const Contact = ()=>{
    return (
        <>
        <form  className="contact">
            <h1>Contact <span>Here</span></h1>
            <input type="text"name="name" id="" placeholder="Your name"/>
            <input type="text"name="email" id="" placeholder="Enter Email" />
            <input type="text"name="phone" id=""placeholder="Enter Phone"/>
            <textarea name="message" id="" cols={30} rows={10} placeholder="type here..."/>
            <button type="submit">Send</button>
        </form>

        </>
    )
};
export default Contact