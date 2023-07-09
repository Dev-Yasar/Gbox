import { Routes, Route } from "react-router-dom"

import React, { lazy, Suspense } from 'react';

// import TemplatePage from "./Pages/templates/TemplatePage"
// import VistingCard1 from "./Pages/Designs/VistingCard/v1/VistingCard1"
// import PosterV1 from "./Pages/Designs/Poster/PosterV1"
// import PosterV2 from "./Pages/Designs/Poster/PosterV2"
// import C1 from "./Pages/Designs/Cerficate/Certificatev1"
// import VistingCardV from "./Pages/versions/VistingCardV"
// import PosterV from "./Pages/versions/PosterV"
// import CertficateV from "./Pages/versions/CertficateV"
import Loader from "./Components/Loader/Loader";



const Home = lazy(() => import('./Pages/Home/Home'));

const TemplatePage = lazy(() => import('./Pages/templates/TemplatePage'));
const VistingCard1 = lazy(() => import('./Pages/Designs/VistingCard/v1/VistingCard1'));
const VistingCardV = lazy(() => import('./Pages/versions/VistingCardV'));
const PosterV1 = lazy(() => import('./Pages/Designs/Poster/PosterV1'));
const PosterV2 = lazy(() => import('./Pages/Designs/Poster/PosterV2'));
const C1 = lazy(() => import('./Pages/Designs/Cerficate/Certificatev1'));
const PosterV = lazy(() => import('./Pages/versions/PosterV'));
const CertficateV = lazy(() => import('./Pages/versions/CertficateV'));








function App() {
  return (
    <div className="App">    
       <Suspense fallback={<Loader/>}>
      <Routes>     
        {/* nav routes  */}
        <Route exact path="/" element={ <Home/> } />
        <Route path="/templates" element={ <TemplatePage/> } />


        {/* Designs routes*/}
        

        {/* Visitng Card routes */}
        <Route path="/templates/Collections/VisitingV1" element={ <VistingCard1/> } />

       {/* Posters */}
       <Route path="/templates/Collections/posterV1" element={ <PosterV1/> } />
       <Route path="/templates/Collections/posterV2" element={ <PosterV2/> } />

       {/* Certificate */}
       <Route path="/templates/Collections/certificateV1" element={ <C1/> } />


       {/* versions */}
       <Route path="/templates/VisitingCards" element={ <VistingCardV/> } />
       <Route path="/templates/Posters" element={ <PosterV/> } />
       <Route path="/templates/Certficates" element={ <CertficateV/> } />
      </Routes>
      </Suspense>
    </div>
  )
}

export default App