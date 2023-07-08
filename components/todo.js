function setTodo(list) {
  localStorage.setItem("__homepage__todo", list);
}

function addTodo(data) {
  let todo = getTodo() ? getTodo() : [];

  todo.push(data);

  setTodo(JSON.stringify(todo || [{ ...data }]));

  $("#new-todo").val("");
  toast.success("Task created successfully!");

  refreshData();
}

function removeTodo(id) {
  let todo = getTodo() ? getTodo() : [];

  let filtered = todo.filter((to, i) => {
    return i !== id;
  });

  setTodo(JSON.stringify(filtered || getTodo()));

  toast.info("Task completed successfully!");

  refreshData();
}

function getTodo() {
  const todoRaw = localStorage.getItem("__homepage__todo");

  const todo = todoRaw ? JSON.parse(todoRaw) : null;

  return (todo !== null && todo?.length !== 0) ? todo : false;
}

function todo_render_fnc() {
  let arr = [];
  let todo = getTodo();

  for (let [i, to] of todo.entries()) {
    arr.push(/*html*/ `
        <div class="bg-slate-300 text-black rounded-lg p-3 flex flex-row gap-2 items-center todo-item">
            <input type="checkbox" id="todo-item-${i}" class="cursor-pointer peer w-4 h-4 todo-checkbox" onchange="removeTodo(${i})" />
            <label for="todo-item-${i}" class="w-full cursor-pointer peer-checked:line-through peer-checked:text-gray-400">${to.title}</label>
        </div>
    `);
  }

  return arr;
}

function clean_todo_tree() {
  $(".todo-item").remove();
}

function refreshData() {
  clean_todo_tree();
  $("#task-count").html(getTodo().length || 0);
  getTodo() ? todo_render_fnc().map((el) => {
    $("#todo").append(el);
  }) : $("#todo").html(`<div class="todo-item">You don't have any tasks 🎉</div>`)
}
