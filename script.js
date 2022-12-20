
var celsius = document.getElementById("celsius");
var fahrenheit = document.getElementById("fahrenheit");
var formule = document.getElementById("formule");
var reponse = document.querySelector("div.reponse");

var celsiusToFarenheit = ()=>{

    if(celsius.value){
        celsius.value = validator(celsius.value)? parseInt(celsius.value) :0;
        fahrenheit.value = celsius.value * 9/5 + 32;
        updateTextarea({celsius: celsius.value, fahrenheit:fahrenheit.value});
        reponse.innerHTML = celsius.value + "°C=>" + fahrenheit.value + "°F";
    }
}


var farenheitTocelsius = ()=>{

    if(fahrenheit.value){
        fahrenheit.value = validator(fahrenheit.value)? parseInt(fahrenheit.value):0;
        celsius.value = (5/9) * (fahrenheit.value  - 32);
        celsius.value = Math.round(celsius.value);
        updateTextarea({celsius: celsius.value, fahrenheit:fahrenheit.value});
        reponse.innerHTML = fahrenheit.value + "°F=>" + celsius.value + "°C";
    }
}
var updateTextarea = (data)=>{
    formule.innerHTML = data.celsius+'°Cx9/5+32='+data.fahrenheit+'°F';
}

var validator = (data) =>{
    return !isNaN(data);
}