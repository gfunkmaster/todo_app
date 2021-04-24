
const todoInputEl = document.querySelector('.todo__input');
const todoList = document.querySelector('.todo__list');
const todoItemEls = document.querySelectorAll('.todo__item');

const addListItem = () =>{ //enter
    todoInputEl.addEventListener('keypress', (e) => {

        //checking if you pressed enter on your keyboard
        if(e.keyCode === 13) {

            let inputValue = todoInputEl.value;
            // creating new list item and passing in input value
            let newListItem = createListItem(inputValue)   

            //addinng the new created li to the ul
            todoList.appendChild(newListItem)
            todoInputEl.value ="";
        }
    })
}


//function for creating new li element, adding inputvalue as a parameter and style
const createListItem = (text) => {
    const newListEl = document.createElement('li');
    newListEl.textContent = text;
    newListEl.setAttribute('class', 'todo__item')
    return newListEl;
}


addListItem()