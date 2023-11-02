import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { arrayMoveImmutable } from 'array-move';
import images from './utils/images';
import SortableList from './components/ImageSortable';

const App = () => {
  const [items, setItems] = useState(images);
  const [files, setFiles] = useState([]); //add images are added here
  const [selectedImages, setSelectedImages] = useState([]); //all selected images added here


  console.log(items);
  const handleDelete = () => {
    console.log(selectedImages);
    setItems(items.filter(item => !selectedImages.includes(item.id)));
    setSelectedImages([]);
  }

  useEffect(() => {
    let imgData;
    console.log(files)
    if (files[0]?.preview) {
      imgData = {
        img: files[0]?.preview,
        id: items?.length + 1
      }
      setItems([...items, imgData]);
    }
  }, [files])

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