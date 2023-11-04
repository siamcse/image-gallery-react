import React from 'react';
import { PhotoIcon } from '@heroicons/react/24/solid';

const AddImage = ({ setFiles }) => {
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFiles(reader.result);
            }
            reader.readAsDataURL(file);
        }
    };
    return (
        <div class="flex items-center justify-center w-full">
            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-2xl cursor-pointer bg-gray-50 ">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <PhotoIcon className='h-6 w-6' />
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">Add Images</p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" onChange={handleFileUpload} />
            </label>
        </div>
    );
};

export default AddImage;