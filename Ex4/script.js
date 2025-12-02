const element = [];
const button = document.querySelector("#addItemBtn");

button.addEventListener("click", function () {
    let nouvelElement = "Élement" + (element.length + 1);
    element.push(nouvelElement);

    const li = document.createElement("li");
    li.textContent = nouvelElement;

    const ul = document.getElementById("liste");
    ul.appendChild(li);
});

console.log(element);
