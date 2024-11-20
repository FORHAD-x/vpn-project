import React from 'react'
import "./BannerBottom.css"
import { FaUser } from "react-icons/fa6";
import { FaServer } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import CountUp from 'react-countup';

const BannerBottom = () => {
  return (
    <>
    <div className="BannerBottom">
        <div className="container">
            <div className="BannerBottom_row">
                <div className="BannerBottom_bg">
                    <div className="Banner_user">
                        <div className="icon">
                        <FaUser />
                        </div>
                        <div className="user">
                        <div className="user_number">
                        <CountUp duration={7} end={99} />
                        +
                        </div>
                        <p>Users</p>
                        </div>
                        <div className="user_line"></div>
                    </div>
                        <div className="Banner_user">
                        <div className="icon">
                        <FaLocationDot />
                        </div>
                            <div className="user">
                            <div className="user_number">
                            <CountUp duration={7} end={30} />
                            +
                        </div>
                            <p>Users</p>
                            </div>
                        <div className="user_line"></div>

                        </div>
                            <div className="Banner_user">
                            <div className="icon">
                            <FaServer />
                            </div>
                                <div className="user">
                                <div className="user_number">
                                <CountUp duration={7} end={50} />
                                +
                        </div>
                                <p>Users</p>
                                </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default BannerBottom