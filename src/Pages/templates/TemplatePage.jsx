import React from 'react'
import HeaderTemplate from '../../Components/Classic/contents/HeaderTemplate'
import CardTemaplate from '../../Components/Bricks/Card/CardTemaplate'

import image1 from "../../Assets/images/Image 1.png"
import image2 from "../../Assets/images/Image 2.png"
import image3 from "../../Assets/images/imag3.png"
import Footer from '../../Components/Classic/Footer/Footer'
import NavBar from '../../Components/Classic/NavBar/NavBar'



const TemplatePage = () => {
  return (
    <div>
     
     <NavBar/>
      <HeaderTemplate/>
      <div className='  flex justify-evenly h-auto pt-4 pb-4' >
       <CardTemaplate img={image1} name="Posters" url="/templates/Posters"/>
       <CardTemaplate img={image2} name="Visiting card" url="/templates/VisitingCards" />
       <CardTemaplate img={image3} name="Certificate" url="/templates/Certficates" />
    
   
      </div>
      <Footer/>
    </div>
  )
}

export default TemplatePage