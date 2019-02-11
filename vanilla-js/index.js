/**
 * ES6 syntax is now widely suppored on all evergreen browsers.
 * Feel free to use ES6 syntax as the majority of our work will
 * be compiled, and have a ES5 target which will allow it to work
 * in legacy browsers (IE >:o of course)
 */

// Get the todo buttons as variables to use later
const buttons = {
  addTodo: document.getElementById('addTodo'),
  clearTodo: document.getElementById('clearTodo'),
};
// Get the todo item Input to use later
const todoInput = document.getElementById('todoItem');
// get the importance buttons
const importanceButtons = document.querySelectorAll(`.todo-input__importance-option`);
// Get the todo list area to append items to later
const todoList = document.getElementById('todoList');
// Create an array to hold the todo items as they get added
const todoItemList = [];
// Set an ID for the current item ID
let currentItemId = 0;
/**
 * Set up a method that clears the form. This should also reset
 * the importance level
 */
function clearForm() {
  // clear the form
  todoInput.value = '';
  todoInput.setAttribute(`placeholder`, `What do you need to do`);
  resetImportance();
  // reset the importance level (use separate method so it can be used in multiple places)
}

// clear the importance by removing the selected modifier
function resetImportance() {
  importanceButtons.forEach(button => button.classList.remove('m--selected'));
}

function getImportance() {
  // get the selected importance for the current todo
  return document.querySelector(`.todo-input__importance-option.m--selected`).getAttribute(`data-importance`);
}

// set up method to complete todo
function completeTodo(todoEl) {
  todoEl.classList.add(`m--completed`);
  const todoIcon = todoEl.querySelector(`use`);
  todoIcon.setAttribute(`xlink:href`, `#delete`);
  todoIcon.style.cssText = `pointer-events: auto`;
  todoIcon.addEventListener(`click`, (ev) => {
    console.log(ev);
  });
}

// remove todo from array
function deleteTodo(id) {
  // loop through each item in the todoItemList
    // if the item.id === id, remove that item
}

// set up a method to create a new todo
function createTodoEl(id, value, importance) {
  // create the new todo HTML template to be added to the view
  const newTodoEl = document.createElement(`p`);
  newTodoEl.classList.add(`todo-items__card`);
  newTodoEl.setAttribute(`data-id`, id);
  const newTodoIcon = `
    ${value}
    <svg class="todo-input__importance-icon">
      <use xlink:href="#${importance}">
    </svg>
  `;
  newTodoEl.innerHTML = newTodoIcon;
  // add event listner here to avoid overload
  newTodoEl.addEventListener(`click`, (ev) => {
    console.log(ev);
    completeTodo(ev.target);
  }, { once: true });
  // return that item from this function
  return newTodoEl;
}

// set up a method that adds the new todo, both to the array and to the view
function addTodo(value, importance) {
  // check to see if there is a value
  if (value === '' || value === undefined) {
    // if there is not a value, prompt the user via the placeholder to enter a todo
    todoItem.setAttribute(`placeholder`, `Please enter a todo`);
  } else {
    // If there is a value
    // create a new todo with the id, value, and importance
    const newTodo = {
      id: currentItemId += 1,
      value: value,
      importance: importance,
    };
    // add the todo item to the Array of todo items
    todoItemList.push(newTodo);
    // Add the new todo to the view using your method from above
    todoList.appendChild(createTodoEl(newTodo.id, newTodo.value, newTodo.importance))
    // clear the form & importance to prepare for more input
    clearForm();
    // mark the todo completed when clicked by adding the proper className
    
    // change the icon to delete so the todo can be removed
  } 
}

document.addEventListener(`DOMContentLoaded`, () => {
  // clear the form on load
  clearForm();
  // listen to click on the clear button
  buttons.clearTodo.addEventListener(`click`, () => {
    clearForm();
  });
  // listen for click on the add button
  buttons.addTodo.addEventListener(`click`, () => {
    console.log(`Add button clicked`);
    addTodo(todoInput.value, getImportance());
  })
  // add listener for quick add of todos using enter
  todoInput.addEventListener(`keyup`, (ev) => {
    if (ev.code === `Enter`) {
      // add todo
    }
  });
  // listen to clicks on all importance options
  importanceButtons.forEach((button) => {
    button.addEventListener(`click`, (ev) => {
      resetImportance();
      ev.target.classList.add(`m--selected`);
    });
  });
  // clear a previously selected importance

  // set the new importance to the clicked item
})
