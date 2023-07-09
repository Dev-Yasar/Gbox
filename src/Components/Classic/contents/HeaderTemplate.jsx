import React from 'react'

import sider1 from "../../../Assets/images/siders1.png"
import sider2 from "../../../Assets/images/siders2.png"

const HeaderTemplate = () => {
  return (
    <div>
          <div>
        <section className="bg-white dark:bg-gray-900">
  <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
      <h2 className="mb-4 text-4xl tracking-tight uppercase font-extrabold text-gray-900 dark:text-white">
       template category 
      </h2>
      <p className="mb-4">

      Unlock your creative potential on our templates editing website. With intuitive tools at your fingertips, 
      effortlessly customize designs, transform visuals, and bring your artistic vision to life with ease and 
      precision.
        
      </p>
    </div>
    <div className="grid grid-cols-2 gap-4 mt-8">
      <img
        className="w-full rounded-lg"
        src={sider1}
        alt="office content 1"
      />
      <img
        className="mt-4 w-full lg:mt-10 rounded-lg"
        src={sider2}
        alt="office content 2"
      />
    </div>
  </div>
</section>

    </div>
    </div>
  )
}

export default HeaderTemplate