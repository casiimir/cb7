const todos = [
  {
    id: 1,
    todo: "Do something nice for someone I care about",
    completed: true,
    userId: 26,
  },
  {
    id: 2,
    todo: "Memorize the fifty states and their capitals",
    completed: false,
    userId: 48,
  },
  {
    id: 3,
    todo: "Watch a classic movie",
    completed: false,
    userId: 4,
  },
  {
    id: 4,
    todo: "Contribute code or a monetary donation to an open-source software project",
    completed: false,
    userId: 48,
  },
];

// for (let item of todos) {
//   console.log(item);
// }

// for (let i = 0; i <= todos.length; i++) {
//   console.log(todos[i]);
// }

// H. O. F. - forEach
// todos.forEach((item) => {
//   console.log(item);
//   console.log(item.completed);
// });

const cE = (element) => document.createElement(element);
const qS = (element) => document.querySelector(element);
const qSA = (elements) => document.querySelectorAll(elements);

const listItemGen = (todoData) => {
  const listItemEl = cE("li");

  listItemEl.id = todoData.id;
  listItemEl.textContent = todoData.todo;
  listItemEl.className = "listItem";

  if (todoData.completed) listItemEl.classList.add("listCompleted");

  return listItemEl;
};

const listRender = () => {
  const listItemEls = qSA(".listItem");

  listItemEls.forEach((element) =>
    element.addEventListener("click", (evt) => {
      todos.forEach((item) => {
        if (item.id === parseInt(evt.target.id)) {
          item.completed = !item.completed;
          element.classList.toggle("listCompleted");
        }
      });
      // element.classList.toggle("listCompleted"); // modifica UI
    })
  );
};

// IDENTICO a riga 199!
// function cE(element) {
//   return document.createElement(element);
// }

const todoInputEL = cE("input");
const todoButtonEL = cE("button");
const listEl = cE("ul");

todoInputEL.setAttribute("type", "text");
todoInputEL.setAttribute("placeholder", "Todo text");
todoInputEL.className = "todoInput";
todoButtonEL.className = "todoButton";
todoButtonEL.textContent = "Add todo";
listEl.className = "list";
// listEl.append(listItemGen("Pippo"));
// listEl.append(listItemGen("Pluto"));
// listEl.append(listItemGen("Topolino"));

todos.forEach((item) => listEl.append(listItemGen(item)));
// IDENTICO a riga 220!
// todos.forEach(function (item) {
//   listEl.append(listItemGen(item.todo));
// });

document.body.append(todoInputEL, todoButtonEL, listEl);

listRender();

let inputValueText;

todoInputEL.addEventListener("change", (event) => {
  inputValueText = event.target.value;
  // todos.push({
  //   id: Math.floor(Math.random() * 10000),
  //   todo: event.target.value,
  //   completed: false,
  // });
  // listEl.textContent = "";
  // todos.forEach((item) => listEl.append(listItemGen(item)));
  // listRender();
});

todoButtonEL.addEventListener("click", () => {
  todos.push({
    id: Math.floor(Math.random() * 10000),
    todo: inputValueText,
    completed: false,
  });
  listEl.textContent = "";
  todos.forEach((item) => listEl.append(listItemGen(item)));
  listRender();
});
