//SILVIA DANIEA RUIZ (Daniela)
//DNI 20467216

//Clasificación de Números Enteros

import promptSync from "prompt-sync"

const promptNum = promptSync()

let numIngresado = promptNum("Ingrese un número entero: ")

if (Number(numIngresado) > 0){
    console.log("El número", numIngresado, "es Positivo")
}else if(Number(numIngresado) < 0){
    console.log("El número", numIngresado, "es Negativo")
}else {
    console.log("El número", numIngresado, "es el Cero")
}