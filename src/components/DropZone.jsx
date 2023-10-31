import React from 'react';
import { useDropzone } from 'react-dropzone';
import { PhotoIcon } from '@heroicons/react/24/solid';

const DropZone = ({ files, setFiles }) => {
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const thumbs = files?.map(file => (
        <div key={file.name}>
            <div>
                <img
                    src={file.preview}
                    // Revoke data uri after image is loaded
                    onLoad={() => { URL.revokeObjectURL(file.preview) }}
                />
            </div>
        </div>
    ));

    return (
        <>
            <div className='py-10 px-5 ' {...getRootProps()}>
                <input {...getInputProps()} />
                <p className='flex flex-col justify-center h-full items-center gap-4'>
                    <PhotoIcon className='h-6 w-6'/>
                    <span className='text-center'>Add Images</span>
                </p>
            </div>
            {/* <aside>{thumbs}</aside> */}
        </>
    );
};

export default DropZone;