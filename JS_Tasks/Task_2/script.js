function order(string) {
    return string.split('').sort().join('');
};

btn.onclick = function(){

    var string = document.getElementById("inputText").value;
    // console.log("string is: " + string);
    var alphabetical = order(string);
    // console.log("alpha is: " + alphabetical);
    var output = document.getElementById("outputText");
    output.value = alphabetical;
}