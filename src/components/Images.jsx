import React from 'react';

const Images = ({ image, index }) => {
    const { img, id } = image;
    
    return (
        <div className={` ${index === 0 ? 'col-span-2 row-span-2' : 'col-span-1'} border-2 rounded-2xl`}>
            <img
                src={img}
                alt={`Image-${id}`}
                className="object-cover w-full h-full rounded-2xl"
            />
        </div>
    );
};

export default Images;