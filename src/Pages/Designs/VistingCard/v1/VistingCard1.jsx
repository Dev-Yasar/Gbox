import {React, useState,useRef} from 'react'
import { Link } from 'react-router-dom';
import * as htmlToImage from 'html-to-image';

import Draggable from 'react-draggable';

import logoW from '../../../../Assets/images/logoW.png'

import "../../EditorPanel/editorpanel.css"
import "./VistingCard1.css"
const VistingCard1 = () => {



// state mangement for form
const [selectedImage, setSelectedImage] = useState(logoW);
const [brand, setBrand] = useState('Gbox');
const [phone, setPhone] = useState('+91 8870464684');
const [webname, setWebname] = useState('www.Gbox.design');
const [add, setAdd] = useState('Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678');

// menu state
const [editMenu, setEditMenu] = useState(true);


// handle 

const handleImageChange = (event) => {
  const file = event.target.files[0];
 setSelectedImage(URL.createObjectURL(file));

}
function handleBrandname(event) {
  setBrand(event.target.value);
}
function handlePhone(event) {
  setPhone(event.target.value);
}
function handleWeb(event) {
  setWebname(event.target.value);
}
function handleAdd(event) {
  setAdd(event.target.value);
}

const MenuOn=()=>{
  setEditMenu(false)
}
const MenuOff=()=>{
  setEditMenu(true)
}



// Download Operation
    const FCref = useRef(null);
    const BCref = useRef(null);
   
  

    const handleDownloadFC = () => {
      htmlToImage.toJpeg(FCref.current, { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'Front.png';
        link.href = dataUrl;
        link.click();
      });
      };

      const handleDownloadBC = () => {
        htmlToImage.toJpeg(BCref.current, { quality: 0.95 })
        .then(function (dataUrl) {
          var link = document.createElement('a');
          link.download = 'Back.png';
          link.href = dataUrl;
          link.click();
        });
      };
 
 const CanvasDownload=()=>{
  
  handleDownloadFC();
  handleDownloadBC();
 }     

  return (
    <div>
              
      <div > 
     
     {/* backround for artboard */}
      <div className='artboardBg' >

        {/* toolbox */}
        <div className='toolBOX'>

          {/* logo */}
          <div className='logoContainer_Toolbox'>
            <Link to="/">
             <img className='logoW' src={logoW} alt="logo" />
             </Link>
          </div>

          {/* toolsItem */}
          <div className='toolItems'>

          <button onClick={MenuOn} type="button" class=" text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br  shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          <i class="fa-solid fa-rectangle-list"></i> Edit menu
          </button>

     
          </div>
          
          {/* formEditor */}
          {editMenu ? <></> : <>
          
          
          <Draggable>
          <div className='FormEditor'>
          <div className='MenuDrag' >
          <i class="fa-solid fa-arrows-up-down-left-right"></i>
           </div>
           <div className='MenuCancel' onClick={MenuOff} >
           <i class="fa-solid fa-xmark"></i>
           </div>
          <form>
 
          <div class="upload-btn-wrapper">
  <button class="btn">Choose logo</button>
  <input type="file" name="myfile" onChange={handleImageChange} />
  
</div>

  <div className="mb-6">
    <label
      htmlFor="password"
      className="block mb-2 text-sm   dark:text-white capitalize text-white font-bold "
    >
      bRAND NAME
    </label>
    <input
      type="text"
  
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required=""
      onChange={handleBrandname} 
    />
  </div>

  <div className="mb-6">
    <label
      htmlFor="password"
      className="block mb-2 text-sm  text-white font-bold dark:text-white"
    >
      Mobile Number
    </label>
    <input
      type="number"
      size={10}
     
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required=""
      onChange={handlePhone} 
    />
  </div>
  <div className="mb-6">
    <label
      htmlFor="text"
      className="block mb-2 text-sm  text-white font-bold dark:text-white"
    >
      Website name
    </label>
    <input
      type="text"
  
      className="bg-gray-50 border border-gray-300  text-white font-bold text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required=""
        onChange={handleWeb} 
    />
  </div>

  <div className="mb-6">
    <label
      htmlFor="password"
      className="block mb-2 text-sm  text-white font-bold dark:text-white"
    >
     Address
    </label>
    <input
      type="text"
    
      className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required=""
      onChange={handleAdd} 
    />
  </div>

  
 
          </form>

          </div>
        </Draggable>
          
          </> }



          {/* next button */}
          <div className='ActionBtn_Toolbox'>
            
          <button onClick={CanvasDownload}  type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> 
            Export <i class="fa-solid fa-upload"></i>
          </button>
          </div>
        </div>
       
       {/* Grphics Elelmet */}
{/* ===================================================================================
 ====================================================================================== */}
       <div className='GraphicsHolder'>
          <div ref={FCref}  className='V1FrontCard'>

         <div className='card_Ellipce'>
         <img className='cardLogo' id='logocard1' src={selectedImage} alt="logo" />
         </div>
         <div className='card_titileHolder'>
        <h1 className='card_title'>{brand}</h1>
       </div>


          </div>

          <div ref={BCref}  className='V1BackCard'>
               
          <div   className='card_Ellipce2'>
        <img className='cardLogo2' id='logocard2' src={selectedImage} alt="logo" />
       </div>
       <div className='card_titileHolder2'>

        <div className='cardDetailData1' >
          <div  className='data'>
            <div><i class="fa-solid fa-phone"></i></div>
            <div className='card_dataItem'>{phone}</div>
          </div>

          <div  className='data'> 
            <div><i class="fa-solid fa-globe "></i></div>
            <div className='card_dataItem lowercase'>{webname}</div>
          </div>

          <div  className='data'>
            <div><i class="fa-solid fa-location-dot"></i></div>
            <div className='card_dataItem' >{add}</div>
          </div>

        </div>
       </div>

          </div>
       </div>
{/* ===================================================================================
 ====================================================================================== */}

        
    


      </div>
 
     </div>
    </div>
  )
}

export default VistingCard1