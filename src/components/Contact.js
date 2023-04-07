import React from 'react'
import emailjs from '@emailjs/browser';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip';
import { useState,useEffect } from 'react';
import Swal from 'sweetalert2';

function Contact() {
  const [divClass, setDivClass] = useState('rocket');
  const Swal = require('sweetalert2');
  useEffect(()=>{

  })
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_ov3awyk', 'template_a5jeuzu', event.target, 'ly1ZUO_-kRkRHnOVY')
      .then(response =>{
        console.log(response);
        if(response.status === 200){
          setDivClass('rocket-active')
          console.log(response);
          setTimeout(() => {
            setDivClass('rocket');
            Swal.fire({
              title: 'Success',
              text: 'Your message was sent succcessfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
          }, 4000);

        }
      } )
      .catch(error => console.log(error))
  }
  return (
    <div id='contact' className='Contact'>
      <div id='stars1'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div className='MiniContainer'>
        <div className='SectionTitle'>
          <h1 className='title-gradient'>
            {"<Contact>"}
          </h1>
        </div>
        <div className='ContactContainer'>
          <div className='form-container'>
            <div className='div-form'>
              <h1 className='title-form'>Keep in touch!</h1>
              <form className='form-mail' onSubmit={sendEmail}>
                <input type='text' placeholder="My name is" name='user_name'></input>
                <input type='email' placeholder="My e-mail is" name='user_email'></input>
                <textarea name='user_message' id="" cols={30} rows={10}></textarea>
                <div className='contact-button-container'>
                  <button className='button-spaceship-pushable' >
                    <span className="button-spaceship-shadow"></span>
                    <span className="button-spaceship-edge"></span>
                    <span className="button-spaceship-front text">
                      Send Message!
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='Contact-separator'></div>
          <div className='Profile-contact'>
            <div className='data-contact'>
              <h3>Contact information</h3>
              <p>Feel free to contact me or check my socials</p>
              <div className='link-to-social'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                <h2 className='link-to' onClick={() => { window.open('https://www.linkedin.com/in/developer-alan-aragon/') }}>Linkedin</h2>
              </div>
              <div className='link-to-social'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
                <h3 className='link-to' onClick={()=>{window.open('mailto:alan.aragon.exe@gmail.com')}}>Email</h3>
              </div>
            </div>
            <div className='rocket-section'>
              <img data-tip data-for="rocket-tooltip"
                src={`${process.env.PUBLIC_URL}/assets/rocket.gif`}
                className={divClass}
                alt='Rocket' 
                style={{
                }} />
              <Tooltip anchorSelect=".rocket" place="left" variant='info'>
                Do a barrel roll !!!
              </Tooltip>
            </div>
          </div>
        </div>
        <div className='SectionTitle'>
          <h1 className='title-gradient'>
            {"</Contact>"}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Contact