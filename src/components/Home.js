import React from 'react'
import Spline from '@splinetool/react-spline'

function Home() {

    return (
        <div id='home' className='Home'>
            <div className='MiniContainer'>
                <div className='SectionTitle'>
                    <h1 className='title-gradient'>
                        {"<Home>"}
                    </h1>
                </div>
                <div className='MiniBrowser'>
                    <div className='top-bar'>
                        <div className='circles'>
                            <div className='dot-yellow'></div>
                            <div className='dot-green'></div>
                            <div className='dot-red'></div>
                        </div>
                    </div>
                    <div className='center'>
                        <div className='sidebar'>
                            <Spline scene="https://prod.spline.design/J95t0GPdFEkVW8li/scene.splinecode" />
                        </div>
                        <div className='chat-container'>
                            <div className='text-zone-left'>
                                <div className="text-spike-left"></div>
                                <div className='text-bubble-left'>
                                    <h1>Hello dear Visitor!</h1>
                                    <p>i will introduce you to Alan Aragon, a...</p>
                                    <section class="description-animation">
                                        <div class="first">
                                            <div>Computer enthusiast </div>
                                        </div>
                                        <div class="second">
                                            <div>Systems's student</div>
                                        </div>
                                        <div class="third">
                                            <div>Web Programmer</div>
                                        </div>

                                    </section>
                                </div>
                            </div>
                            <div className='text-zone-right'>
                                <div className="text-spike-right"></div>
                                <div className='text-bubble-right'>
                                    <h1>Wow, wonderful!</h1>

                                </div>


                            </div>
                        </div>



                    </div>

                </div>
                <div className='SectionTitle'>
                    <h1 className='title-gradient'>
                        {"</Home>"}
                    </h1>
                </div>

            </div>


        </div>
    )
}

export default Home