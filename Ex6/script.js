const button = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const ul = document.getElementById("taskList");

button.addEventListener("click", function () {
    if(taskInput.value !== "") {
        const li = document.createElement("li");
        li.textContent = taskInput.value;
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Supprimer";
        li.appendChild(deleteBtn);
        ul.appendChild(li);
        
        taskInput.value = "";

        deleteBtn.addEventListener("click", function () {
            ul.removeChild(li);
        })   
    }
    else {
        alert("Veuillez entré du texte");
    }
});