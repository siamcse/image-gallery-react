import React, { useState } from 'react';
import images from '../utils/images';
import Images from './Images';
import SelectImage from './SelectImage';


const ImageGallery = () => {
    const [files, setFiles] = useState([]);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-5 my-10">
            {/* <SortableList items={items} onSortEnd={onSortEnd} axis={"xy"} /> */}
            <SelectImage files={files} setFiles={setFiles} />
        </div>
    );
};

export default ImageGallery;