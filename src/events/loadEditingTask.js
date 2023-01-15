

let buttonEl = document.querySelector("button");

buttonEl.addEventListener("click", () => {
    console.log(localStorage.getItem("taskId"));
    localStorage.clear();
})

