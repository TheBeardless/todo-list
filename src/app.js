console.log("App starts");
const todoList = [];
const onTodoFormSubmit = (event) => {
  event.preventDefault();
  const $todo = $('input[name="todo"]');
  const todoItem = { title: $todo.val(), done: false };
  todoList.push(todoItem);
  console.log("todoListArray=", todoList);
};
$("#todo-form").on("submit", onTodoFormSubmit);
