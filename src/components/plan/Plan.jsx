import React from 'react'
import "./Plan.css"
import { GoCheck } from "react-icons/go";
const Plan = () => {
  return (
    <>
    <section className='plan'>
        <div className="container">
        <div className="plan_text">
                <h2>Choose Your Plan</h2>
                <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
            </div>
            <div className="plan_row">
                <div className="free_plan">
                    <div className="free_plan_img">
                        <img src="image/Free.png" alt="image" />
                    </div>
                   <div className="free_plan_text">
                    <h2>Free Plan</h2>
                   <p><GoCheck className='tik'/> Works on All Devices</p>
                   <p><GoCheck className='tik'/> Unlimited Bandwitch</p>
                   <p><GoCheck className='tik'/> Encrypted Connection</p>
                   <p><GoCheck className='tik'/> No Traffic Logs</p>
                   <p><GoCheck className='tik'/> Works on All Devices</p>


                   </div>
                   <div className="free_plan_select">
                   <h2>Free</h2>
                   <button>Select</button>
                   </div>
                </div>

                {/* //////// */}

                <div className="free_plan">
                    <div className="free_plan_img">
                        <img src="image/Free.png" alt="image" />
                    </div>
                   <div className="free_plan_text">
                    <h2>Free Plan</h2>
                   <p><GoCheck className='tik'/> Yes Traffic Logs</p>
                   <p><GoCheck className='tik'/> Encrypted Connection</p>
                   <p><GoCheck className='tik'/> Works on All Devices</p>
                   <p><GoCheck className='tik'/> Unlimited Bandwitch</p>
                   <p><GoCheck className='tik'/> Works on All Devices</p>

                   

                   </div>
                   <div className="free_plan_select">
                   <h2>$9 / mo</h2>
                   <button>Select</button>
                   </div>
                </div>

                {/* ////////////////// */}

                <div className="free_plan">
                    <div className="free_plan_img">
                        <img src="image/Free.png" alt="image" />
                    </div>
                   <div className="free_plan_text">
                    <h2>Free Plan</h2>
                   <p><GoCheck className='tik'/> Unlimited Bandwitch</p>
                   <p><GoCheck className='tik'/> Yes Traffic Logs</p>
                   <p><GoCheck className='tik'/> Works on All Devices</p>
                   <p><GoCheck className='tik'/> Works on All Devices</p>
                   <p><GoCheck className='tik'/> Encrypted Connection</p>
                   

                   </div>
                   <div className="free_plan_select">
                   <h2 className='pt-[50px]'>$12 / mo</h2>
                   <button>Select</button>
                   </div>
                </div>

                {/* .............///////........... */}
            

            </div>
        </div>
    </section>
    </>
  )
}

export default Plan