/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   var array = [];

   for(prop in objeto){
      array.push([prop, objeto[prop]]);
   };
   
   //var array = Object.entries(objeto);
   return array;

}



function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   const objeto = {};

   string = string.split("").sort().join("");

   for (let i=0; i<string.length; i++){
      objeto[string[i]] = objeto[string[i]] + 1 || 1;
   }

   /*for(let i=0; i<string.length; i++){

      if(objeto.hasOwnProperty(string[i])){
         objeto[string[i]] = objeto[string[i]] + 1;
      } else {
         objeto[string[i]] = 1;
      }
   };*/
   return objeto;
   

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   var ordenado = "";
   var may = "";
   var min = "";

   for(i=0; i<string.length; i++){
      if(string[i] === string[i].toUpperCase()){
         may = may + string[i];
      } else {
         min = min + string[i];
      };
   };

   ordenado = may + min;
   return ordenado;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   frase = frase.split(" ");
   var memoria = "";
   var fraseOrdenada = "";

   fraseOrdenada = frase.map((elem)=>{
      return elem.split('').reverse().join('');
   })
   return fraseOrdenada.join(' ');

  /* for (let i=0; i<frase.length; i++){
      memoria = "";
      for(let j=(frase[i].length)-1; j>=0; j--){
        memoria = memoria + frase[i][j];
      };
      if (i===0){
         fraseOrdenada = memoria ;
      } else {
         fraseOrdenada = fraseOrdenada + " " + memoria ;
      };
   };
   return fraseOrdenada;*/

}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numString = numero.toString();
   var numInvertido = numString.split('').reverse().join('');

   

   if(numString === numInvertido){
      return "Es capicua";
   } else {
      return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   string = string.split("");
   var nuevoString = "";

   function filtro (elem){
      if((elem != 'a') && (elem!='b') && (elem!='c')){
        nuevoString= nuevoString + elem;
      };
   };

   /*string.map((elem)=>{
      if((elem != 'a') && (elem!='b') & (elem!='c')){
        return nuevoString= nuevoString + elem;
       };
   });*/

   string.map((elem)=>{
      filtro(elem);
   });
return nuevoString;

}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   var aux = '';
   var cont = 0;
   
function ordenado(array)  {
   for(i=0; i<array.length-1; i++){
      cont++;
      
   for(j=0; j<array.length-cont; j++){

      if((array[j].length) > (array[j+1].length)){
         
         aux = array[j+1];
         array[j+1] = array[j];
         array[j] = aux;

      };
   };  
};
return array;
};

return ordenado(arrayOfStrings);

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arrelos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   var nuevoArray = [];

   function coincidencia (elem1, elem2){
      for(let i=0; i<elem1.length; i++){
         
         for(let j=0; j<elem2.length; j++){
            if(elem1[i]===elem2[j]){
             
               
               nuevoArray.push(elem1[i]);
            };
         };
         
      };
       return nuevoArray;
   };
   
   return coincidencia(array1, array2);
   
   

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
