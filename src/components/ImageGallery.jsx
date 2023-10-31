import React from 'react';
import images from '../utils/images';

const ImageGallery = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {images.map(({id,img}, index) => (
                <div key={index} className={`w-full ${index === 0 ? 'col-span-2' : 'col-span-1'}`}>
                    <img
                        src={img}
                        alt={`Image ${index + 1}`}
                        className="w-64 h-auto object-cover rounded"
                    />
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;