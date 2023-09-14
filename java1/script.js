var heightInput = document.querySelector(".height-input-field");
var weightInput = document.querySelector(".weight-input-field");
var calculateButton = document.querySelector(".calculate1");
var Luas, height, weight;

function myFunction1(){
    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight/(height**2);
    alert("idealnya adalah :" + BMI);
}

var panjangInput = document.querySelector(".panjang-input-field");
var lebarInput = document.querySelector(".lebar-input-field");
var calculateButton = document.querySelector(".calculate2");
var Luas, panjang, lebar;

function myFunction2(){
    panjang = panjangInput.value;
    lebar = lebarInput.value;
    Luas = panjang*lebar;
    alert("Luasnya adalah :" + Luas);
}

var alasInput = document.querySelector(".alas-input-field");
var tinggiInput = document.querySelector(".tinggi-input-field");
var calculateButton = document.querySelector(".calculate3");
var Luas, alas, tinggi;

function myFunction3(){
    alas = alasInput.value;
    tinggi = tinggiInput.value;
    Luas = alas*tinggi/2;
    alert("luasnya adalah :" + Luas);
}
