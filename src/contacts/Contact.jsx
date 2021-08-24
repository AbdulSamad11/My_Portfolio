import React, { useState } from "react";
import Nav from "../Nav/Nav.jsx";
import './contact.css'
import axios from "axios";
const Contact = () => {
    const [msgInfo, setMsgInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",

    });

    const setValues = (event) => {
      
        const { name, value } = event.target;

        setMsgInfo((pre) => {
            return {
                ...msgInfo,
                [name]: value,
            };
        });
    };

    const send = () => {

        axios
            .post("http://localhost:3001/sendMessage", {
                firstName: msgInfo.firstName,
                lastName: msgInfo.lastName,
                phone: msgInfo.phone,
                email: msgInfo.email,
                message: msgInfo.message,
        
            })
            window.location.reload();
    };
    return (
        <>
            <Nav />
            <div className='contacts_page'>
                <section class="contact_wrapper">
                    <div class="contact_info">
                        <h3 class="title">
                            Contact Info
                        </h3>
                        <div class="icons-text">
                            <div class="icon">
                                <span><i class="fas fa-map-marker-alt"></i></span>
                                <div class="text">
                                    123 ABCD Road, City State Country - 123456
                                </div>
                            </div>
                            <div class="icon">
                                <span><i class="far fa-envelope"></i> </span>
                                <div class="text">
                                    asasamad11@gmail.com
                                </div>
                            </div>
                            <div class="icon">
                                <span> <i class="fas fa-phone"></i> </span>
                                <div class="text">
                                    123-456-789

                                </div>
                            </div>
                        </div>
                        <div class="soci_wrap">
                            <a href="https://www.facebook.com/profile.php?id=100007113578924" rel="noreferrer" target="_blank">
                                <span><i class="fab fa-facebook-f"></i></span>
                            </a>
                            <a href="https://instagram.com/samad4798?utm_medium=copy_link" rel="noreferrer" target="_blank">
                                <span><i class="fab fa-instagram"></i></span>
                            </a>

                            <a href="https://github.com/AbdulSamad11" rel="noreferrer" target="_blank">
                                <span> <i class="fab fa-github"></i></span>
                            </a>
                        </div>
                    </div>
                    <div class="contact_msg">
                        <h3 class="title">
                            Send a Message
                        </h3>
                        <div class="form_fild">
                        
                            <div class="input_group w_50">
                                <input type="text" class="input" onChange={setValues}
                                    name="firstName"
                                    value={msgInfo.firstName}
                                    required />
                                <label class="placeholder">First Name</label>
                            </div>

                            <div class="input_group w_50">
                                <input type="text" class="input" name="lastName"
                                    value={msgInfo.lastName}
                                    onChange={setValues}
                                    required />
                                <label class="placeholder">Last Name</label>
                            </div>

                            <div class="input_group w_50">
                                <input type="text" class="input" name="email"
                                    onChange={setValues}
                                    value={msgInfo.email}
                                    required />
                                <label class="placeholder">Email Address</label>
                            </div>

                            <div class="input_group w_50">
                                <input type="tel" class="input" name="phone"
                                    onChange={setValues}
                                    value={msgInfo.phone}
                                    required />
                                <label class="placeholder">Mobile Number</label>
                            </div>

                            <div class="input_group w_100">
                                <textarea class="input input_textarea " rows="6" name="message"
                                    value={msgInfo.message}
                                    onChange={setValues}
                                    required></textarea>
                                <label class="placeholder textarea">Write your message here...</label>
                            </div>
                            <div class="input_group">
                                <button
                                type="submit"
                                    onClick={send}
                                    class="btn"
                                >
                                    send
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Contact;
