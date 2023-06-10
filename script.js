function generateBackground() {
    var color1 = document.getElementById("color1").value;
    var color2 = document.getElementById("color2").value;
    var gradient = "linear-gradient(to right, " + color1 + ", " + color2 + ")";
    var colorPreview = document.getElementById("color-preview");
    var colorCode = document.getElementById("color-code");

    document.body.style.background = gradient;
    colorPreview.style.background = gradient;
    colorCode.textContent = `${gradient}\n${document.body.style.background}`;
}