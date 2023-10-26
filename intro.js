let miNombre= "Felipe";
let miApellido= "Garces";
let miEdad= 25;
let miMascota= "Michael";
let edadMascota= 7;

let nombreCompleto= miNombre +" "+ miApellido;
let textoPresentacion= miNombre+miApellido+miEdad+miMascota+edadMascota;

let sumaEdades= miEdad+edadMascota;
let restaEdades= miEdad-edadMascota;
let productoEdades= miEdad*edadMascota;
let divisionEdades= miEdad/edadMascota

let alumno= {
    nombre: "Diana",
    apellido: "Lopez",
    edad: 20,
    estatura: 172,
    aprobado: true
}

let mascota= {
    animal: "Perro",
    nombre: "Michael",
    raza: "Samoyedo",
    color: "Blanco",
    años: 7
}

console.log(miNombre)
console.log(miApellido)
console.log(miEdad)
console.log(miMascota)
console.log(edadMascota)

console.table(alumno)
console.log(alumno.nombre)
console.log(alumno.apellido)
console.log(alumno.edad)
console.log(alumno.estatura)
console.log(alumno.aprobado)

console.table(mascota)
console.log(mascota.animal)
console.log(mascota.nombre)
console.log(mascota.raza)
console.log(mascota.color)
console.log(mascota.años)

const frutas= ["Manzana","Pera","Banano", "Mango","Guanabana"]
console.log(frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

edadIngresada= prompt("Ingresa tu edad: ")
soyMayorDeEdad= edadIngresada >= 18;
console.log("Soy mayor de edad: "+soyMayorDeEdad)

const numeros=[16,25,31,40,58]
console.log(numeros)
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

const familia=["papa","mama","hermano","hermana","abuela"]
console.log(familia)
console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])

textoAleatorio= frutas[1]+" "+numeros[3]+" "+familia[4]

edadUno = prompt("Ingrese edad numero 1: ")
edadDos = prompt("Ingrese edad numero 2: ")
edadesIguales= edadUno==edadDos;
soyMayor= edadUno>edadDos;
soyMenos= edadUno<edadDos;

nuevaEdad= prompt("Ingrese su edad: ")
nuevaAltura= prompt("Ingrese su altura en cm: ")
mayorEdad=nuevaEdad>6
mayorAltura=nuevaAltura>120
puedeSubir=mayorEdad&&nuevaAltura

pase= prompt("Que tipo de pase tienes: ")
saldo= prompt("Cuanto saldo tienes: ")
paseRes= pase=="vip";
saldoRes= saldo>1000;
puedePasar= paseRes||saldoRes;
console.log("La persona puede pasar"+" "+puedePasar)