import React from 'react'
import './common.css'

const Common = ({Commonh2,Commonp}) => {
  return (
    <>
    <div className="container">
        <div className="common">
            <h2>{Commonh2}</h2>
            <p>{Commonp}</p>
        </div>
    </div>
    </>
  )
}

export default Common