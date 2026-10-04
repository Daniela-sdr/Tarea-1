//SILVIA DANIEA RUIZ (Daniela)
//DNI 20467216

//Clasificación de edad

import promptSync from "prompt-sync"

const promptParOImpar = promptSync()

let numIngresado = promptParOImpar("Ingrese un número entero: ")

let resto = numIngresado % 2

if (resto == 0){
    console.log("El número", numIngresado, "es par")
} else {
    console.log("El número", numIngresado, "es impar")
}

