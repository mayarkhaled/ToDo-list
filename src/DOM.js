import { list } from "./index.js";

const maindiv = document.querySelector("#lists");
const addnewList = document.querySelector("#addNewList");

function startDOM() {
  addnewList.addEventListener("click", () => {
    //get the list name and description
    let listName = window.prompt("Enter your todo list name..");
    let listDescription = window.prompt("Enter the description..");
    //create list dom card
    let newList = list(listName, listDescription);
    createListCard(newList);
  });
}

function createListCard(newList) {
  //labels
  const titlelable = document.createElement("label");
  const deslable = document.createElement("label");
  let br = document.createElement("br");
  titlelable.textContent = "List title : ";
  deslable.textContent = "describtion : ";

  //
  const div = document.createElement("div");
  const nameLabel = document.createElement("label");
  const desLabel = document.createElement("label");
  const addtodoButton = document.createElement("button");
  const datePicker = document.createElement("input");
  const list = document.createElement("ul");
  const deleteButton = document.createElement("button");

  nameLabel.textContent = newList.name;
  desLabel.textContent = newList.des;
  datePicker.type = "date";
  addtodoButton.textContent = "Add new task ";
  deleteButton.textContent = "delete";

  NonEmptychecklist(newList, list);

  addtodoButton.addEventListener("click", () => {
    list.appendChild(todoButtonEvent());
  });

  datePicker.addEventListener("click", () => {
    newList.date = datePicker.textContent;
  });

  deleteButton.addEventListener("click", () => {
    div.remove();
  });

  div.style.backgroundColor = "#978D8A";
  div.style.width = "60em";
  div.appendChild(deleteButton);
  div.appendChild(titlelable);
  div.appendChild(nameLabel);
  div.appendChild(br);
  div.appendChild(deslable);
  div.appendChild(desLabel);

  br = document.createElement("br");
  div.appendChild(br);
  div.appendChild(datePicker);
  br = document.createElement("br");
  div.appendChild(br);
  div.appendChild(addtodoButton);
  div.appendChild(list);
  maindiv.appendChild(div);
}

function todoButtonEvent() {
  let title = window.prompt("Enter the title");
  let listEntry = [];
  listEntry.push(title);

  const li = document.createElement("li");
  const checkName = document.createElement("label");
  const check = document.createElement("input");
  check.type = "checkbox";
  checkName.textContent = title;

  check.addEventListener("click", () => {
    listEntry.push(check.checked);
  });

  li.appendChild(check);
  li.appendChild(checkName);
  return li;
}

function NonEmptychecklist(newList, list) {
  //  const list = document.createElement('ul');
  if (newList.checklist.length != 0) {
    for (let i = 0; i < newList.checklist.length; i++) {
      const li = document.createElement("li");
      const checkName = document.createElement("label");
      const check = document.createElement("input");
      check.type = "checkbox";
      checkName.textContent = newList.checklist[i][0];
      check.checked = newList.checklist[i][1];
      li.appendChild(check);
      li.appendChild(checkName);
      list.appendChild(li);
    }
  }
  return list;
}
export { startDOM, createListCard };
