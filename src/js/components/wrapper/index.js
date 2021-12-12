import { addItem } from "./addItem";
import { listItem } from "./listItems";

export const Wrapper = () => {
    const element = document.createElement('div');
    element.classList.add('wrapper-app');
    element.append(addItem(), listItem());

    return element;
}