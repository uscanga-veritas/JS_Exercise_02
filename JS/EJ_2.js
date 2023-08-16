function EJ_1() {
    var numerosAleatorios = [];

    for (var i = 0; i < 10; i++) {
      var numero = Math.floor(Math.random() * 100) + 1; // Genera un número entre 1 y 100
      numerosAleatorios.push(numero);
    }

    console.log("Array de números aleatorios:", numerosAleatorios);
}

function EJ_2() {
    var inputString = prompt("Ingresa una lista de números separados por coma:");
    var arrayString = inputString.split(",").map(Number);

    console.log("Array convertido:", arrayString);
}

function EJ_3() {
    var arrayNumeros = [10, 40, 30, 20, 15, 5];

    var arrayOrdenado = arrayNumeros.slice().sort(function(a, b) {
      return a - b;
    });

    var numeroMenor = arrayOrdenado[0];
    var numeroMayor = arrayOrdenado[arrayOrdenado.length - 1];

    console.log("Arreglo ordenado:", arrayOrdenado);
    console.log("Número menor:", numeroMenor);
    console.log("Número mayor:", numeroMayor);
}