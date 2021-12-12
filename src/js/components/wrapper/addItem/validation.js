export const validateFields = (form) => {
    const fields = form.querySelectorAll('input[type="text"]');
    const selectedImg = form.querySelector('.img-wrap.selected');

    const checkEmptyFields = Array.from(fields).filter(field => {
        console.log(field.value);
        return field.value === '';
    });
    console.log(checkEmptyFields.lenght);

    return selectedImg !== null && checkEmptyFields !== null && selectedImg.length !== 0 && checkEmptyFields.length === 0;
}