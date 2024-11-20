import React from 'react'
import "./Features.css"
import { GoCheckCircleFill } from "react-icons/go";

const Features = () => {
  return (
    <>
    <div className="Features">
        <div className="container">
            <div className="Features_row">
                <div className="Features_img">
                    <img src="image/Illustration 2.png" alt="logo" />
                </div>
                <div className="Features_text">
                    <h2>We Provide Many Features You Can Use</h2>
                    <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
                    <p><GoCheckCircleFill className='check text-[#2FAB73]'/> Powerfull online protection.</p>
                    <p><GoCheckCircleFill className='check text-[#2FAB73]'/> Internet without borders.</p>
                    <p><GoCheckCircleFill className='check text-[#2FAB73]'/> Supercharged VPN</p>
                    <p><GoCheckCircleFill className='check text-[#2FAB73]'/> No specific time limits.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Features