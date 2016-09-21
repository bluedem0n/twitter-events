window.onload = function(){
    var timeline = document.getElementById("timeline"),
        tweet = document.getElementById("tweet"),
        btnNuevoTweet = document.getElementById("btn-agregar"),
        contador = document.getElementById("contar");
        btnNuevoTweet.disabled = true;


    var agregarTweet = function () {
        var tarea = tweet.value,
            nuevoTweet = document.createElement("div"),
            textoTweet = document.createElement("p"),
            contenido = document.createTextNode(tarea),
            horaImprimir = document.createElement("span");

        textoTweet.appendChild(contenido);
        nuevoTweet.appendChild(textoTweet);
        nuevoTweet.appendChild(horaImprimir);
        nuevoTweet.className = "imagen textTweet";
        timeline.insertBefore(nuevoTweet, timeline.childNodes[0]);
        tweet.value = "";
        contador.textContent = "140 caracteres restantes";
        
        var fecha = new Date();
        var hora = fecha.getHours();
        var minuto = fecha.getMinutes();

        if(minuto < 10){
            minuto = "0" + minuto;
        }

        var horaImprimible = hora + ":" + minuto + " ";
        horaImprimir.innerText = horaImprimible;

        for (var i = 0; i <= timeline.children.length -1; i++){
        timeline.children[i].addEventListener("click",function(){
            this.parentNode.removeChild(this);
        });
    }

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
    
    /* Crecer Text Area con un Enter */
    
        var darEnter = function(){
          var textarea = this;
          setTimeout(function(){
            textarea.style.cssText = 'height:130px; padding:0';
            textarea.style.cssText = 'height:' + textarea.scrollHeight + 'px';
            },0); 
        }

    /* Eventos */
    btnNuevoTweet.addEventListener("click",agregarTweet);
    tweet.addEventListener("keyup", contarCaracteres);
    tweet.addEventListener("keydown",darEnter);

    for (var i = 0; i <= timeline.children.length -1; i++){
        
        timeline.children[i].addEventListener("click",eliminarTweet);
    }
  
};
