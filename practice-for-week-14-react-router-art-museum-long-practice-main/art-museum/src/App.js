import React from 'react';
import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation/index';


// console.log(harvardArt)
function App() {
  return (
    // <h1> galleries </h1>
    <GalleryNavigation galleries={harvardArt.records}/>
  );
}

export default App;
