
//Crear clases:
class Persona {
    constructor(nombre, email, peso, altura) {
      this.nombre = nombre;
      this.email = email;
      this.peso = peso;
      this.altura = altura;
    }
  
    calcularIMC() {
      let resultado = (this.peso / (this.altura * this.altura)) * 10000;
      return resultado.toFixed(2);
    }
  }
  
  //Creamos un array de objetos.
  
  const personas = [];
  
  // Crear las variables necesarias:
  
  const idFormulario = document.getElementById('formulario');
  
  idFormulario.addEventListener('submit', (e) => {
    e.preventDefault();
    //Evitamos que se recargue la página.
  
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    //Creamos el objeto persona
    const persona = new Persona(nombre, email, peso, altura);
    //Agregamos los datos en el Array:
    personas.push(persona);
  
    //Guardamos los datos en el Storage:
    localStorage.setItem('Persona', JSON.stringify(personas));
  
    //Limpiamos el formulario
    idFormulario.reset();
  
    mostrarInfo(persona);
  });
  
  //Crearmos la función Mostrar Info:
  
  const resultado = document.getElementById('infoUsuarios');
  
  const mostrarInfo = (persona) => {
    let aux = '';
    aux += `<p class="resultado"> ${persona.nombre} tu IMC es el siguiente: </p>
            <p class="resultado"> IMC: ${persona.calcularIMC()} podes ver en la tabla de abajo a que grado corresponde tu resultado</p>`;
    resultado.innerHTML = aux;
  };


  //-----------------------------------METODOS DE ARRAY--------------------------------------------------

            //funcion para ver la totalidad del array
            function busqueda (str){
                resultadosIMG.forEach (resultadoIMG =>{
                  //console.log (`${resultadoIMG.id} ${resultadoIMG.frase} ${resultadoIMG.foto}`);
                });
            }
            busqueda (resultadosIMG)

            // metodo find para saber si un elemento esta o no en el objeto del array
            resultadosIMG.find((elemento , indice , array)=>{
                //console.log (elemento)
                //console.log (indice)
                //console.log (array)
            })


            // metodo de filter para ver si hay parametros dentro del objeto para
            const filtrado = resultadosIMG.filter (leyenda => leyenda.frase == ("Obesidad."))
            //console.log (filtrado)

    //-------------------------- APLICAR EVENTOS---------------------------------------------------------

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

            


            
            
