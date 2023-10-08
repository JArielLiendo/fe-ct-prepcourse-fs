/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var array1 = array.map((num) => {
      return num+1
   });
   return array1;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var frase = palabras.join(' ');
   return frase;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
  var incluyeElemento = array.includes(elemento)
  return incluyeElemento;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:

  let i=0;
   var suma=0;
   for (i=0; i < arrayOfNums.length; i++) {
      suma = suma + arrayOfNums[i];
   }
   return suma;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var suma = 0;
   var promedio = 0;
   let i = 0;
   for (i=0; i < resultadosTest.length; i++) {
      suma = suma + resultadosTest[i];
   }
   return suma / resultadosTest.length;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var masGrande = arrayOfNums[0];
   let i = 0;
   for (i=1; i<arrayOfNums.length; i++) {
      if (arrayOfNums[i] > masGrande) {
         masGrande = arrayOfNums[i];
      }
   }
   return masGrande;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:

   var producto=1;
   if (arguments.length === 0){
      return 0;
   } else if (arguments.length === 1){
      return arguments[0];
   } else
      for (var i=0; i<arguments.length; i++){
         producto = producto*arguments[i];
      }
      return producto;
   }
    
   

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var cont = 0;
   let i = 0;
   for (i=0; i<array.length; i++) {
      if (array[i] > 18) {
         cont = cont + 1;
      }
   }
   return cont;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código: 
   switch (numeroDeDia) {
      case 1:
         return "Es fin de semana";
         break;
       case 7:
            return "Es fin de semana";
            break;
       case 2:
         return "Es dia laboral";
         break;
      case 3:
         return "Es dia laboral";
        break;
       case 4:
          return "Es dia laboral";
          break;
      case 5:
          return "Es dia laboral";
         break;
      case 6:
         return "Es dia laboral";
          break;
      default:
         break;

   }
}
function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
var aux = num;
var aux1=0;
if  (aux>0) { 
do {
   aux = aux /10 ;
   aux1=aux;
  aux = Math.floor(aux);
} while (aux > 1);
} else if (num<0) {
   do {
      aux = aux /10 ;
      aux1=aux;
     aux = Math.ceil(aux);
   } while (aux < -1);
   }
    if (aux1 === 0.9 || aux1===-0.9){
      return true;
   } else {
      return false;
   }
   }

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var comparar = array[0];
   var igual = array.every((elementos) => {
      return elementos === comparar;
   })
  return igual;
 }
function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
  /* var indice = 0;
   var nuevoArray = [];
   let i = 0;
   for (i=0; i<array.length; i++) {
      if ((array[i] === "Enero") || (array[i] === "Marzo") || (array[i] === "Noviembre")) {
         nuevoArray[indice] = array[i];
         indice = indice + 1;
      }

   }
   if (nuevoArray.length === 3) {
      return nuevoArray;
   } else {
      return "No se encontraron los meses pedidos";
   }*/
   var indice = 0;
   var nuevoArray = [];
   let i = 0;
   for (i=0; i<array.length; i++) {
      if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
         nuevoArray[indice] = array[i];
         indice = indice + 1;
      }

   }
   if (nuevoArray.length === 3) {
      return nuevoArray;
   } else {
      return "No se encontraron los meses pedidos";
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let i=0;
var tabla = [];
for(i=0; i <= 10; i++) {
    tabla[i] = 6 * i;
}
return tabla;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var mayorACien = [];
   var indice = 0;
   array.forEach((num) => {
      if (num > 100){
         mayorACien[indice] = num;
         indice = indice + 1;
      }
   })
   
   return mayorACien;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var array = [];
   let i = 0;
   for (i=0; i<10; i++){
      num = num +2;
      if (num != i){
         array[i] = num;
      } else if (num === i){
         return "Se interrumpió la ejecución";
         break;
      }
   }
   return array;
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var array = [];
   var indice = 0;
   let i = 0;
   for (i=0; i<10; i++){
      if (i != 5){
         num = num + 2;
         array[indice] = num;
         indice = indice + 1;
      } else if (i === 5){
         continue;
      }
   }
   return array;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
