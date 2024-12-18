/*
Título: Sistema Avanzado de Calificación y Registro de Estudiantes
Imagina que eres parte de un equipo de desarrollo creando un sistema de calificación para una universidad.
Tienes un arreglo de objetos donde cada objeto representa a un estudiante (10 estudiantes) con su nombre y las calificaciones
obtenidas en varios exámenes. Tu tarea es realizar lo siguiente:
Agregar nuevas calificaciones a los estudiantes.
Clasificación por calificación: Al clasificar a los estudiantes, si su promedio es:
Mayor o igual a 16, clasificar como "Excelente".
Mayor o igual a 12 pero menor a 16, clasificar como "Bueno".
Mayor o igual a 8 pero menor a 12, clasificar como "Aprobado".
Menor a 8, clasificar como "Reprobado".
Cálculos estadísticos:
Calcular el promedio de cada estudiante.
Determinar el máximo y mínimo de las calificaciones de cada estudiante.
Encontrar el estudiante con el peor promedio.
Encontrar el estudiante con el mejor promedio.
Imprimir los resultados:
Mostrar las calificaciones, clasificaciones y estadísticas de los estudiantes.
Nota: Utilizar únicamente las sentencias vistas en clases
*/

let mejorEstudiante = null;
let peorEstudiante = null;
let mejorPromedio = 0;
let peorPromedio = 1000;


estudiantes=[
    {nombre: "Maria",
        calificacion:[14,13,20,15,20]
    },
    {nombre: "Juan",
        calificacion:[12,15,18,16,13]
    },
    {nombre: "Pedro",
        calificacion:[10,13,12,15,18]
    },
    {nombre: "Ana",
        calificacion:[0,14,5,10,19]
    },
    {nombre: "Luis",
        calificacion:[12,11,0,0,0]
    },
    {nombre: "Sofia",
        calificacion:[11,19,15,16,12]
    },
    {nombre: "Pablo",
        calificacion:[10,12,13,14,15]
    },
    {nombre: "Elena",
        calificacion:[14,13,16,11,12]
    },
    {nombre: "Andres",
        calificacion:[10,12,11,15,18]
    },
    {nombre: "Laura",
        calificacion:[12,15,16,10,13]
    }
    ]


    for (var estudiante of estudiantes){
        console.log(estudiante.nombre+' ['+ estudiante.calificacion+']')
    }
    for(var estudiante of estudiantes){
        let minimo = estudiante.calificacion.reduce((acumulador, num) => (num<acumulador?num:acumulador));
        let maximo = estudiante.calificacion.reduce((acumulador, num) => (num>acumulador?num:acumulador));
        let sumatoria = estudiante.calificacion.reduce((acumulador, num) => acumulador + num);
        let promedio = sumatoria / estudiante.calificacion.length;

        if (promedio > mejorPromedio) {
            mejorPromedio = promedio;
            mejorEstudiante = estudiante.nombre;
        }
        if (promedio < peorPromedio) {
            peorPromedio = promedio;
            peorEstudiante = estudiante.nombre;
        }


        console.log("---------------------------------------------")
        if (promedio >= 16 ) {
            console.log(estudiante.nombre + ":");
            console.log("Calificacion: Excelente");
            console.log("Promedio " + promedio);
            console.log("Calificacion más alta " + maximo);
            console.log("Calificacion mínima " + minimo);
        } else if (promedio <= 16 && promedio >= 12 ) {
            console.log(estudiante.nombre + ":");
            console.log("Calificacion: Bueno");
            console.log("Promedio " + promedio);
            console.log("Calificacion más alta " + maximo);
            console.log("Calificacion mínima " + minimo);
        } else if (promedio <= 12 && promedio >= 8) {
            console.log(estudiante.nombre + ":");
            console.log("Calificacion: Aprobado");
            console.log("Promedio " + promedio);
            console.log("Calificacion más alta " + maximo);
            console.log("Calificacion mínima " + minimo);
        } else {
            console.log(estudiante.nombre + ":");
            console.log("Calificacion: Reprobado");
            console.log("Promedio " + promedio);
            console.log("Calificacion más alta " + maximo);
            console.log("Calificacion mínima " + minimo);
        }    
    
    }

console.log("=============================================");
console.log("Mejor promedio "+mejorEstudiante + " con un promedio de " + mejorPromedio);
console.log("=============================================");
console.log("Peor promedio "+peorEstudiante + " con un promedio de " + peorPromedio);

