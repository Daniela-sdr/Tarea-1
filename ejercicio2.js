//SILVIA DANIEA RUIZ (Daniela)
//DNI 20467216

//Determinar Tipo de Triánguo

import promptSync from "prompt-sync"

const promptTriangulo = promptSync()

let lado1 = promptTriangulo("Ingrese valor de lado 1: ")
let lado2 = promptTriangulo("Ingrese valor de lado 2: ")
let lado3 = promptTriangulo("Ingrese valor de lado 3: ")

if (lado1 == lado2 && lado2 == lado3){
    console.log("El triángulo es Equilétero")
} else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
    console.log("El triángulo es Isósceles")
}else {
    console.log("El triángulo es Escaleno")
}