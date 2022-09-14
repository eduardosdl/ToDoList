const tasks = document.querySelector('.tasks');
const buttonAdd = document.querySelector('.newTaskButton');
const newTaskInput = document.querySelector('.newTaskInput');
const buttonDelete = document.querySelector('.buttonDelete');
const keys = Object.keys(localStorage);

keys.forEach(key => addTask(key));

// cria o htmlde uma nova tarefa
function createTask(task) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const button = document.createElement('button');

    div.classList.add('todo');
    if(localStorage.getItem(task) === 'true') {
        div.classList.add('done');
    }
    button.classList.add('buttonDelete');
    button.setAttribute('type', 'submit');

    p.innerText = task;
    button.innerText = 'delete';

    div.append(p);
    div.append(button);

    return div;
}

// cria uma nova tarefa
function addTask(task) {
    const tasks = document.querySelector('.tasks');
    const divTask = createTask(task);

    if (!task) {
        newTaskInput.classList.add('invalid');
        return
    } else {
        newTaskInput.classList.remove('invalid');
    }

    tasks.prepend(divTask);

    newTaskInput.value = "";
}

// evento para identificar o click
buttonAdd.addEventListener('click', () => {
    const taskToDo = newTaskInput.value.trim();

    localStorage.setItem(taskToDo, false);
    addTask(taskToDo);
});
    
// evento para identificar o 'enter'
newTaskInput.addEventListener('keypress', (ev) => {
    if (ev.key == 'Enter') {
        const taskToDo = newTaskInput.value.trim();

        localStorage.setItem(taskToDo, false);
        addTask(taskToDo);
    }
});

// verifica se a tarefa foi concluida
function checkTaskDone (tagClicked) {
    if (tagClicked.classList.value === "todo done") {
        localStorage.setItem(tagClicked.children[0].innerText, true);
    } else {
        localStorage.setItem(tagClicked.children[0].innerText, false);
    }
}

// envento para conclusao e exclusao de de tarefa
tasks.addEventListener('click', function (ev) {
    const tagClicked = ev.target.tagName;
    const tagFather = ev.target.parentNode;

    if (tagClicked === "INPUT" || tagClicked === "P") {
        tagFather.classList.toggle('done');
        checkTaskDone(tagFather);
    } else if (tagClicked === "DIV") {
        ev.target.classList.toggle('done');
        checkTaskDone(ev.target);
    } else if (tagClicked === "BUTTON") {
        tagFather.style.display = 'none';
        localStorage.removeItem(tagFather.children[0].innerText);
    }
});