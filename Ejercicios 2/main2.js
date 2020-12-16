// Mostrar la cantidad de alambre a comprar si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.

var largo = parseInt(prompt('Ingresar el largo del terreno, por favor'));
var ancho =parseInt(prompt('Ingrese el ancho del terreno, por favor'));

console.log('El largo del terreno es: ' + largo);
console.log('El ancho del terreno es: ' + ancho);


document.write('El largo del terreno es: ' + largo + '<br>');
document.write('El ancho del terreno es: ' + ancho + '<br>');

cantidadAlambre = (largo*2) + (ancho*2);

alambreTotal = cantidadAlambre * 3;

alert('El alambre total es: ' + alambreTotal);
console.log('El alambre total es: ' + alambreTotal);

document.write('A) El total del alambre a comprar incluyendo los 3 hilos: '+ alambreTotal + '<br>' + '<hr>');


// Mostrar la cantidad de alambre a comprar si se ingresara el radio de un terreno circular y se debe alambra con tres hilos de alambre.

var radioTerreno = parseInt(prompt('Ingresar el radio del terreno circular, por favor'));
const pi = 3.1416

document.write('El radio del terreno circular es: ' + radioTerreno + '<br>');

var totalCirculo =  2 * pi * radioTerreno;
var totalAlambre = totalCirculo * 3;
alert('El total de alambre  a comprar con el radio ingresado es: '+  totalAlambre);
document.write('B) El total de alambre a comprar con el radio ingresado es: ' + totalAlambre + '<hr>');

// Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.

var largoContrapiso = parseInt(prompt('Ingrese las medidas del largo del contrapiso, por favor'))
var anchoContrapiso = parseInt(prompt('Ingrese las medidas del ancho del contrapiso, por favor'))

alert('El largo del contrapiso es: ' + largoContrapiso + ' y el ancho es: ' + anchoContrapiso);

document.write('El largo del contrapiso es: ' + largoContrapiso + '<br>' + ' y el ancho es: ' + anchoContrapiso + '<br>'  );

var totalMedidasContrapiso = largoContrapiso * anchoContrapiso;
var totalCemento = totalMedidasContrapiso * 2;
var totalCal = totalMedidasContrapiso * 3;

alert('Para hacer el contrapiso va a necesitar: ' + totalCemento + ' bolsas de cemento y ' + totalCal + ' bolsas de cal')

document.write('C) Para hacer el contrapiso va a necesitar: ' + totalCemento + ' bolsas de cemento y ' + totalCal + ' bolsas de cal')

