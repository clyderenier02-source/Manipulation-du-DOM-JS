const button = document.querySelector("#deleteBtn");

button.addEventListener("click", function () {
    const articles = document.getElementById("articles");
    const elementASupprimer = articles.lastElementChild;
    
    articles.removeChild(elementASupprimer);
    
    if(articles.lastElementChild) {
    }
    else {
        alert("Aucun articles a supprimer")
    }
});
