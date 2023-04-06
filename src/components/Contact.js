import React from 'react'

function Contact() {
  return (
    <div className='Contact'>
      <div className='MiniContainer'>
        <div className='SectionTitle'>
          {"<CONTACT>"}
        </div>
        <div className='ContactContainer'>
          Contact
          <button class="button-spaceship-pushable" type='button'>
            <span class="button-spaceship-shadow"></span>
            <span class="button-spaceship-edge"></span>
            <span class="button-spaceship-front text">
              Enviar!
            </span>
          </button>
        </div>
        <div className='SectionTitle'>
          {"</CONTACT>"}
        </div>
      </div>
    </div>
  )
}

export default Contact