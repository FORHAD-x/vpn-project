import React from 'react'
import Common from '../common/common'
import './Global.css'
import { SiTarget } from "react-icons/si";

const Global = () => {
  return (
    <>
    <section className='Global'>
        <div className="container">
            <Common Commonh2={'Huge Global Network of Fast VPN'} Commonp={'See LaslesVPN everywhere to make it easier for you when you move locations.'}/>
                <div className="map">
                    <img src="image/map.png" alt="image" />
                    <div className="map_target"><SiTarget/></div>
                    <div className="map_target"><SiTarget/></div>
                    <div className="map_target"><SiTarget/></div>
                    <div className="map_target"><SiTarget/></div>
                    <div className="map_target"><SiTarget/></div>
                    <div className="map_target"><SiTarget/></div>
                    <div className="map_target"><SiTarget/></div>
                    <div className="map_target"><SiTarget/></div>
                    <div className="map_target"><SiTarget/></div>
                    <div className="map_target"><SiTarget/></div>
                    <div className="map_target"><SiTarget/></div>
                    <div className="map_target"><SiTarget/></div>
                    <div className="map_target"><SiTarget/></div>
                    <div className="map_target"><SiTarget/></div>
                    <div className="map_target"><SiTarget/></div>
                    <div className="map_target"><SiTarget/></div>
                    <div className="map_target"><SiTarget/></div>
                    <div className="map_target"><SiTarget/></div>
                    <div className="map_target"><SiTarget/></div>
                    <div className="map_target"><SiTarget/></div>
                    <div className="map_target"><SiTarget/></div>
                    <div className="map_target"><SiTarget/></div>
                    <div className="map_target"><SiTarget/></div>
                    <div className="map_target"><SiTarget/></div>
                    <div className="map_target"><SiTarget/></div>
                    <div className="map_target"><SiTarget/></div>
                    <div className="map_target"><SiTarget/></div>
                    <div className="map_target"><SiTarget/></div>
                    <div className="map_target"><SiTarget/></div>
                    <div className="map_target"><SiTarget/></div>
                </div>
                <div className="sponsored">
                    <img src="image/netflix.png" alt="image" />
                    <img src="image/reddit.png" alt="image" className='reddit'/>
                    <img src="image/discord.png" alt="image" />
                    <img src="image/spotify.png" alt="image" />
                </div>

        </div>
    </section>
    </>
  )
}

export default Global