import {React, useState,useRef} from 'react'
import * as htmlToImage from 'html-to-image';
import { Link } from 'react-router-dom';
import Draggable from 'react-draggable';

import logoW from '../../../Assets/images/logoW.png'

import "../EditorPanel/editorpanel.css"
import "./Certificatev1.css"
const Certificatev1 = () => {



// state mangement for form

const [name, setName] = useState('Naruto');
const [desc, setDesc] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum molestias deleniti quaerat, aliquid voluptatibus saepe.');
const [signer1, setSigner1] = useState('madara');
const [signer2, setSigner2] = useState('ithachi');
const [roll1, setRoll1] = useState('head');
const [roll2, setRoll2] = useState('assistant');

// menu state
const [editMenu, setEditMenu] = useState(true);


// handle 



function handleName(event) {
  setName(event.target.value);
}
function handleDsec(event) {
  setDesc(event.target.value);
}
function handleSigner1(event) {
  setSigner1(event.target.value);
}
function handleSigner2(event) {
  setSigner2(event.target.value);
}
function handleRoll1(event) {
  setRoll1(event.target.value);
}
  function handleRoll2(event) {
    setRoll2(event.target.value);
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
        link.download = 'certificate.png';
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
          <div className='FormEditor'>
           <div className='MenuCancel' onClick={MenuOff} >
           <i class="fa-solid fa-xmark"></i>
           </div>
          <form>
 
          

  <div className="mb-6">
    <label
      htmlFor="password"
      className="block mb-2 text-sm   dark:text-white capitalize text-white font-bold "
    >
    Name
    </label>
    <input
      type="text"
  
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required=""
      onChange={handleName} 
    />
  </div>

  <div className="mb-6">
    <label
      htmlFor="password"
      className="block mb-2 text-sm   dark:text-white capitalize text-white font-bold "
    >
    Description  (20 words only)
    </label>
    <input
      type="text"
  
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required=""
      onChange={handleDsec} 
    />
  </div>

  <div className="mb-6">
    <label
      htmlFor="password"
      className="block mb-2 text-sm   dark:text-white capitalize text-white font-bold "
    >
    first Signer name 
    </label>
    <input
      type="text"
  
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required=""
      onChange={handleSigner1} 
    />
  </div>


  <div className="mb-6">
    <label
      htmlFor="password"
      className="block mb-2 text-sm   dark:text-white capitalize text-white font-bold "
    >
    Position
    </label>
    <input
      type="text"
  
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required=""
      onChange={handleRoll1} 
    />
  </div>


  <div className="mb-6">
    <label
      htmlFor="password"
      className="block mb-2 text-sm   dark:text-white capitalize text-white font-bold "
    >
     second Signer name 
    </label>
    <input
      type="text"
  
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required=""
      onChange={handleSigner2} 
    />
  </div>

  <div className="mb-6">
    <label
      htmlFor="password"
      className="block mb-2 text-sm   dark:text-white capitalize text-white font-bold "
    >
      Position
    </label>
    <input
      type="text"
  
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required=""
      onChange={handleRoll2} 
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

 <div className='holdercertv2'>

 <div  ref={FCref} className='CertbgV2'  >
  
  <div className='cerficateHolder'>
    <div className='c1Name'  >{name}</div>
    <div className='c1Desc'>{desc}</div>
    <div className='signerHolder' >
      <div>
        <div>
          <h3 className='signer' >{signer1}</h3>
          <p className='signerRole'>{roll1}</p>
        </div>
      </div>
      <div>
      <div>
          <h3  className='signer'>{signer2}</h3>
          <p className='signerRole'>{roll2}</p>
        </div>
      </div>
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

export default Certificatev1