import { addToStore } from "@/js/store";

const inputName = () => {
    const element = document.createElement('input');
    element.classList.add('add-name');
    element.name = 'name';
    element.type = 'text';

    element.addEventListener('keyup', (e) => {
        console.log(e.target.value, 'event inforamation name');
    })

    return element;
};

const inputDescription = () => {
    const element = document.createElement('input');
    element.classList.add('add-description');
    element.name = 'description';
    element.type = 'text';

    element.addEventListener('keyup', (e) => {
        console.log(e.target.value, 'event inforamation descr');
    })

    return element;
};

const inputWatcher = () => {
    const element = document.createElement('div');

    const elementCheckbox = document.createElement('input');
    elementCheckbox.classList.add('add-watched');
    elementCheckbox.name = 'watch';
    elementCheckbox.id = 'watched';
    elementCheckbox.type = 'checkbox';

    const elementLabel = document.createElement('label');
    elementLabel.setAttribute('for', elementCheckbox.id);
    elementLabel.textContent = 'Already Watched';

    element.append(elementCheckbox, elementLabel);

    elementCheckbox.addEventListener('change', (e) => {
        console.log(e.target.checked, 'event inforamation watcher');
    })

    return element;
};

const imagePicker = () => {
    const element = document.createElement('div');
    element.classList.add('image-picker');

    const importAll = (r) => {
        return r.keys().map(r);
    }
      
    const images = importAll(require.context('../../../../images/kittens', false, /\.\/.*\.jpg$/));

    const elements = images.map(path => {
        const img = document.createElement('img');
        img.classList.add('add-image')
        img.src = path;

        return img;
    });

    elements.forEach(img => {
        img.addEventListener('click', () => {
            elements.forEach(img => img.classList.remove('selected'));
            img.classList.add('selected');
        })
    })
    console.log(elements, 'images elements!!!');
    element.append(...elements);

    return element;
};

const submitButton = () => {
    const element = document.createElement('button');
    element.textContent = 'Submit';

    element.addEventListener('click', (e) => {
        e.preventDefault();
        const name = document.querySelector('.add-name');
        const description = document.querySelector('.add-description');
        const watch = document.querySelector('.add-watched');
        const image = document.querySelector('.add-image.selected');

        addToStore({
            id: idGenerator(),
            name: name.value,
            descr: description.value,
            watch: watch.checked,
            img: image.src
        })

        name.value = '';
        description.value = '';
        watch.checked = false;
    })

    return element;
};

const idGenerator = () => {
    let array = new Uint32Array(8)
    window.crypto.getRandomValues(array)
    let str = ''

    for (let i = 0; i < array.length; i++) {
        str += (i < 2 || i > 5 ? '' : '-') + array[i].toString(16).slice(-4)
    }

    return str;
};

export const addItem = () => {
    const element = document.createElement('form');

    element.append(inputName(), inputDescription(), inputWatcher(), imagePicker(), submitButton())

    return element;
}