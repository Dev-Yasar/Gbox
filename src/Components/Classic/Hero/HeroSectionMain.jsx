import React from 'react'
 import { Link } from 'react-router-dom'

import heroimage from "../../../Assets/images/mainhero.png"

import "./HeroSectionMain.css"

const HeroSectionMain = () => {
  return (
    <div className='heroBG' >
    <section>
  <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
    <div className="flex w-full mx-auto text-left">
      <div className="relative inline-flex items-center mx-auto align-middle">
        <div className="text-center">
          <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
          Every great design begins <br className="hidden lg:block" />
          with an even better story.
          </h1>
          <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-500">
          Enhance your designs effortlessly with our templates editing website, offering intuitive  seamless customization.
          </p>
          <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
            <div className="mt-3 rounded-lg sm:mt-0">
            <Link to="templates">
            <button className="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Explore Templates
              </button>
              </Link>
             
            </div>

          </div>
        </div>
      </div>
    </div>
    <section id="intro">
      <div className="flex flex-col items-center justify-center pt-24 mx-auto rounded-lg lg:px-10 max-w-7xl">
        <img
          className="object-cover object-center w-full rounded-xl"
          alt="hero"
          src={heroimage}
        />
      </div>
    </section>
  </div>
</section>


      
	
        </div>
  )
}

export default HeroSectionMain