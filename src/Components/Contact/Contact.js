import React from "react";
import emailjs from "emailjs-com";
import{ init } from 'emailjs-com';
import './contact.css'
import Bounce from 'react-reveal/Bounce';
init("user_4WcrCOogGeTS9zyg7euJ9");


const Contact = () => {


  const onSubmit = (e) => {
      e.preventDefault()
    console.log(e.target);

    emailjs.sendForm('contact_form', 'template_dr99p5a', e.target, 'user_4WcrCOogGeTS9zyg7euJ9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error);
      });
    e.target.reset();
  };

  return (
    <div className="container mt-2 text-indigo contact">
      <Bounce top>
      <h3 className="text-center">Contact Me</h3>
      <form onSubmit={onSubmit} className="emailjs">
        <div className="row pt-3 mx-auto">
          <div className="col-7 p-2 form-group mx-auto">
            <input
            name='name'
            
              className="form-control"
              placeholder="name"
            ></input>
          </div>
          <div className="col-7 p-2 form-group mx-auto">
            <input
            name='email'
            
              className="form-control"
              placeholder="email"
            ></input>
          </div>
          <div className="col-7 p-2 form-group mx-auto">
            <input
            name='subject'
            
              className="form-control"
              placeholder="subject"
            ></input>
          </div>
          <div className="col-7 p-2 form-group mx-auto">
            <textarea
            name='message'
            id='message'
              className="form-control"
              
              placeholder="Your Query"
            ></textarea>
          </div>
          <div className="col-7 pt-2 mx-auto">
            
            <input type='submit' className="btn btn-info" value='Send Message' />
          </div>
        </div>
      </form>
      </Bounce>
      
    </div>
  );
};

export default Contact;
