const toList = document.querySelector('.to-do-list');
const input = document.querySelector('.input');
const submit = document.querySelector('.submit');

const addToList = () => {
    toList.appendChild((document.createElement('li').innerHTML = input.value));
};

submit.addEventListener('click', addToList);

console.log('test');
