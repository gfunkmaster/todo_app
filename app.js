const todoInputEl = document.querySelector(".todo__input");
const todoList = document.querySelector(".todo__list");
const todoItemEls = document.querySelectorAll(".todo__item");

const addListItem = () => {
  //enter
  todoInputEl.addEventListener("keypress", (e) => {
    //checking if you pressed enter on your keyboard
    if (e.keyCode === 13) {
      let inputValue = todoInputEl.value;
      // creating new list item and passing in input value
      let newListItem = createListItem(inputValue);

      //addinng the new created li to the ul
     // todoList.appendChild(newListItem);
     todoList.insertBefore(newListItem, todoList.childNodes[0])
      todoInputEl.value = "";
    }
  });
};

//function for creating new li element, adding inputvalue as a parameter and style
const createListItem = (text) => {
  const newListEl = document.createElement("li");
  newListEl.textContent = text;
  newListEl.setAttribute("class", "todo__item");
  return newListEl;
};

//function for toggle done class
//dosent work, reasearch on bubbling and propogation
/* const toggleDone = () => {
    for(let element of todoItemEls) {
       element.addEventListener('click', () => {
        element.classList.toggle('done')
       })
    }
} */


const toggleDone = () => {
    todoList.addEventListener('click', (e) => {
        //checks if the targat contain class todo__item
        if(e.target.classList.contains('todo__item') ){
            e.target.classList.toggle('done')
        }

    })
}

addListItem();
toggleDone();