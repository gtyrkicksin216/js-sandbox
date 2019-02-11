var buttons = {
  clearTodo: $('#clearTodo'),
  addTodo: $('#addTodo'),
};
var todoItem = $('#todoItem');
var todoList = $('#todoList');
var todoItemList = [];
var currentItemId = 0;

// clear the form and reset the importance
function clearForm() {
  $(todoItem).val('');
  $(todoItem).attr('placeholder', 'What do you need to do?');
  resetImportance();
}

// get the selected importance for the current todo
function getImportance() {
  return $('.todo-input__importance-option.m--selected').attr('data-importance');
}

// clear the importance by removing the selected modifier
function resetImportance() {
  $('.todo-input__importance-option').removeClass('m--selected');
}

function deleteTodo(id) {
  // remove todo from array
  $(todoItemList).each(function(index, item) {
    if (item.id === id) {
      todoItemList.splice(todoItemList.indexOf(item));
    }
  });
}

function createTodoEl(id, value, importance) {
  // create the new todo HTML to be added to the view
  var todoEl = '<p class="todo-items__card" data-id="' + id + '">' + value + '<svg class="todo-input__importance-icon"><use xlink:href="#' + importance + '"></svg></p>';
  // return that item from this function
  return todoEl;
}

function addTodo(value, importance) {
  // if thre is no value
  if (value === undefined || value === '') {
    // prompt the user to enter a value to the form
    $(todoItem).attr('placeholder', 'Please enter a todo');
  } else {
    // If there is a value
    // create a new todo with the value and importance
    var newTodo = {
      id: currentItemId += 1,
      value: value,
      importance: importance,
    };
    // push the todo item to the Array of todo items
    todoItemList.push(newTodo);
    // Add the new todo to the view
    $(todoList).append(createTodoEl(newTodo.id, newTodo.value, newTodo.importance));
    // clear the form to prepare for more input
    clearForm();
    // Add click listener for todo-card
    $('.todo-items__card').click(function() {
      // mark the todo completed when clicked
      $(this).addClass('m--completed').attr('data-completed', true);
      // change the icon to delete so the todo can be removed
      $(this).find('use').attr('xlink:href', '#delete');
      $('use').click(function() {
        if ($(this).attr('xlink:href') === '#delete') {
          var id = Number($(this).parents('.todo-items__card').attr('data-id'));
          deleteTodo(id);
          $($(this).parents('.todo-items__card')).remove();
        }
      })
    });
  }
}

$(document).ready(function() {
  // clear the form on load
  clearForm();

  // listen to click on the clear button
  $(buttons.clearTodo).click(function() {
    clearForm();
  });

  // listen for click on the add button
  $(buttons.addTodo).click(function() {
    var userTodo = $(todoItem).val();
    addTodo(userTodo, getImportance());
  });

  // add listener for quick add of todos using enter
  $('#todoItem').keydown(function(e) {
    if (e.key === 'Enter') {
      var userTodo = $(todoItem).val();
      addTodo(userTodo, getImportance());
    }
  })

  // listen to clicks on all importance options
  $('.todo-input__importance-option').click(function() {
    // clear a previously selected importance
    resetImportance();
    // set the new importance to the clicked item
    $(this).addClass('m--selected');
  });

});