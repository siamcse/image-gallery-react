import React, { useState } from 'react';
import images from '../utils/images';
import Images from './Images';
import SelectImage from './SelectImage';

const ImageGallery = () => {
    const [files, setFiles] = useState([]);
    return (
        <div className="grid grid-cols-5 gap-5 my-10">
            {images.map((image, index) => (
                <Images key={image.id} index={index} image={image} />
            ))}
            <SelectImage files={files} setFiles={setFiles} />
        </div>
    );
};

export default ImageGallery;