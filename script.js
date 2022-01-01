function button_clickOn() {

    var image = document.getElementById("image-background");
    var res = document.getElementById("resultado");

    if (image.style.display === 'none') {
        res.innerHTML = "<img src='img/lampada-acesa.png' >"
    } else {
        console.log('[ERRO]')
    };
};

function button_clickOf() {

    var image = document.getElementById("image-background");
    var res = document.getElementById("resultado");

    if (image.style.display === 'none') {
        res.innerHTML = "<img src='img/lampada-apagada.png' >"
    } else {
        console.log('[ERRO]')
    };
};