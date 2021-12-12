import { updateRenderList } from "../components/wrapper/listItems";

const storageName = 'kittenStorage';
const store = window.sessionStorage;

const storeSubscriber = () => {
    let originalSetItem = sessionStorage.setItem;

    sessionStorage.setItem = function(key, value) {
        let event = new Event('itemInserted');

        event.value = value;
        event.key = key;

        document.dispatchEvent(event);

        originalSetItem.apply(this, arguments);
    };

    const localStorageSetHandler = (e) => {
        console.log(e, 'storage was updated');
        updateRenderList(JSON.parse(e.value));
    };

    document.addEventListener("itemInserted", localStorageSetHandler, false);
}

export const initStore = () => {
    console.log('init store', getCurrentState());

    if (store.getItem(storageName) === null) {
        store.setItem(storageName, JSON.stringify([]));
    }

    updateRenderList(getCurrentState());

    storeSubscriber();
};

export const addToStore = (objItem) => {
    store.setItem(storageName, JSON.stringify([...getCurrentState(), objItem]))
};

export const removeFromStoreById = (id) => {
    store.setItem(
        storageName,
        JSON.stringify(
            getCurrentState().filter(obj => obj.id !== id)
        )
    );
};

const getCurrentState = () => JSON.parse(store.getItem(storageName));