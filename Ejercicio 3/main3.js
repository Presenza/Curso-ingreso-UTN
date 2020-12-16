// Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").

var ingresarFahrenheit = parseInt(prompt('Ingresar la temperatura en Fahrenheit, por favor '  ));
alert('La temperatura fahrenheit que ingresó es: ' + ingresarFahrenheit);

document.write('A) La temperatura Fahrenheit ingresada es: ' + ingresarFahrenheit + '<br>');

var centigrados = (ingresarFahrenheit - 32) * (5/9);

alert(ingresarFahrenheit+'°' + 'Fahrenheit son →  ' + centigrados+ ' centigrados');

document.write(ingresarFahrenheit+'° ' + 'Fahrenheit son →  ' + centigrados + ' centigrados'+ '<br>'+ '<hr>');

// Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0 centígrados son 32 Fahrenheit ").

var ingresarCentigrados = parseInt(prompt('Ingresar la temperata en Centigrados, por favor '));
alert('B) La temperatura ingresada en Centigrados es: ' + ingresarCentigrados);
document.write('La temperatura en centigrados es: ' + ingresarCentigrados + '<br>');

var fahrenteit = ((ingresarCentigrados / 5) * 9 ) + 32;
alert(ingresarCentigrados + ' centigrados son: ' + fahrenteit + ' fahrenheit');
document.write(ingresarCentigrados + ' centigrados son: ' + fahrenteit + ' fahrenheit')

