//########### TIPO DE VARIABLE
// const para constantes
const pi=3.1416;
const pul = 2.54;
//var para variables globales
var cant_days = 10;
var name      = "Gerardo Durán";
//let para variables de bloques o locales
let count = 5;
let i      = 0;

//########### FORMAS DE IMPRESION O SALIDA EN PANTALLA
// alert
// alert (name);
// console
console.log(cant_days);
console.log("10");
// body - pantalla
document.write(name);
document.getElementById("text_one").innerHTML = "<h1>Gerardo Duran</h1>"
document.getElementById("text_two").innerText = "<h1>Gerardo Duran</h1>"
// librerias
Swal.fire({
    icon: 'success',
    title: 'Gerardo Duran',
    text: 'Estudiante',
    footer: name
})

//############# TIPO DE DATOS
// numericos
let number_one = 10;
let number_two = 5.5;
// string
let text = "Soy un texto";
// booleanos
let boolean = true; //false
// array
let array_num = [1,2,3,4,5,6];
let array_text = ["Lunes","Martes","Miercoles","Jueves","Viernes"];
let array_mix = [1.5, "a", 10, "b"];
let array_mul = [
    {name: "Gerardo",last_name:"Duran" ,age:18},
    {name: "Juan",last_name: "Duran" ,age:16},
    {name: "Felix",last_name: "Mascarita" ,age:2},
    {name: "Lolo",last_name: "Perez" ,age:1}
];

//########## OPERADORES BASICOS
// suma +
var suma = number_one + number_two;
console.log("Suma = " + suma);
// resta -
var resta = number_one - number_two;
console.log("Resta = " + resta);
// multiplicacion *
var multi = number_one * number_two;
console.log("Multiplicacion = " + multi);
// divi = divi.toFixed(2) 
var divi = number_one / number_two;
console.log("Division = " + divi.toFixed(2));
// modulo %
var modulo = number_one % number_two;
console.log("Modul = " + modulo);

console.log(
"Suma = " + suma + "\n" +
"Resta = " + resta + "\n" +
"Multiplicacion = " + multi + "\n" +
"Division = " + divi.toFixed(2) + "\n" +
"Modul = " + modulo + "\n"
);

var respuesta = Suma = " + suma + "<br>" + "resta = " + resta + "<br>"  + "multiplicacion = " + multi + "<br>"  + "division = " + divi.toFixed(2) + "<br>"  + "modulo = " + modulo + "<br>"

Swal.fire({
    icon: 'success',
    title: 'Gerardo Duran',
    text: 'Respuesta',
    background: '#fff'
});