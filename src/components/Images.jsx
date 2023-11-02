import React, { useState } from 'react';

const Images = ({ value, i, selectedImages, setSelectedImages }) => {
    const { img, id } = value;

    const handleSelectImages = (id) => {
        if (selectedImages.includes(id)) {
            setSelectedImages(selectedImages.filter(imageId => imageId !== id));
        }
        else {
            setSelectedImages([...selectedImages, id]);
        }
    }
    console.log(selectedImages);

    return (
        <div className={`relative ${i === 0 ? 'sm:col-span-2 sm:row-span-2' : 'col-span-1 row-span-1'} border-2 rounded-2xl`}>
            <img
                src={img}
                alt={`Image-${id}`}
                className="object-cover w-full h-full rounded-2xl"
                onLoad={() => { URL.revokeObjectURL(img) }}
            />
            <div className={`absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gray-700 bg-fixed opacity-0 transition duration-300 ease-in-out ${selectedImages.includes(id) ? 'opacity-20':'hover:opacity-50'} rounded-2xl`}>
                <input
                    type="checkbox"
                    checked={selectedImages.includes(id)}
                    onChange={() => handleSelectImages(id)}
                    className='relative outline-none appearance-none top-5 left-5 p-2'
                />
            </div>
        </div>
    );
};

export default Images;