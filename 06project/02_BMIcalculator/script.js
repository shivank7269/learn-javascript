const button = document.querySelector("button");
let result = 0;

button.addEventListener("click", function () {
    event.preventDefault();
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    height = height / 100;
    result = weight / (height * height); 

    const res = document.getElementById("results");
    res.innerText = `Your BMI ratio is ${result.toFixed(2)}`;
});