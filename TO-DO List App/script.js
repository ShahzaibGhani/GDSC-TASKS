let taskInput = document.getElementById("task");
let taskList = document.getElementById("tasks");

function addtask() {


    if (taskInput.value.trim() !== "") {
        let taskDiv = document.createElement("div");
        taskDiv.className = "task-div";

        let taskCircle = document.createElement("img");
        taskCircle.className = "circle-img";


        let taskField = document.createElement("input");
        taskField.className = "taskInputRead";
        taskField.type = "text";
        taskField.value = taskInput.value;
        taskField.readOnly = true;

        let updateButton = document.createElement("button");
        updateButton.className = "update-button";
        updateButton.onclick = function () {
            taskField.readOnly = !taskField.readOnly;
            if(taskField.className === "taskInputWrite")
            {
                taskField.className = "taskInputRead";
            }
            else if(taskField.className === "taskInputRead")
            {
                taskField.className = "taskInputWrite";
            }
        };

        let deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.onclick = function () {
            taskList.removeChild(taskDiv);
        };

        taskDiv.appendChild(taskCircle);
        taskDiv.appendChild(taskField);
        taskDiv.appendChild(updateButton);
        taskDiv.appendChild(deleteButton);

        taskList.appendChild(taskDiv);
        taskInput.value = "";
    }
}
