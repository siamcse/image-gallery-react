import React from 'react';

const Navbar = ({ selectedImages, handleDelete }) => {
    const len = selectedImages.length;
    return (
        <div>
            {
                len > 0 ?
                    <div className='flex sm:flex-row flex-col justify-between items-center gap-4 py-5'>
                        <div className='flex items-center gap-4 sm:text-xl font-semibold'>
                            <input type="checkbox" checked={true} disabled />
                            <p>{len} {len > 1 ? 'Files' : 'File'} Selected</p>
                        </div>
                        <button onClick={()=>handleDelete()} className='text-red-700 font-semibold hover:underline'>Delete {len > 1 ? 'files' : 'file'}</button>
                    </div>
                    :
                    <>
                        <h1 className='text-xl font-bold py-5'>Gallery</h1>
                    </>
            }
        </div>
    );
};

export default Navbar;