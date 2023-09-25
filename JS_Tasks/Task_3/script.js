btnMultiply.onclick = function(){
    var num1 = document.getElementById("inputNum1").value;
    var num2 = document.getElementById("inputNum2").value;
    console.log(num1);
    console.log(num2);
    console.log(num1*num2);
    document.getElementById("ans").innerHTML = num1*num2;
}

btnDivide.onclick = function(){
    var num1 = document.getElementById("inputNum1").value;
    var num2 = document.getElementById("inputNum2").value;
    console.log(num1);
    console.log(num2);
    console.log(num1*num2);
    document.getElementById("ans").innerHTML = (num1/num2).toFixed(3);
}


