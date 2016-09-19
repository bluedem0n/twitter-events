 (function () {
    var lista = document.getElementById("lista"),
        tweet = document.getElementById("tweet"),
        btnNuevaTarea = document.getElementById("btn-agregar");
    var agregarTarea = function () {
        var tarea = tweet.value,
            nuevaTarea = document.createElement("li"),
            enlace = document.createElement("a"),
            contenido = document.createTextNode(tarea);
        if(tarea === "") {
            tweet.setAttribute("placeholder", "Agrega una tarea válida");
            tweet.className = "error";
            return false;
        }
        enlace.appendChild(contenido);
        enlace.setAttribute("href", "#");
        nuevaTarea.appendChild(enlace);
        lista.insertBefore(nuevaTarea, lista.childNodes[0]);
        tweet.value = "";
        
        for (var i = 0; i <= lista.children.length -1; i++){
        lista.children[i].addEventListener("click",function(){
            this.parentNode.removeChild(this);
        });
    }
    };
    var comprobarInput = function(){
        tweet.className = "";
        tweet.setAttribute = ("placeholder","Agrega una Tweet");
        
    }; 
    var eliminarTarea = function(){
         this.parentNode.removeChild(child);
    };
    btnNuevaTarea.addEventListener("click",agregarTarea);
    tweet.addEventListener("click",comprobarInput);

    for (var i = 0; i <= lista.children.length -1; i++){
        
        lista.children[i].addEventListener("click",eliminarTarea);
    }
    
}());
