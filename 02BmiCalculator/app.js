const form = document.querySelector("form");

form.addEventListener("submit", (e) => {

    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    if (height == "" || height <= 0 || isNaN(height)) {
        results.innerHTML = "Please give a valid height";
    } else if (weight == "" || weight <= 0 || isNaN(weight)) {
        results.innerHTML = "Please give a valid wieght";
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `${bmi}`;
        if (bmi < 18.6) {
            results.innerHTML = `${bmi} </br> You are Under Weight`;
        } else if ((bmi) >= 18.5 || (bmi) <= 24.9) {
            results.innerHTML = `${bmi} </br> You are in Normal Range`;
        } else {
            results.innerHTML = `${bmi} </br> You are Overweight`;
        }
    }


});