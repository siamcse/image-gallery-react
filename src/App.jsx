import React, { useState } from 'react';
import ImageGallery from './components/ImageGallery';
import Navbar from './components/Navbar';

import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
import images from './utils/images';
import Images from './components/Images';

const SortableItem = SortableElement(({ value,index }) => <Images index={index} value={value} />);

const SortableList = SortableContainer(({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-5 my-10">
      {items?.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </div>
  );
});

const App = () => {
  const [items, setItems] = useState(images);

  // console.log(items);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMoveImmutable(items, oldIndex, newIndex));
  };
  return (
    <div className='container mx-auto px-4'>
      <Navbar />
      <hr className='border-2' />
      <SortableList items={items} onSortEnd={onSortEnd} axis={"xy"} />
    </div>
  );
};

export default App;