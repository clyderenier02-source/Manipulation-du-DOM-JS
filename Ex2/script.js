const ul = document.createElement("ul");
ul.id = "maListe";

// récupérer la div existante
const div = document.getElementById("conteneur");

// insérer le ul dans la div
div.appendChild(ul);

const listeLi = document.createElement("li")

const li1 = document.createElement("li");
li1.textContent = "Apprendre JavaScript";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.textContent = "Pratiquer la manipulation du DOM";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.textContent = "Créer un projet";
ul.appendChild(li3);


