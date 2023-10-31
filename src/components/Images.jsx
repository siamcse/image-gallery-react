import React from 'react';

const Images = ({ value, index }) => {
    const { img, id } = value;
    console.log(index);

    return (
        <div className={` ${index === 0 ? 'sm:col-span-2 sm:row-span-2' : 'col-span-1'} border-2 rounded-2xl`}>
            <img
                src={img}
                alt={`Image-${id}`}
                className="object-cover w-full h-full rounded-2xl"
            />
        </div>
    );
};

export default Images;