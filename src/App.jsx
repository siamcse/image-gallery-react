import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
import images from './utils/images';
import Images from './components/Images';
import SelectImage from './components/SelectImage';

//Image sortable 
const SortableItem = SortableElement(({ value, i }) => <Images i={i} value={value} />);

const SortableList = SortableContainer(({ items, files, setFiles }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-5 my-10">
      {items?.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} i={index} value={value} />
      ))}
      <SelectImage files={files} setFiles={setFiles} />
    </div>
  );
});

const App = () => {
  const [items, setItems] = useState(images);
  const [files, setFiles] = useState([]);

  console.log(items);

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
      <Navbar />
      <hr className='border-2' />
      <SortableList files={files} setFiles={setFiles} items={items} onSortEnd={onSortEnd} axis={"xy"} />
    </div>
  );
};

export default App;