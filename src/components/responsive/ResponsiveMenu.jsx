import React, { useState } from 'react'
import "./ResponsiveMenu.css"
import { Link } from 'react-router-dom'
import { HiBars3 } from "react-icons/hi2";
const ResponsiveMenu = () => {
    const [Show,setShow] = useState(false)
    const handleShow =()=>{
        setShow(!Show)
    }
  return (
    <>
    <div className="resMenu">
        <div className="container">
            <div className="resMenu_row">
                <div className="res_Menu_logo">
                    <Link to={"/"}><img src="image/Logo.png" alt="logo" /></Link>
                </div>

                <div  className="resMenu_icons">
                    <HiBars3 onClick={handleShow} />

                    { Show &&

                    <div className="resMenu_list">
                    <ul>
                        <li><Link to={"#"}>Home</Link></li>
                        <li><Link to={"#"}>Features</Link></li>
                        <li><Link to={"#"}>Pricing</Link></li>
                        <li><Link to={"#"}>Testimonials</Link></li>
                        <li><Link to={"#"}>Help</Link></li>
                    </ul>
                </div>

                }

                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default ResponsiveMenu