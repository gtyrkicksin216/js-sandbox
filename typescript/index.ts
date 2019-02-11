/**
 * ES6 syntax is now widely suppored on all evergreen browsers.
 * Feel free to use ES6 syntax as the majority of our work will
 * be compiled, and have a ES5 target which will allow it to work
 * in legacy browsers (IE >:o of course)
 */

// Get the todo buttons as variables to use later

// Get the todo item Input to use later

// Get the todo list area to append items to later

// Create an array to hold the todo items as they get added

// Set an ID for the current item ID

/**
 * Set up a method that clears the form. This should also reset
 * the importance level
 */
function clearForm() {
  // clear the form
  // reset the importance level (use separate method so it can be used in multiple places)
}

// clear the importance by removing the selected modifier
function resetImportance() {
  // code here
}

function getImportance() {
  // get the selected importance for the current todo
}

// remove todo from array
function deleteTodo(id) {
  // loop through each item in the todoItemList
    // if the item.id === id, remove that item
}

// set up a method to create a new todo
function createTodoEl(id, value, importance) {
  // create the new todo HTML template to be added to the view
  // return that item from this function
}

// set up a method that adds the new todo, both to the array and to the view
function addTodo(value, importance) {
  // check to see if there is a value
  
    // if there is not a value, prompt the user via the placeholder to enter a todo
  
    // If there is a value
    // create a new todo with the id, value, and importance
    
    // add the todo item to the Array of todo items
    
    // Add the new todo to the view using your method from above
    
    // clear the form & importance to prepare for more input
    
    // Add click listener for todo-card all todo cards (needs to be added after the item has been added to the view)
    
      // mark the todo completed when clicked by adding the proper className
      
      // change the icon to delete so the todo can be removed
}

document.addEventListener(`DOMContentLoaded`, () => {
  // clear the form on load

  // listen to click on the clear button

  // listen for click on the add button

  // add listener for quick add of todos using enter

  // listen to clicks on all importance options

  // clear a previously selected importance

  // set the new importance to the clicked item
})
