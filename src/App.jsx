import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { arrayMoveImmutable } from 'array-move';
import images from './utils/images';
import SortableList from './components/ImageSortable';

const App = () => {
  const [items, setItems] = useState(images);
  const [files, setFiles] = useState(null); //add images are added here
  const [selectedImages, setSelectedImages] = useState([]); //all selected images added here

  //delete multiple images from gallery
  const handleDelete = () => {
    setItems(items.filter(item => !selectedImages.includes(item.id)));
    setSelectedImages([]);
  }

  console.log(items);

  //added image set to items
  useEffect(() => {
    let imgData;
    if (files) {
      imgData = {
        img: files,
        id: items?.length + 1
      }
      setItems([...items, imgData]);
    }
  }, [files])

  //image sort by array-move
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMoveImmutable(items, oldIndex, newIndex));
  };

  return (
    <div className='container mx-auto px-4'>
      <Navbar
        selectedImages={selectedImages}
        handleDelete={handleDelete}
      />
      <hr className='border-2' />
      <SortableList
        files={files}
        setFiles={setFiles}
        items={items}
        selectedImages={selectedImages}
        setSelectedImages={setSelectedImages}
        onSortEnd={onSortEnd}
        axis={"xy"}
      />
    </div>
  );
};

export default App;