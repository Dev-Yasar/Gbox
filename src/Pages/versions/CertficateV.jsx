import React from 'react'
import c1 from "../../Assets/images/cv1.png"

import c2 from "../../Assets/images/cv2.png"
import "./VistingCardV.css"
import VersionCard from '../../Components/Bricks/Card/VersionCard'
import Footer from '../../Components/Classic/Footer/Footer'
const CertficateV = () => {
  return (
    <div>
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
  <h1>Certificate collection</h1>
  </div>
  <div className='CollectionConatiner'>

   <VersionCard img={c1} url="/templates/Collections/certificateV1" />
   <VersionCard img={c2} />
  </div>
  
</div>

<Footer/>
   </div>


    </div>
  )
}

export default CertficateV