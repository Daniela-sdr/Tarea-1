//SILVIA DANIEA RUIZ (Daniela)
//DNI 20467216

//Numero Mayor entre 2 números

import promptSync from "prompt-sync"

const promptNumMayor = promptSync()

let num1 = promptNumMayor("Ingrese un número: ")
let num2 = promptNumMayor("Ingrese otro número: ")

if (num1 == num2){
    console.log("Ambos números son iguales")
} else if(num1 > num2){
    console.log(num1, "es mayor que", num2)
} else {
    console.log(num2, "es mayor que", num1)
}

