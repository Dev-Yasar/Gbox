import {React, useState,useRef} from 'react'
import * as htmlToImage from 'html-to-image';
import { Link } from 'react-router-dom';
import Draggable from 'react-draggable';

import logoW from '../../../Assets/images/logoW.png'

import "../EditorPanel/editorpanel.css"
import "./PosterV1.css"
const VistingCard1 = () => {



// state mangement for form

const [name, setName] = useState('Your text');


// menu state
const [editMenu, setEditMenu] = useState(true);


// handle 


function handleName(event) {
  setName(event.target.value);
}
const MenuOn=()=>{
    setEditMenu(false)
  }
  const MenuOff=()=>{
    setEditMenu(true)
  }


// Download Operation
    const FCref = useRef(null);
    
   
  

    const handleDownloadFC = () => {
      htmlToImage.toJpeg(FCref.current, { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'BatmanPoster.png';
        link.href = dataUrl;
        link.click();
      });
      };


 
 const CanvasDownload=()=>{
  
  handleDownloadFC();

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
          <div className='FormEditorps1'>
           <div className='MenuCancel' onClick={MenuOff} >
           <i class="fa-solid fa-xmark"></i>
           </div>
          <form>
 
          

  <div className="mb-6">
    <label
      htmlFor="password"
      className="block mb-2 text-sm   dark:text-white capitalize text-white font-bold "
    >
     Text
    </label>
    <input
      type="text"
  
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required=""
      onChange={handleName} 
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

 <div className='holderposterv1'>

 <div className='PosterbgV1'  ref={FCref} >
 
 <div>
    <h1 className='V1posterTitile' >{name}</h1>
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