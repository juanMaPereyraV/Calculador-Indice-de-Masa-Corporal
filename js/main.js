           
      
      //Petición de datos al usuario (sexo, altura, peso)
       let sexo = prompt("Indique su sexo, una 'h' para hombre o una 'm' para mujer:", "");
       let altura = Number(prompt("Indique su altura en centímetros:", ""));
      let peso = Number(prompt("Indique su pespeso en kilógramos:", ""));
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
            



        
           

            

            


            
            