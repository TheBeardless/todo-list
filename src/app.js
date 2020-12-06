console.log("App starts");
const todoList = [];
$("#container").append('<ul id="todos"></ul>');
const onTodoFormSubmit = (event) => {
  event.preventDefault();
  const $todo = $('input[name="todo"]');
  const todoItem = { title: $todo.val(), done: false };
  todoList.push(todoItem);
  console.log("todoList", todoList);
  // The best approach
  $("#todos").append(`<li>${todoList[todoList.length - 1].title}</li>`);
  // Other approaches
  // $("#todos").append(`<li>${$todo.val()}</li>`);
  // $("#todos").empty();
  // for (let i = 0; i < todoList.length; i++) {
  //   // todoList[i].title
  //   $("#todos").append(`<li>${todoList[i].title}</li>`);
  // }
};
$("#todo-form").on("submit", onTodoFormSubmit);
