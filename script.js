// **** FREQ. USED ****

frequently_used_fnc().map((el) => {
  $("#frequently_used").append(el);
});

// **** NOTES ****

function updateRows() {
  const len = getNotes().length;
  const rowChars = 68;

  const conditionalRows =
    len <= rowChars * 2
      ? 2
      : len <= rowChars * 4
      ? 4
      : len <= rowChars * 6
      ? 6
      : len <= rowChars * 8
      ? 8
      : len <= rowChars * 10
      ? 10
      : 12;

  $("#notes").attr("rows", conditionalRows);
}

updateRows();

$("#notes").html(getNotes() ? getNotes() : "You didn't take any notes :)");

$("#notes").on("input", function (e) {
  setNotes(e.target.value);
  updateRows();
});

// **** TODO ****

refreshData();

$("#new-todo").keypress("13", function (e) {
  if (e.which === 13) {
    e.target.value.length !== 0
      ? addTodo({
          title: e.target.value,
          createdAt: new Date(),
        })
      : false;
  }
});

$("#new-todo-btn").on("click", function (e) {
  $("#new-todo").val().length !== 0
    ? addTodo({
        title: $("#new-todo").val(),
        createdAt: new Date(),
      })
    : false;
});