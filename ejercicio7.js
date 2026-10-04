//SILVIA DANIEA RUIZ (Daniela)
//DNI 20467216

//Número mayor entre 3 números

import promptSync from "prompt-sync"

const promptNumMayor = promptSync()
let num1 = promptNumMayor("ingrese un número: ")
let num2 = promptNumMayor("ingrese otro número: ")
let num3 = promptNumMayor("ingrese uno más: ")

if (num1 == num2 && num2 == num3){
    console.log("Los tres números son iguales")
} else if (num1 > num2 && num1 > num3){
    console.log(num1,"es mayor que",num2, "y que", num3)
} else if (num2 > num1 && num2 > num3){
    console.log(num2,"es mayor que", num1, "y que", num3)
} else {
    console.log(num3,"es mayor que",num1, "y que", num2)
}