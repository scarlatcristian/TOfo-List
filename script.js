"use strict";

const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

const addTodo = (todo) => {
  let todoText = input.value;

  if (todo) {
    todoText = todoText;
  }

  if (todoText) {
    const todoEl = document.createElement("li");
    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }

    todoEl.innerText = todoText;

    // Left click complete El
    todoEl.addEventListener("click", () =>
      todoEl.classList.toggle("completed")
    );

    // Right click remove El
    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoEl.remove();
    });

    todosUL.appendChild(todoEl);

    input.value = "";
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo();
});
