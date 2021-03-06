import { removeFromStoreById } from "@/js/store";

export const singleItem = (id, name, description, watched = false, img) => {
    const element = document.createElement('div');
    element.classList.add('single-item');
    element.id = id;

    const elementName = document.createElement('p');
    elementName.textContent = name;

    const elementDescription = document.createElement('p');
    elementDescription.textContent = description;

    const elementWatched = document.createElement('span');
    elementWatched.classList.add(watched ? 'liked' : 'unliked');

    const elementImage = document.createElement('img');
    elementImage.src = img;

    element.append(elementName, elementDescription, elementWatched, elementImage, removeButton());

    return element;
}

const removeButton = () => {
    const element = document.createElement('button');
    element.textContent = 'Delete';

    element.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e.target.closest('.single-item').id);
        removeFromStoreById(e.target.closest('.single-item').id)
    })

    return element;
}
