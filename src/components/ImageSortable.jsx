import { SortableContainer, SortableElement } from "react-sortable-hoc";
import AddImage from "./AddImage";
import Images from "./Images";

//Image sortable 
const SortableItem = SortableElement(({ value, i, selectedImages, setSelectedImages }) =>
    <Images
        i={i}
        value={value}
        selectedImages={selectedImages}
        setSelectedImages={setSelectedImages}
    />
);

const SortableList = SortableContainer(({ items, setFiles, selectedImages, setSelectedImages }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-5 my-6">
            {items?.map((value, index) => (
                <SortableItem
                    key={`item-${index}`}
                    index={index}
                    i={index}
                    value={value}
                    selectedImages={selectedImages}
                    setSelectedImages={setSelectedImages}
                />
            ))}
            <AddImage setFiles={setFiles} />
        </div>
    );
});

export default SortableList;