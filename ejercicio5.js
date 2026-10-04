//SILVIA DANIEA RUIZ (Daniela)
//DNI 20467216

//Clasificación de edad

import promptSync from "prompt-sync"

const promptNota = promptSync()

let nota = promptNota("Ingrese su calificación (entre 0 y 100): ")

if (nota >= 90 && nota <= 100){
    console.log("Su calificación es: A")     
} else if(nota >= 80 && nota < 90){
    console.log("Su calificación es: B")
} else if(nota >= 70 && nota < 80){
    console.log("Su calificación es: C")
} else if(nota >= 60 && nota < 70){
    console.log("Su calificación es: D")
} else if (nota >= 0 && nota < 60){
    console.log("Su calificación es: F")
} else {
    console.log("Calificación errónea")
}
