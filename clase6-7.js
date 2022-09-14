

    //CLASE 6 ARRAYS

//Declaración de nuestro primer array

// const arrayVacio = []
// console.log(arrayVacio)
// const numeros = [1,2,3,4,5,6,7,8,9]
// console.log(numeros)
// const arrayVarios = ["elemento", 45, false, "Coder", numeros]
// console.log(arrayVarios)

// // //Acceder a elementos del array
// // console.log(numeros[5])
// // console.log(arrayVarios[2])

// // //Recorrer un array
// // for(let i = 0; i < 7; i++){
// //     console.log(numeros[i])
// //     //numeros[0]
// //     //numeros[1]
// // }
// // for(let i = 0; i < 6; i++){
// //     console.log(arrayVarios[i])
// // }

// // //Mismo ciclo recorrido pero con length
// // for(let i = 0; i < numeros.length; i++){
// //     console.log(numeros[i])
// // }
// //Métodos para agregar elementos: push y unshift

// //push agrega elemento al final del array
// arrayVarios.push("Casa")
// console.log(arrayVarios)

// //unshift agrega al prinicipio del array
// arrayVarios.unshift("Departamento")
// console.log(arrayVarios)

// //Métodos para eliminar elementos:

// //Pop elimina el elemento final
// arrayVarios.pop()
// arrayVarios.pop()
// console.log(arrayVarios)
// //shift elimina el elemento del principio
// arrayVarios.shift()
// console.log(arrayVarios)
// //splice elimina según parámetros
// //Dos parámetros, primero posición desde la que va a trabajar. Segundo cuantos va a eliminar
// arrayVarios.splice(0,2)
// console.log(arrayVarios)

// //Otros métodos
// //join nos muestra el array "separado" por el o los carácteres que le pasamos como parámetro
// console.log(numeros.join("-"))
// //Sin parámetro nos pone ","
// console.log(numeros.join())
// //concat une dos array:
// const arrayFusion = numeros.concat(arrayVarios)
// console.log(arrayFusion)
// //slice hace una copia del array según parámetros que le pasamos Segundo parametro no incluye esa posición
// let numerosNuevo = numeros.slice(3, 6)
// console.log(numerosNuevo)


//Clase consturctora 
class Libro {
    constructor(id, autor, titulo, precio){
        //propiedades o atributos de nuestra clase
        this.id = id,
        this.autor = autor,
        this.titulo = titulo,
        this.precio = precio

    }
    //métodos
    mostrarData(){
        console.log(`El titulo es ${this.titulo}, el autor es ${this.autor} y su precio es ${this.precio}`)
    }
}
//Instanciación de objetos -- respetamos orden y cantidad de atributos

const libro1 = new Libro(1,"Jorge Luis Borges","Aleph", 900)

const libro2 = new Libro(2,"Gabriel García Marquez","Cien años de Soledad", 4500)

const libro3 = new Libro(3,"Isabel Allende", "Paula", 2800)

const libro4 = new Libro(4,"Jorge Luis Borges","Ficciones", 1400)

const libro5 = new Libro(5,"Mario Benedetti", "Andamios", 2200)

const libro6 = new Libro(6,"Mario Vargas Llosa", "La ciudad y los perros", 2000)

const numeros = [1,2,3,4,5,6,7,8,9]
//Quiero crear array estanteria 
//Dos formas inicializar el array:
const biblioteca = [libro1, libro2, libro3, libro4, libro5]
console.log(biblioteca)
//Segunda forma
const estanteria= []
estanteria.push(libro1, libro2, libro3, libro4, libro5, libro6)
console.log(estanteria)
//FOR OF RECORRER ARRAYS
for(let libro of estanteria){
    //parametro va a ser CADA objeto del array
    // console.log(libro.titulo)
    // console.log(libro.autor)
    libro.mostrarData()
    
}

//tarea hacerlo con un ciclo con i

//REPASO CLASE 5 for IN -- PARA RECORRER UN OBJETO INTERNAMENTE
for(let propiedad in libro2){
    console.log(libro2[propiedad])
}

//CLASE 7 FUNCIONES DE ORDEN SUPERIOR y MÉTODOS AVANZADOS:

// //Funciones de orden superior
// //retorna una function

// function mayorQue(n){
//     return (m) => m > n
// }


// let mayorQueDiez = mayorQue(10)
// // mayorQueDiez = (m => m > 10)
// console.log(mayorQueDiez(5))
// console.log(mayorQueDiez(25))
// console.log(mayorQueDiez(10))
// //otro ejemplo
// let mayorQueSeis = mayorQue(6)
// // mayorQueSeis = (m => m > 6)
// console.log(mayorQueSeis(5))
// console.log(mayorQueSeis(25))
// console.log(mayorQueSeis(10))

// //Function que reciben un parámetro:
// function porCadaUno(array, func){
//     for(let elem of array){
//         func(elem)
//     }
// }
// porCadaUno(estanteria, console.log)
// // porCadaUno(numeros, alert)

// let total = 0
// function acumular(num){
//     total+=num
// }
// porCadaUno(numeros, acumular)
// console.log(total)

//RESUMEN UNA FUNCTION PUEDE RETORNAR O RECIBIR COMO PARÁMETRO OTRA FUNCTION

//MÉTODO FOREACH: recorrer todo un array elemento a elemento!
numeros.forEach((parametro)=>{
    //Ejecuta instrucciones deseadas
    console.log(parametro*2)
})
//Funciones:

//FUnction mostrarCatalogo() hecha con el método forEach
function mostrarCatalogo(array){
    alert("En la consola puede ver nuestro catálogo")
    console.log("Disfrute de nuestro catálogo:")
    array.forEach((libro)=>{
        libro.mostrarData()
    })
}

//Function que consulte al usuario opción deseada
function preguntarOpcion(){
    let opcion = parseInt(prompt(`Ingrese el número de la opción que desea realizar:
                        1 - Ver catálogo de libros
                        2 - Agregar un libro a nuestro catálogo 
                        3 - Eliminar un libro de nuestro catálogo 
                        4 - Encontrar por titulo:
                        5 - Buscar libros de un mismo autor:
                        0 - Para salir
                        `))
    menu(opcion)
}

//Function que ofrezca un menú
function menu(opcionSeleccionada){
    switch(opcionSeleccionada){
        case 0:
            salir = true
            alert(`Gracias por visitarnos, vuelva pronto :D`)
        break    
        case 1:
            mostrarCatalogo(estanteria)

      	break 
   	    case 2: 
            
      	break 
   	    case 3: 
            
      	break
        case 4: 
      	 
      	break
        case 5: 
      	 
      	break 
   	    default: 
      	alert(`Ingrese una opción correcta`)
    }
}

//CÓDIGO:
let salir 
while(salir != true){
    preguntarOpcion()
    
}
