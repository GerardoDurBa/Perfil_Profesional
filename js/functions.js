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
let array_text = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
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

//############ OPERADORES LOGICOS Y ESTRUCTURAS CONDICIONALES (inverse, increment)
//AND && con if
var bool = false;
var numeric =5;
if(!bool == true){
    console.log("ingresa if: " + bool);
}
else{
    console.log("ingresa else: " + bool);
}

// OR || con if

var age = 31;
if(age == 31 || numeric == "5"){
    console.log("ingresa if: " + bool);
    age++;
}
else{
    console.log("ingresa else: " + bool);
    age--;
}


//FOR
console.log(array_text.length)
for(let i = 0; i < 7; i++){
    console.log(array_text[i] + (i+1));
}

//WHILE

let j = 0;
while(j<array_text.length){
    console.log(array_text[j] + (j+1));
    j++;
}

//DO WHILE

let w = 0;
do{
    console.log(array_text[w] + (w+1));
    w++;
}while(w<array_text.length)


//CREAR FUNCIONES

function load_page(){
    alert("BIENVENIDO A MI SITIO WEB")
}

var color = "#fff";
function change_color(){
    document.body.style.backgroundColor = "red";
    document.body.style.color = color;
}

const btn_clear = document.querySelector("#limpiar");
btn_clear.addEventListener("click", () =>{
    document.body.style.backgroundColor = "white";
    document.body.style.color = "#000";
})

//FORMULARIO DE REGISTRO

const form_register = document.getElementById("form_register");
const nombres       = document.getElementById("nombres ");
const apellidos     = document.getElementById("apellidos");
const validation    = document.getElementById("validation");

form_register.addEventListener("submit", event_name =>{
    event_name.preventDefault();
    let info = "";
    if(nombres <= 2 || apellidos <= 2){
        info += "Nombres y/o apellidos deben ser mayores a 2 letras"
        validation.style.color = "red";
    }
    else{
        alert(nombres + " " + apellidos);
        nombres.style.backgroundColor = "green";
        apellidos.style.backgroundColor = "green";
    }
})

function load_page(){
    document.getElementById("nombres").focus();
    document.getElementById("apellidos").disabled = true;
    let date = new Date();
    console.log(date);

    for (let a=0;a<=array_mul.length;a++){
        console.log(array_mul[a].name);
    }
}

function validate(){
    // alert("FUNCIONA");
    var nombres = document.getElementById("nombres").value;
    console.log(nombres.length);
    if (nombres.length > 2){
        document.getElementById("apellidos").disabled = false;
        document.getElementById("apellidos").focus();
        alert(nombres.split(""));
    }

}

function limpiar(){
    let nombres = document.getElementById("nombres").value; 
}