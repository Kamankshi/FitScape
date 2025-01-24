let weightSlider = document.getElementById("myWeight");
let weightOutput = document.getElementById("inputWeight");

let heightSlider = document.getElementById("myHeight");
let heightOutput = document.getElementById("inputHeight");

weightOutput.innerHTML = weightSlider.value;
heightOutput.innerHTML = heightSlider.value;

weightSlider.oninput = function () {
  weightOutput.innerHTML = this.value;
}
heightSlider.oninput = function () {
  heightOutput.innerHTML = this.value;
}

function showValWeight(newVal) {
  weightSlider.value = newVal;
};

function showValHeight(newVal) {
  heightSlider.value = newVal;
};

weightSlider.addEventListener("input", updateValueWeight);
heightSlider.addEventListener("input", updateValueHeight);
function updateValueWeight(e) {
  weightOutput.value = e.srcElement.value;
}
function updateValueHeight(e) {
  heightOutput.value = e.srcElement.value;
}

function calculateBmi() {
  let weight = document.bmiForm.realweight.value;
  let height = (document.bmiForm.realheight.value) / 100;
  let realbmi = (weight) / Math.pow(height, 2);
  let realbmiOutput = document.getElementById("yourbmi");
  let messageOutput = document.getElementById("evaluationMessage");
  let roundedBmi = realbmi.toFixed(1);
  
  realbmiOutput.innerHTML = " " + roundedBmi;
  messageOutput.innerHTML = "";

  // Set the message based on BMI
  if (roundedBmi < 18.5) {
    messageOutput.innerHTML = "<br>You're underweight, focus on a balanced, nutrient-rich diet to reach a healthier BMI.";
} else if (roundedBmi >= 18.5 && roundedBmi <= 24.9) {
    messageOutput.innerHTML = "<br>Your BMI is in the normal range, keep up the great work with balanced diet and exercise!";
} else if (roundedBmi >= 25 && roundedBmi <= 29.9) {
    messageOutput.innerHTML = "<br>You're in the overweight range. Increasing physical activity can help manage weight.";
} else if (roundedBmi >= 30 && roundedBmi <= 34.9) {
    messageOutput.innerHTML = "<br>This is considered obese. Regular exercise and mindful eating can improve your health.";
} else if (roundedBmi >= 35) {
    messageOutput.innerHTML = "<br>Your BMI is in the severely obese range. Consult a health professional for personalized advice.";
}

}