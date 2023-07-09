import React from 'react'
import logo from  "../../../Assets/images/logo.svg"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
        <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
  <div class="mx-auto max-w-screen-xl text-center">

    <a href="/" class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
    <img src={logo} class="h-8 mr-3" alt="Flowbite Logo" />
      Gbox    
      </a>
      <p class="my-6 text-gray-500 dark:text-gray-400">Enhance your designs effortlessly with our templates </p>
      <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
        <Link to="/"  >
        <li>
              <a class="mr-4 hover:underline md:mr-6 ">Home</a>
          </li>
        </Link>
        
        <Link to="/templates" >
        <li>
            <a  class="mr-4 hover:underline md:mr-6">Templates</a>
          </li>
        </Link>

   
      </ul>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023<a href="#" class="hover:underline">  Gbox™</a> All Rights Reserved.</span>
  </div>
</footer>
    </div>
  )
}

export default Footer