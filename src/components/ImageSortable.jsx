import { SortableContainer, SortableElement } from "react-sortable-hoc";
import AddImage from "./AddImage";
import Images from "./Images";

//Image sortable 
const SortableItem = SortableElement(({ value, i }) => <Images i={i} value={value} />);

const SortableList = SortableContainer(({ items, files, setFiles }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-5 my-10">
            {items?.map((value, index) => (
                <SortableItem key={`item-${index}`} index={index} i={index} value={value} />
            ))}
            <AddImage files={files} setFiles={setFiles} />
        </div>
    );
});

export default SortableList;