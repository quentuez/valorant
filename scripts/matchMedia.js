function changeDisplay(className, style) {
    let elements = document.querySelectorAll(className);

    for (let i = 1; i < elements.length; i++) {
        elements[i].style.display = style;
    }
}

window.addEventListener("resize", function () {
    if (window.innerWidth < 1440) {
        changeDisplay(".main__agent", "none");
        console.log("1");
    } else {
        changeDisplay(".main__agent", "inline");
        console.log("2");
    }
});