var todoArray = localStorage.getItem('array');
console.log(todoArray);
window.onload = onLoad;
var list = document.getElementById('out');




function save(inText) {
    localStorage.setItem('todo', inText);
    localStorage.setItem('array', todoArray);
    list.innerHTML = localStorage.getItem('todo');
}


function onLoad() {
    if (todoArray === null) {
        todoArray = [];
    }
    list.innerHTML = localStorage.getItem('todo');
}



function todoOut() {
    var str = '';
    for (var i = 0; i < todoArray.length; i++) {
        str += `<li class="todo__item" data-attr="${i}">`;
        str += `<span class="todo__order">${i+1}.</span>`;
        str += `<input type="checkbox" class="chk" data-attr="${i}" onclick="check()">`;
        str += `<p class="todo__text">${todoArray[i]}</p>`;
        str += `<button class="todo__btndel todo__btn" onclick="delTodo(this)" data-id="${i}">delete</button>`;
        str += `</li>`;
    }
    save(str);
}



function addTodo() {
    var text = document.getElementById('innertext').value;
    var input = document.getElementById('innertext');
    if (text === '') {
        alert('Inter the todos!!!');
    } else {
        todoArray.push(text);
        todoOut();
        input.value = '';
    }
}


function check() {
    var chkbox = document.getElementsByClassName('chk');
    var line = document.getElementsByClassName('todo__text');
    for (var a = 0; a < todoArray.length; a++) {
        if (chkbox[a].checked == true) {
            line[a].classList.add('active');
        } else {
            console.log('false');
        }
    }
}




function delTodosAll() {
    todoArray = [];
    localStorage.clear('todo', 'array');
    todoOut();

}


function delTodo(item) {
    var id = item.getAttribute('data-id');
    todoArray.splice(todoArray[id], 1);
    todoOut();
}