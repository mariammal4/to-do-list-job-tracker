const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {

  const taskText = taskInput.value.trim();

  // Validation

  if (taskText === "") {
    alert("Please enter a company name");
    return;
  }

  // Create list item

  const li = document.createElement("li");

  // Left section

  const taskLeft = document.createElement("div");
  taskLeft.classList.add("task-left");

  // Checkbox

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Task text

  const span = document.createElement("span");
  span.textContent = taskText;

  // Complete task

  checkbox.addEventListener("change", function () {

    if (checkbox.checked) {
      span.classList.add("completed");
    } else {
      span.classList.remove("completed");
    }

  });

  // Status dropdown

  const status = document.createElement("select");

  status.innerHTML = `
    <option>Applied</option>
    <option>Interview</option>
    <option>Rejected</option>
  `;

  // Delete button

  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "Delete";

  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // Append items

  taskLeft.appendChild(checkbox);
  taskLeft.appendChild(span);

  li.appendChild(taskLeft);
  li.appendChild(status);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  // Clear input

  taskInput.value = "";

});