"use strict";

let num1;
let num2;

document.getElementById("btnsoma").addEventListener("click", funcSomar);
document.getElementById("btnsub").addEventListener("click", funcSubtrair);
document.getElementById("btnmult").addEventListener("click", funcMultiplicar);
document.getElementById("btndiv").addEventListener("click", funcDividir);

let lerNumero = () =>{
    num1 = Number(document.getElementById("txtnum1").value);
    num2 = Number(document.getElementById("txtnum2").value);
}

function funcSomar (){
    lerNumero();
    document.getElementById("txtresult").value = num1 + num2;
}

function funcSubtrair (){
    lerNumero();
    document.getElementById("txtresult").value = num1 - num2;
}

function funcMultiplicar (){
    lerNumero();
    document.getElementById("txtresult").value = num1 * num2;
}

function funcDividir (){
    lerNumero();
    document.getElementById("txtresult").value = (num1 / num2).toFixed(2);
}

