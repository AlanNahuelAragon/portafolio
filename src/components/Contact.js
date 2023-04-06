import React from 'react'
import emailjs from '@emailjs/browser';

function Contact() {
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_ov3awyk', 'template_a5jeuzu', event.target, 'ly1ZUO_-kRkRHnOVY')
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }
  return (
    <div id='contact' className='Contact'>
      <div className='MiniContainer'>
        <div className='SectionTitle'>
          <h1 className='title-gradient'>
            {"<Contact>"}
          </h1>
        </div>
        <div className='ContactContainer'>
          <div className='div-form'>
            <h1 className='title-form'>Contact</h1>
            <form className='form-mail' onSubmit={sendEmail}>
              <label>Name</label>
              <input type='text' name='user_name'></input>
              <hr />

              <label>Email</label>
              <input type='email' name='user_email'></input>
              <hr />

              <label>Message</label>
              <textarea name='user_message' id="" cols={30} rows={10}></textarea>
              <hr />
              <button className='button-spaceship-pushable '>
                <span class="button-spaceship-shadow"></span>
                <span class="button-spaceship-edge"></span>
                <span class="button-spaceship-front text">
                  Send Message!
                </span>
              </button>

            </form>

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