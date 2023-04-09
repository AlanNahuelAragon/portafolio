import React from 'react'

function About({handleClick}) {
    return (
        <div id='about' className='About'>
            <div className='MiniContainer'>
                <div className='SectionTitle'>
                    <h1 className='title-gradient'>
                        {"<About>"}
                    </h1>
                </div>
                <div className='AboutContainer'>
                    <div className='card-container'>
                        <div className='card'>
                            <div className='profile'>
                                <div className='profile-pic-container'>
                                    <img className='profile-pic' 
                                    src={`${process.env.PUBLIC_URL}/assets/FotoPFCircle.png`} 
                                    alt='Profile-pic'></img>
                                </div>
                                <div className='profile-data-container'>
                                    <div className='message-profile'>
                                        <h3>.Net Developer|Full Stack</h3>
                                    </div>
                                    <div className='message-profile'>
                                        <p>alan.aragon.exe@gmail.com</p>
                                    </div>
                                    <div className='message-together'>
                                        <p onClick={() => handleClick("contact")}>
                                        Lets work together!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='presentation'>
                                <div className='message-about'>
                                    <p>
                                        "Since my first project at Global Game Jam in 2019,
                                        I have followed my path as a programmer until now
                                        , acquiring the necessary knowledge to become a
                                        Full Stack developer."
                                    </p>
                                </div>
                                <div className='message-separator'>
                                    ________________________
                                </div>
                                <div className='message-about'>
                                    <p>
                                        "I can program an entire website with ease,
                                        I am organized and I like to investigate new technologies that improve my projects"
                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
                <div className='SectionTitle'>
                    <h1 className='title-gradient'>
                        {"<About/>"}
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default About