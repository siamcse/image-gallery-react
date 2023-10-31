import React from 'react';
import images from '../utils/images';
import Images from './Images';

const ImageGallery = () => {
    return (
        <div className="grid grid-cols-5 gap-5 my-10">
            {images.map((image, index) => (
                <Images key={image.id} index={index} image={image} />
            ))}
        </div>
    );
};

export default ImageGallery;