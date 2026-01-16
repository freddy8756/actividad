function mostrarAlerta(){
    alert("hola bienvenido");
    
}
function suma(){
let valor1= 5 ;
let valor2 = 10;
let resultado = valor1 +valor2;
console.info("el resultado es:"+resultado);
}
function sumaparam(valor1, valor2){
    console.info("el valor 1:"+valor1);
    console.info("el valor 2:"+valor2);
}
function sumaimputs(){
    let valr1 =document.getElementById("valo1").value;
    let valr2 =document.getElementById("valo2").value;
    let res =parseFloat(valr1)+parseFloat(valr2);
    console.info("El resultado de la suma es:"+res);
    if(res>10){
        document.getElementById("mens").value="numero mayor a 10";
    }else{
        document.getElementById("mens").value="numero menor a 10";
    }
}