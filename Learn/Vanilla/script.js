const input = document.querySelector('.input');
const taskList = document.querySelector('.task-list');
const submitButton = document.querySelector('.submit');

const handleSubmit = (e) => {
    console.log('test');
    e.preventDefault();
    const value = input.value;
    const task = `<li>${value}
                <button>update</button>
                <button>delete</button></li>`;
    taskList.innerHTML = task;
};

submitButton.addEventListener('click', (e) => handleSubmit(e));
