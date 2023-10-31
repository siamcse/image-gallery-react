import React from 'react';
import ImageGallery from './components/ImageGallery';

const App = () => {
  return (
    <div className='container mx-auto px-4'>
      <div>
        <h1 className='text-xl font-bold py-3 px-4'>Gallery</h1>
      </div>
      <hr className='border-2'/>
      <ImageGallery />
    </div>
  );
};

export default App;