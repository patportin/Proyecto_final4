//nonprotect
//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1; // 10%
var edad_25 = 0.2;// 20%
var edad_50 = 0.3;// 30%

var casado_18 = 0.1;// 10%
var casado_25 = 0.2;// 20%
var casado_50 = 0.3;// 30%

var hijos_recargo = 0.2;// 20%


//Recargo
var recargo = 0
var recargo_total = 0

//Precio final 
var precio_final = 0

var opcion = ""

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
var casado = prompt("¿Está casado actualmente?", "si/no")

while(opcion!="salir"){
//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
}
//convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0
//convirtiendo la edad del cónyuge si se esta casado/a
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}
var hijos = prompt("¿Tiene hijos o hijas?", "si/no")
//Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_hijos
if("SI" == hijos.toUpperCase()){
cantidad_hijos = prompt("¿Cuantos hijos o hijas tiene?")
} 
var cantidad_hijos_numero = parseInt(cantidad_hijos)

//Calculo de los recargos y el valor final
//Recargo por edad del asegurado 
if(edad_numero>=18 && edad_numero<25){
    recargo = precio_base * edad_18
   recargo_total = recargo_total + recargo
 } else if (edad_numero>=25 && edad_numero<50){
   recargo = precio_base * edad_25
   recargo_total = recargo_total + recargo
 }else{
   recargo = precio_base * edad_50
   recargo_total = recargo_total + recargo
 }
//Calculo del recargo por conyuge
if(edad_conyuge_numero>=18 && edad_conyuge_numero<25){
 recargo = precio_base * casado_18
 recargo_total = recargo_total + recargo
}  else if (edad_conyuge_numero>24 && edad_conyuge_numero<50){
  recargo = precio_base * casado_25
  recargo_total = recargo_total + recargo
} else{
  recargo = precio_base * casado_50
  recargo_total = recargo_total + recargo
}
//Calculo del recargo por cantidad de hijos
if (parseInt(cantidad_hijos_numero>=1)){
   recargo = precio_base * hijos_recargo
  recargo_total = recargo_total + recargo
}
  opcion=prompt("desea ingregar otra informacion?")
}

precio_final = precio_base + recargo_total
//Resultado
alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+recargo_total)
alert ("El precio sera de: "+precio_final)

