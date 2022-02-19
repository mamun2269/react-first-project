import React, { useState } from 'react';

const Contact = () => {
    const [inputs, setInputs]= useState({
        email:"",
        username:"",
        subject:"",
        message:""
    });

    const handleChange=(event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((prevInputs)=>{
            return{
                ...prevInputs,
                [name]: value
            }
        })
    }

    const handleSubmit=(event) => {
        event.preventDefault();
        setInputs({
            email:"",
            username:"",
            subject:"",
            message:""
        })
    }


    return (
        <div>
            <div className="contact_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="contact_form">
                                <form onSubmit={handleSubmit}>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={inputs.email}
                                        placeholder="Enter Email"
                                        onChange={handleChange}
                                    />
                                    <input 
                                        type="text" 
                                        name="username"
                                        value={inputs.username}
                                        placeholder="Enter Username"
                                        onChange={handleChange}
                                    />
                                    <input 
                                        type="text" 
                                        name="subject"
                                        value={inputs.subject}
                                        placeholder="Enter Subject"
                                        onChange={handleChange}
                                    />
                                    <textarea name="" id="" cols="30" rows="5"
                                        name="message"
                                        value={inputs.message}
                                        placeholder='Write message'
                                        onChange={handleChange}
                                    ></textarea>
                                    <button type="submit" className="send_btn">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
