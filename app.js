const formAaddTodo = document.querySelector(".form-add-todo");
const inputSearchTodo = document.querySelector(".form-search input");
const todosContainer = document.querySelector(".todos-container");

formAaddTodo.addEventListener("submit", (event) => {
  event.preventDefault();
  const todoValue = event.target.add.value.trim();

  if (todoValue.length) {
    todosContainer.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todoValue}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>
    `;
  }

  event.target.reset();
});

todosContainer.addEventListener("click", (event) => {
  const clickedElement = event.target;

  if (Array.from(clickedElement.classList).includes("delete")) {
    clickedElement.parentElement.remove();
  }
});

inputSearchTodo.addEventListener("input", (event) => {
  const inputValue = event.target.value.toLowerCase().trim();

  Array.from(todosContainer.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(inputValue))
    .forEach((todo) => {
      todo.classList.remove("d-flex");
      todo.classList.add("d-none");
    });

  Array.from(todosContainer.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(inputValue))
    .forEach((todo) => {
      todo.classList.add("d-flex");
      todo.classList.remove("d-none");
    });
});
