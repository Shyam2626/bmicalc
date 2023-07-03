let weight = document.getElementById("kglbs");
let input1 = document.getElementById("weight");

let height = document.getElementById("mcm");
let input2 = document.getElementById("height");

let bmi = 0;

document.getElementById("btn").addEventListener('click', function () {

    let selected_weight = input1.value;
    let selected_height = input2.value;

    var bg = document.getElementById("container");
    bg.style.background = "url(bg.png)";
    bg.style.backgroundRepeat="no-repeat";
    bg.style.backgroundSize="contain";
    bg.style.backgroundPosition="center";


    if (selected_weight == "Pounds") {
        weight.value = weight.value * 0.454;
    }
    if (selected_height == "Centimetres") {
        height.value = height.value / 100;
        // console.log(height.value);
    }
    else if (selected_height == "Feet") {
        height.value = height.value * 0.3048;
    }
    // console.log(weight.value);
    
    let wt = weight.value;
    let ht = height.value;
    bmi = wt / (ht * ht);
    let show = document.getElementById("show");

    if (bmi < 19) {
        show.innerHTML = "<h1> Your BMI is " + bmi.toFixed(2) + " Underweight </h1>";
        show.style.backgroundColor = "rgba(0, 255, 255, 0.402)";
        show.style.border = "1px solid aqua";
    }
    else if (bmi >= 19 && bmi < 25) {
        show.innerHTML = "<h1> Your BMI is " + bmi.toFixed(2) + " Optimum range </h1>";
        show.style.backgroundColor = "#D2FBA4";
        show.style.border = "1px solid #1D741B";
    }
    else if (bmi >= 25 && bmi < 30) {
        show.innerHTML = "<h1> Your BMI is " + bmi.toFixed(2) + " Overweight </h1>";
        show.style.backgroundColor = "#FBE698";
        show.style.border = "1px solid #FFFF00";
    }
    else if (bmi >= 30 && bmi < 35) {
        show.innerHTML = "<h1> Your BMI is " + bmi.toFixed(2) + " Class 1 Obesity </h1>";
        show.style.backgroundColor = "#FF4500";
        show.style.border = "1px solid #E87A00";
    }
    else if (bmi >= 35 && bmi < 40) {
        show.innerHTML = "<h1> Your BMI is " + bmi.toFixed(2) + " Class 2 Obesity </h1>";
        show.style.backgroundColor = "##FF4500";
        show.style.border = "1px solid #E87A00";
    }
    else {
        show.innerHTML = "<h1> Your BMI is " + bmi.toFixed(2) + " Class 3 Obesity </h1>";
        show.style.backgroundColor = "#FB475E";
        show.style.border = "1px solid #F51720";
    }

    weight.value = '';
    height.value = '';
    input1.value = '';
    input2.value = '';
});
