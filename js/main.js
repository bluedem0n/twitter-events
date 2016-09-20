window.onload = function(){
    var timeline = document.getElementById("timeline"),
        tweet = document.getElementById("tweet"),
        btnNuevoTweet = document.getElementById("btn-agregar");
    var agregarTweet = function () {
        var tarea = tweet.value,
            nuevoTweet = document.createElement("div"),
            textoTweet = document.createElement("p"),
            contenido = document.createTextNode(tarea);
        
        /* Validando que no ingrese Tweet vacío */
        if(tarea === "") {
            tweet.setAttribute("placeholder", "Agrega un Tweet válido");
            tweet.className = "error";
            return false;
        }

        textoTweet.appendChild(contenido);
        nuevoTweet.appendChild(textoTweet);
        nuevoTweet.className = "imagen textTweet";
        timeline.insertBefore(nuevoTweet, timeline.childNodes[0]);
        tweet.value = "";
        
        for (var i = 0; i <= timeline.children.length -1; i++){
        timeline.children[i].addEventListener("click",function(){
            this.parentNode.removeChild(this);
        });
    }
    };
    
    /* Comprobando Input */
    var comprobarInput = function(){
        tweet.className = "";
        tweet.setAttribute = ("placeholder","Agrega una Tweet");
    }; 
    
    /* Eliminando Tweet */
    var eliminarTweet = function(){
        this.parentNode.removeChild(child);
    };
    
    /* Contando Caracteres */
    var contarCaracteres = function(){
        btnNuevoTweet.disabled=false; 
        var limite = 140;
        var longitud = document.getElementById("tweet").value.length;
        document.getElementById("contar").innerHTML = limite - longitud + " caracteres restantes"; 
        if (longitud >= limite){
            document.getElementById("contar").classList.add("limite");
            btnNuevoTweet.disabled = true;
        }  else{
            
             document.getElementById("contar").classList.remove("limite");
        }
    }
    
    var darEnter = function(e){
       var code = (e.keyCode ? e.keyCode : e.which);
       if(code == 13) { //Codigo de la tecla Enter
        
       }
    }
    
    /* Eventos */
    btnNuevoTweet.addEventListener("click",agregarTweet);
    tweet.addEventListener("click",comprobarInput);
    tweet.addEventListener("keydown", contarCaracteres);
    tweet.addEventListener("keypress",darEnter);

    for (var i = 0; i <= timeline.children.length -1; i++){
        
        timeline.children[i].addEventListener("click",eliminarTweet);
    }

}


