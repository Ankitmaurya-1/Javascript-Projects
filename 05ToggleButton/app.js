const btnContainer = document.querySelector(".container");
const body = document.querySelector("body");
const btn = document.querySelector("#btn");

let mode = true;
btn.addEventListener("click", () => {
    if (mode) {
        body.style.backgroundColor = "black";
        btn.style.backgroundColor = "white";
        btn.innerHTML = "ON Light Mode";
        btn.style.color = "black";
    } else {
        body.style.backgroundColor = "white";
        btn.style.backgroundColor = "black";
        btn.innerHTML = "OFF Dark Mode";
        btn.style.color = "white";
    }

    mode = !mode; // Toggle the mode
    console.log(mode);
});
