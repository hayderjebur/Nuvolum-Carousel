import React, { useState } from 'react';
import './App.scss';
import Carousel from './carousel/Carousel';
import data from './silder-data.json';

function App() {
  const [currentImg, setCurrentImg] = useState(0);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='App'>
      <Carousel
        data={data}
        currentImg={currentImg}
        setCurrentImg={setCurrentImg}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}

export default App;
