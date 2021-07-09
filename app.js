const formAaddTodo = document.querySelector(".form-add-todo");
const inputSearchTodo = document.querySelector(".form-search input");
const todosContainer = document.querySelector(".todos-container");

const insertHTML = (textValue) => {
  todosContainer.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${textValue}</span>
    <i class="far fa-trash-alt delete text-danger"></i>
    </li>
    `;
};

const addTodo = (event) => {
  event.preventDefault();
  const todoValue = event.target.add.value.trim();

  if (todoValue.length) {
    insertHTML(todoValue);
  }
  event.target.reset();
};

const deleteTodo = (event) => {
  const clickedElement = event.target;

  // Parte Maior -> Dúvida na Varredura do DOM
  if (Array.from(clickedElement.classList).includes("delete")) {
    clickedElement.previousSibling.parentNode.remove();
  }
};

const filterTodo = (event) => {
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
};

inputSearchTodo.addEventListener("input", filterTodo);
formAaddTodo.addEventListener("submit", addTodo);
todosContainer.addEventListener("click", deleteTodo);
