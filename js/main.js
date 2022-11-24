           
      
     
            //Petición de datos al usuario (sexo, altura, peso)
            
            
  

           
            
            
            //Función para calcular el índice de masa corporal (IMC)
            function CalcularIMC(sexo, altura, peso) 
            {
              //La función Math.roud sirve para redondear valores
              altura = Math.round(altura) / 100;
              peso = Math.round(peso);
              //La función Math.pow sirve para calcular potencias
              let indice = (peso / Math.pow(altura, 2));
              let resultado = "";
              //Sexo, si es "m" mujer y si es "h" hombre
              switch (sexo)
              {
                case "m":
                  if (indice < 20)
                  {
                    resultado = "Peso inferior al normal.";
                  }
                  else if (indice >= 20 && indice < 24)
                  {
                    resultado = "Peso Normal.";
                  }
                  else if (indice >= 24 && indice < 29)
                  {
                    resultado = "Peso superior al normal.";
                  }
                  else
                  {
                    resultado = "Obesidad.";
                  }  
                  break
                case "h":
                  if (indice < 21)
                  {
                    resultado = "Peso inferior al normal.";
                  }
                  else if (indice >= 21 && indice < 25)
                  {
                    resultado = "Peso Normal.";
                  }
                  else if (indice >= 25 && indice < 30)
                  {
                    resultado = "Peso superior al normal.";
                  }
                  else
                  {
                    resultado = "Obesidad.";
                  }		   
                  break
                default:
                  resultado = "No se ha podido calcular. No ha indicado h (hombre) o m (mujer).";
              }
              //Con toFixed reduciremos a 2 el número de decimales a mostrar
              return "Su IMC es: " + indice.toFixed(2) + " y su clasificación es: " + resultado;
            }
       
            //Función para mostrar el resultado por pantalla
            function MostrarResultadoIMC (sexo, altura, peso, indice)
            {
              let mensaje = "Usted mide " + altura / 100 + " metros y pesa " + peso + " Kg. \n \n " + indice;
              alert (mensaje);
            }	
       
            //Llamamos a las funciones anteriores para el cálculo y para mostrar los resultados
            let resultado = CalcularIMC(sexo, altura, peso);
            MostrarResultadoIMC(sexo, altura, peso, resultado);  
          
            //--------------------------------------------------------------------------------

            //funcion para ver la totalidad del array
            function busqueda (str){
                resultadosIMG.forEach (resultadoIMG =>{
                  console.log (`${resultadoIMG.id} ${resultadoIMG.frase} ${resultadoIMG.foto}`);
                });
            }
            busqueda (resultadosIMG)

            // metodo find para saber si un elemento esta o no en el objeto del array
            resultadosIMG.find((elemento , indice , array)=>{
                console.log (elemento)
                console.log (indice)
                console.log (array)
            })


            // metodo de filter para ver si hay parametros dentro del objeto para
            const filtrado = resultadosIMG.filter (leyenda => leyenda.frase == ("Obesidad."))
            console.log (filtrado)

            //-----------------------------APLICACION DE DOM EN CARD DE BOOSTRAP--------------------------------------------------------

            let card = document.getElementById ("nuevocontenido")
            card.classList.add ("card")
            

            let img = document.createElement ("img")
            img.src = "https://media.revistagq.com/photos/62d548092a93146f28bd2102/1:1/w_1600%2Cc_limit/GettyImages-1131209118%2520(2).jpg"
            
            let cardBody = document.createElement ("div")
            cardBody.className = "card-body"

            let h5 = document.createElement ("h5")
            h5.textContent = "Subtitulo"
            let p = document.createElement ("p")
            p.textContent = "Texto Descriptivo"
            let a = document.createElement ("a")
            a.textContent = "Ver mas"
            a.href = "https://www.dietascormillot.com/formulario_alianzas.asp?alianza=2081&descripcion=G&gclid=CjwKCAiApvebBhAvEiwAe7mHSAbN4a9WqIJJzYBTr71hGTarV2obw3eGG03KQQH5rRvRVRt0JMrkTRoCIrgQAvD_BwE"

            cardBody.appendChild (h5)
            cardBody.appendChild (p)
            cardBody.appendChild (a)

            card.appendChild (img)
            card.appendChild (cardBody)

            //-------------------------- APLICAR EVENTOS------------------------

            //Agregar clase a un elemento --Switch Color Mode
            const colorModeButton = document.querySelector ("#color-mode");
            const body = document.body;

            colorModeButton.addEventListener ("click", cambiarModoColor);

            //Funcion para cambiar de un modo a otro
            function cambiarModoColor (){
              body.classList.toggle("darkMode")

              if(body.classList.contains ("darkMode")){
                colorModeButton.innerText = "Ligth Mode"
              }else{
                colorModeButton.innerText = "Dark Mode"
              }
              
            }
            //---------------------DOM------------------------------


        
           

            

            


            
            
