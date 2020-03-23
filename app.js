var todoArray = [];


function todoOut() {
    var list = document.getElementById('out');
    var str = '';
    for (var i = 0; i < todoArray.length; i++) {
        str += `<li class="todo__item" data-attr="${i}">`;
        str += `<span class="todo__order">${i+1}.</span>`;
        str += `<input type="checkbox" class="chk" data-attr="${i}">`;
        str += `<p class="todo__text">${todoArray[i]}</p>`;
        str += `<button class="todo__btndel todo__btn" onclick="delTodo(this)" data-id="${i}">delete</button>`;
        str += `</li>`;
    }
    list.innerHTML = str;
};

todoOut();


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
};


function delTodosAll() {
    todoArray = [];
    todoOut();
};

// function sorting(item) {
//     var chkb = document.getElementsByClassName('chk');
//     var todo = document.getElementsByClassName('todo__item');
//     var chkattr = item.getAttribute('data-attr');
//     console.log(chkattr);
//     if (chkb[chkattr].checked) {
//         todoArray.push(todoArray[chkattr]);
//         todoOut();
//     }
// }

function delTodo(item) {
    var todo = document.getElementsByClassName('todo__item');
    var id = item.getAttribute('data-id');
    todoArray.splice(id, 1);
    todoOut();
};