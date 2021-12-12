import { singleItem } from "./singleItem";

export const updateRenderList = (list) => {
    const updatedList = list.map(item => singleItem(item.id, item.name, item.descr, item.watch, item.img));

    listItem(updatedList);
}

const renderResolver = (data) => {
    const wrapper = document.querySelector('.list-items');
    console.log(data);
    wrapper.textContent = '';
    wrapper.append(...data);

}

const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const noContentAdded = () => {
    const element = document.querySelector('.list-items');
    removeAllChildNodes(element);
    element.textContent = 'No kittens here ;(';
}

export const listItem = (list) => {
    const element = document.createElement('div');
    element.classList.add('list-items');
    console.log(list, 'list after update store');

    if (list === null || list === undefined) {
        element.textContent = 'No kittens here ;(';
    } else {
        if (list.length === 0) {
            noContentAdded()
        } else {
            renderResolver(list);
        }
    }

    return element;
}