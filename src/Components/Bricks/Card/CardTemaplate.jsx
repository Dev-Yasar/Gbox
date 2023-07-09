import React from 'react'
import { Link } from 'react-router-dom'
import image1 from "../../../Assets/images/Image 1.png"
const CardTemaplate = (cardTemplate) => {
  return (
    <div>

<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a >
    <img
      className="p-8 rounded-t-lg"
      src={cardTemplate.img}
      alt="product image"
    />
  </a>
  <div className="px-5 pb-5">
    <a >
      <h5 className="text-3xl uppercase font-semibold tracking-tight text-gray-900 dark:text-white pb-4 ">
        {cardTemplate.name}
      </h5>
    </a>
       <div className="flex items-center justify-between">
   
   <Link to={cardTemplate.url}>

      <a
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
       view templates
      </a>
      </Link>
    </div>
  </div>
</div>

    </div>
  )
}

export default CardTemaplate