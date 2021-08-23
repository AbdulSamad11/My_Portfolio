import React from "react";
import Nav from "../Nav/Nav.jsx";
import './contact.css'
const Contact = () => {
  return (
    <>
    <Nav/>
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
                        abc@gmail.com
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
                <a href="#">
                    <span><i class="fab fa-facebook-f"></i></span>
                </a>
                <a href="#">
                    <span><i class="fab fa-instagram"></i></span>
                </a>

                <a href="#">
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
                    <input type="text" class="input" required/>
                    <label class="placeholder">First Name</label>
                </div>

                <div class="input_group w_50">
                    <input type="text" class="input" required/>
                    <label class="placeholder">Last Name</label>
                </div>

                <div class="input_group w_50">
                    <input type="text" class="input" required/>
                    <label class="placeholder">Emal Address</label>
                </div>

                <div class="input_group w_50">
                    <input type="tel" class="input" required/>
                    <label class="placeholder">Mobile Number</label>
                </div>

                <div class="input_group w_100">
                    <textarea class="input input_textarea " rows="6" required></textarea>
                    <label class="placeholder textarea">Write your message here...</label>
                </div>
                <div class="input_group">
                    <input type="submit" class="btn" value="Send"/>
                </div>
            </div>
        </div>
    </section>
    </div>
    </>
  );
};

export default Contact;
