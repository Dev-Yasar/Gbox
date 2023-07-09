import React from 'react'

import { Link } from 'react-router-dom'


import "./VersionCard.css"
const VersionCard = (props) => {
  return (
    <div>
        <div class="container">
      <Link to={props.url} >
    <div class="card_box">
        <img className='vImg' src={props.img} alt="" />
        <span></span>
    </div>
      </Link>      
</div>
    </div>
  )
}

export default VersionCard