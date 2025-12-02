const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35},
];

for(let i = 0; i < users.length; i++) {
    const user = users[i];
    
    const li = document.createElement("li");
    li.textContent = `Nom : ${users[i].name}, ${users[i].age}`
    userList.appendChild(li);
}


