/* 
- verificar o click no botao enviar
- verificar se tem conteudo no input
- criar div de task
- verificar checkbox
- se ativada trocar a class
- caso consiga apagar a div da task e criar uma div dnetro de taskdo
*/

const buttonAdd = document.querySelector('.newTaskButton');
const newTaskInput = document.querySelector('.newTaskInput');

function createTask(task) {
    let div = document.createElement('div');
    let input = document.createElement('input');
    let p = document.createElement('p');
    let button = document.createElement('button');

    div.classList.add('task');
    input.classList.add('check');
    button.classList.add('delete');
    input.setAttribute('type', 'checkbox');
    button.setAttribute('type', 'submit');

    p.innerText = task;
    button.innerText = 'delete';

    div.append(input);
    div.append(p);
    div.append(button);

    return div;
}

function addTask() {
    let taskToDo = newTaskInput.value.trim();
    let toDo = document.querySelector('.todo');

    if (taskToDo == "") {
        newTaskInput.classList.add('invalid');
        console.log('ivalid')
        return
    } else {
        newTaskInput.classList.remove('invalid');
        console.log('valido')
    }

    toDo.prepend(createTask(taskToDo));
    console.log('criado')

    newTaskInput.value = "";
    console.log('zerado');
    
}

buttonAdd.addEventListener('click', addTask)

/* function checkInput() {
    
} */