document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener("dragstart", function (event) {
        dragged = event.target;
        event.target.style.opacity = .2;
    });

    document.addEventListener("dragend", function (event) {
        event.target.style.opacity = "";
    });

    document.addEventListener("dragenter", function (event) {
        if (event.target.className === "placeholder") {
            event.target.style.background = "purple";
        }
    });

    document.addEventListener("dragover", function (event) {
        event.preventDefault();
    });


    document.addEventListener("dragleave", function (event) {
        if (event.target.className === "placeholder") {
            event.target.style.background = "";
        }
    });

    document.addEventListener("drop", function (event) {
        event.preventDefault();
        if (event.target.className === "placeholder") {
            event.target.style.background = "";
            event.target.appendChild(dragged);
        }
    });
})
