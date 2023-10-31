import React from 'react';
import DropZone from './DropZone';

const SelectImage = ({ files, setFiles,onUpload }) => {
    const handleFileUpload = (e) => {
        const files = e.target.files;
        onUpload(files);
    };
    return (
        <div>
            <div className="border-2 border-dashed rounded-2xl w-full h-full">
                <DropZone files={files} setFiles={setFiles} />
                {/* <input type="file" name="file" id="" onChange={handleFileUpload} /> */}
            </div>
        </div>
    );
};

export default SelectImage;