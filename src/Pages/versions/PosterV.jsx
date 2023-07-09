import React from 'react'

import p1 from "../../Assets/images/pv1.png"

import p2 from "../../Assets/images/pv2.png"
import "./VistingCardV.css"
import VersionCard from '../../Components/Bricks/Card/VersionCard'
import Footer from '../../Components/Classic/Footer/Footer'
const PosterV = () => {
  return (
    <div>
      <div className='versionHeroContainer'>

     
      <section class="py-8 sm:py-16 md:py-24 flex items-center justify-center ">
    <div class="mx-auto max-w-[43rem]">
        <div class="text-center">
            <h1
                class="my-3 sm:my-4 md:my-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-10 tracking-tight text-black">
                Select your template
                <span class="text-blue-700"> Version</span>
            </h1>
        </div>

    </div>
</section>
</div>
<div className='versionCollection'>
  <div className='CollectionName'>
  <h1>Poster collection</h1>
  </div>
  <div className='CollectionConatiner'>

   <VersionCard img={p1} url="/templates/Collections/posterV1" />
   <VersionCard img={p2} url="/templates/Collections/posterV2" />
  </div>
  
</div>

<Footer/>
   </div>
  )
}

export default PosterV