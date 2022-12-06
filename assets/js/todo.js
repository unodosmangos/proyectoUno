$('.carruselPromo').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});



function cambiarImg(imgHtmlCambio, valorOption) {
    let imgenCarta = document.getElementById(imgHtmlCambio)
    imgenCarta.src = valorOption
}