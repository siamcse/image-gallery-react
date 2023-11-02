import React from 'react';

const Navbar = ({ selectedImages }) => {
    console.log(selectedImages.length);
    return (
        <div>
            {
                selectedImages.length > 0 ?
                    <div className='flex justify-between items-center gap-4 py-5'>
                        <div className='flex items-center gap-4 text-xl font-bold'>
                            <input type="checkbox" checked={true} disabled />
                            <p>{selectedImages.length} Selected Images</p>
                        </div>
                        <button className=''>Delete</button>
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