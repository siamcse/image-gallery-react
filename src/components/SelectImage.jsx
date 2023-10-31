import React from 'react';
import DropZone from './DropZone';

const SelectImage = ({ files, setFiles }) => {
    return (
        <div>
            <div className="border border-dashed rounded-2xl w-full h-full">
                
                        <DropZone files={files} setFiles={setFiles} />
            </div>
        </div>
    );
};

export default SelectImage;