function calculate() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var output = document.getElementById("output");

    if (height == "") {
        output.innerHTML = "Please enter a height!";
    } else if (weight == "") {
        output.innerHTML = "Please enter a weight!";
    } else {
        var bmi = weight / ((height / 100) * (height / 100));

        if (bmi < 18) {
            output.innerHTML = bmi.toFixed(2) + " (Weak)";
        } else if (bmi > 18.5 && bmi < 24.9) {
            output.innerHTML = bmi.toFixed(2) + " (Healthy)";
        } else if (bmi >= 25 && bmi < 29.9) {
            output.innerHTML = bmi.toFixed(2) + " (Fat)";
        } else if (bmi > 30 && bmi < 39.9) {
            output.innerHTML = bmi.toFixed(2) + " (Obese)";
        } else if (bmi > 40) {
            output.innerHTML = bmi.toFixed(2) + " (Extremely Obese)";
        }
    }
}

document.getElementById("height").addEventListener("input", calculate);
document.getElementById("weight").addEventListener("input", calculate);