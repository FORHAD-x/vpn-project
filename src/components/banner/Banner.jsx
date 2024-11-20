import React from 'react'
import "./Banner.css"
const Banner = () => {
  return (
    <>
    <section className='banner'>
        <div className="container">
            <div className="banner_row">
                <div className="banner_text">
                    <h1>Want anything to be easy with <span>LaslesVPN</span>.</h1>
                    <p>Provide a network for all your needs with ease and fun using <span>LaslesVPN</span> discover interesting features from us.</p>
                    <button>Get Started</button>
                </div>
                <div className="banner_img">
                    <img src="image/banner.png" alt="" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Banner