const qS = (type) => document.querySelector(type);
const cE = (type) => document.createElement(type);

const itemGen = (itemData) => {
  const wrapper = cE("li");

  wrapper.textContent = itemData.content;

  wrapper.addEventListener("click", () => {
    todoList = todoList.filter((todo) => todo.id !== itemData.id);
    listItemRender();
  });
  return wrapper;
};

const onHandleSubmit = (e) => {
  e.preventDefault();
  todoList.push({ id: Date.now(), content: e.target[0].value });
  listItemRender();
};

const listItemRender = () => {
  textInputEl.value = "";
  listEl.textContent = "";
  todoList.forEach((todo) => {
    listEl.appendChild(itemGen(todo));
  });
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

const formEl = qS("form");
const listEl = qS(".list");
const textInputEl = qS(".textInput");
let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

listItemRender();

// Event ?
formEl.addEventListener("submit", onHandleSubmit);
