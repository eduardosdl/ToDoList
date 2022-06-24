const tasks = document.querySelector('.tasks');
const buttonAdd = document.querySelector('.newTaskButton');
const newTaskInput = document.querySelector('.newTaskInput');

// cria o htmlde uma nova tarefa
function createTask(task) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const button = document.createElement('button');

    div.classList.add('todo');
    button.classList.add('buttonDelete');
    button.setAttribute('type', 'submit');

    p.innerText = task;
    button.innerText = 'delete';

    div.append(p);
    div.append(button);

    return div;
}

// cria uma nova tarefa
function addTask() {
    const taskToDo = newTaskInput.value.trim();
    const tasks = document.querySelector('.tasks');
    const divTask = createTask(taskToDo);

    if (taskToDo == "") {
        newTaskInput.classList.add('invalid');
        return
    } else {
        newTaskInput.classList.remove('invalid');
    }

    tasks.prepend(divTask);

    newTaskInput.value = "";
}

// evento para identificar o click
buttonAdd.addEventListener('click', addTask);
// evento para identificar o 'enter'
newTaskInput.addEventListener('keypress', (ev) => {
    if(ev.key == 'Enter') {
        addTask();
    }
});

// envento para conclusao e exclusao de de tarefa
tasks.addEventListener('click', function(ev) {
    const tagClicked = ev.target.tagName;
    const tagFather = ev.target.parentNode;

    if(tagClicked === "INPUT" || tagClicked === "P") {
        tagFather.classList.toggle('done');
    } else if (tagClicked === "DIV") {
        ev.target.classList.toggle('done');
    } else if (tagClicked === "BUTTON") {
        tagFather.style.display = 'none';
    }
});

buttonAdd.addEventListener('click', addTask);