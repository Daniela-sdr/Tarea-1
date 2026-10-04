//SILVIA DANIEA RUIZ (Daniela)
//DNI 20467216

//Clasificación de edad

import promptSync from "prompt-sync"

const promptEdad = promptSync()

let edad = promptEdad("Ingrese su edad: ")

if (edad > 0 && edad < 12){
    console.log("Usted es un niño, tiene", edad,"años")
} else if(edad >= 12 && edad < 18){
    console.log("Usted es un adolescente, tiene", edad, "años")
} else if(edad >= 18 && edad < 65){
    console.log("Usted es un adulto, tiene", edad, "años")
} else {
    console.log("Usted es un adulto mayor, tiene", edad, "años")
}
    
