import React from 'react'

import "./Loder.css"
const Loader = () => {
  return (
    <div className='loderHolder'>


<div class="loading">
  <svg width="64px" height="48px">
      <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
    <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
  </svg>
</div>

    </div>
  )
}

export default Loader