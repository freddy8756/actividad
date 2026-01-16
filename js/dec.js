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

function uno(){
    return 1;
}
function dos(){
    return 2;
}
function tres(){
    return 3;
}
function cuatro(){
    return 4;
}
function cinco(){
    return 5;
}
function seis(){
    return 6;
}
function siete(){
    return 7;
}
function ocho(){
    return 8;
}
function nueve(){
    return 9;
}
function suma(uno(), dos()){
    let suma = uno()+dos();
    console.info("El resultado de la suma es:"+suma);
    
}
function resta(){
    let valor1 = 1;
}
function multiplicacion(){
    let valor1 = 1;
}
function divicion(){
    let valor1 = 1;
}