window.onload = function(){
    var timeline = document.getElementById("timeline"),
        tweet = document.getElementById("tweet"),
        btnNuevoTweet = document.getElementById("btn-agregar"),
        contador = document.getElementById("contar");
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
        contador.textContent = "140 caracteres restantes";
        
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
    
    
    var maximo = [120,130,140];
    var color = ["verde","rosado","morado"]; 
    
    /* Contando Caracteres */
    var contarCaracteres = function(){
        btnNuevoTweet.disabled=false; 
        var limite = 140;
        var longitud = document.getElementById("tweet").value.length;
        var contador = document.getElementById("contar");
            contador.innerHTML = limite - longitud + " caracteres restantes"; 
        
        if(longitud >= maximo[0] && longitud < maximo[1]) {         
               contador.classList.remove(color[1]);
               contador.classList.add(color[0]);
       } else if(longitud >= maximo[1] && longitud < maximo[2]) {   
               contador.classList.remove(color[0]);
               contador.classList.remove(color[2]);
               contador.classList.add(color[1]);    
       } else if(longitud >= maximo[2]){                           
               contador.classList.remove(color[1]);
               contador.classList.add(color[2]);
               btnNuevoTweet.disabled = true;
       } else {
               for(var i = 0; i < maximo.length-1; i++){
                   contador.classList.remove(color[i]);        
               };
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
    tweet.addEventListener("keyup", contarCaracteres);
    tweet.addEventListener("keypress",darEnter);

    for (var i = 0; i <= timeline.children.length -1; i++){
        
        timeline.children[i].addEventListener("click",eliminarTweet);
    }

}

