import React from 'react';

const Images = ({ value, i }) => {
    const { img, id } = value;

    return (
        <div className={` ${i === 0 ? 'sm:col-span-2 sm:row-span-2' : 'col-span-1 row-span-1'} border-2 rounded-2xl`}>
            <img
                src={img}
                alt={`Image-${id}`}
                className="object-cover w-full h-full rounded-2xl"
            />
        </div>
    );
};

export default Images;