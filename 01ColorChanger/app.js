const btns = document.querySelectorAll(".button");
const body = document.querySelector("body");

btns.forEach((btn) => {

    btn.addEventListener("click", (e) => {
        // or it can don using If ELSE CONDITIONS 
        body.style.backgroundColor = e.target.id;
    });
});