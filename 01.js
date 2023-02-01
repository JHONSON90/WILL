/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function soloNumeros(array) {
  // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
  // Debe devolver un arreglo con solo los enteros.
  // Ej: 
  // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]

  // Tu código aca:

 /* var newArray = [];

  for (let i = 0; i < array.length; i++) {
  if(array[i] === 0 || array[i] === 1 || array[i] === 2 ){
    return newArray.push(array[i]);
  }
  
  } return newArray*/

  var newArray = array.filter(x => x === 0 ||x=== 1 || x===2|| x===3)
   return newArray

  //var numerosFiltrados = array.filter(x => x === Number(x))
  //return numerosFiltrados

}

// No modifiques nada debajo de esta linea //


module.exports = soloNumeros  