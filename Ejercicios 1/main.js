// ejercicio 1) A
// Ingresar tres precios de productos y mostrar la suma de los mismos.

var precioProducto1 = parseInt(prompt('Ingrese el precio del primer producto'));
var precioProducto2 = parseInt(prompt('Ingrese el precio del segundo producto'));
var precioProducto3 = parseInt(prompt('Ingrese el precio del tercer producto'));

var suma = precioProducto1 + precioProducto2 + precioProducto3;

alert('El total de la suma es: ' + suma );

document.write('Ejercicio 1) A → La suma de los precios de los tres productos es: ' + suma + '<br>') ;



//  ejercicio 1) B
// Ingresar tres precios de productos y mostrar el promedio de los mismos.

var promedio =  suma / 3;
alert('El total del promedio: ' + promedio );

document.write('Ejercicio 1) B → El promedio del precio de los tres productos es: ' + promedio +'<br>' );



// ejercicio 1) C. ingresar tres precios de productos y mostrar precio final (más IVA 21%).

var precioFinalConIva = suma * 1.21;
alert('El total iva: ' +  precioFinalConIva );

document.write('Ejercicio 1) B → El precio final de los tres productos con IVA incluido es: ' + precioFinalConIva +'<br>' );

