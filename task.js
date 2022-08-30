const taskValue = document.getElementById("task_value");
const taskSubmit = document.getElementById("button");
const taskList = document.getElementById("task_list");

const addTasks = (task) => {
  const listItem = document.createElement("li");
  const showItem = taskList.appendChild(listItem);
  showItem.innerHTML = task;
};

taskSubmit.addEventListener("click", (evt) => {
  evt.preventDefault();
  const task = taskValue.value;
  if (taskSubmit.innerHTML !== "スタート" && taskValue.value !== "") {
    addTasks(task);
  }
  taskValue.value = "";
});
