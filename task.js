const taskValue = document.getElementById("task_value");
const taskSubmit = document.getElementById("button");
const taskList = document.getElementById("task_list");
const doneList = document.getElementById("done_list");
const finishSubmit = document.getElementById("reset");

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

const moveTasks = (tasks) => {
  for (let i = 0; i < tasks.length; i++) {
    doneList.appendChild(tasks[i]);
    tasks[i].remove();
  }
};

finishSubmit.addEventListener("click", (evt) => {
  evt.preventDefault();
  const children = taskList.children;
  moveTasks(children);
});
