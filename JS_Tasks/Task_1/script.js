
var btn = document.getElementById("rev_btn");

function reverse(num){
    var a = 0;
    while(num!= 0){
        var l = Math.floor(num%10);
        a = a*10 + l;
        num = Math.floor(num/10);;
        // console.log(num);
    }
    return a; 
}


btn.onclick = function(){
    var num = document.getElementById("inputNumber").value;
    // console.log("Num is: " + num);
    rev = reverse(num);
    // console.log("Rev is: " + rev);
    var output = document.getElementById("outputNumber");

    output.value = rev;
    // output.innerHTML = output;
}