import React from "react";
// GLIDE
import emailjs from "emailjs-com";


const ContactComponent = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_nh3pwyh', 'template_xyvndrx', e.target, 'user_DhVbKvTWQOQX3lDfGjGAj')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }
    return(
        <div className="contact wrapper">
            <form className="form" onSubmit={sendEmail}>
                <div className="containers">
                <div className="rows">
                <div className="col-8">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" name="name" required/>
                <span class="separator"> </span>
                </div> 
                <div className="col-8">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" name="email" required/>
                <span class="separator"> </span>
            </div>
            <div className="col-8">
                <label htmlFor="subject">Subject</label>
                <input type="text" className="form-control" id="subject" name="subject" required/>
                <span class="separator"> </span>
            </div>
                </div>
                <div className="message">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
                <span class="separator"> </span>
                </div>
                <div className="btn">
                <input type="submit" className="btn-btn" value="Send" />
                </div>
                </div>
            </form>
        </div>
    )
};

export default ContactComponent;