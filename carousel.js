window.onload = codeAddress;

function codeAddress() {
    var myCarousel = document.getElementById('carouselExampleIndicators');
    
    // Mettre à jour la légende en fonction de la slide active
    function updateLegend() {
        // Récupérer l'index de la slide active
        var activeSlide = myCarousel.querySelector('.carousel-item.active');
        var slideIndex = Array.from(myCarousel.getElementsByClassName('carousel-item')).indexOf(activeSlide);
        
        // Mettre à jour le texte de légende
        document.getElementById('légende_carousel').innerHTML = document.getElementById('text_cola_' + slideIndex).innerHTML;
    }

    // Mettre à jour la légende au chargement de la page
    updateLegend();

    // Mettre à jour la légende lors du changement de slide
    myCarousel.addEventListener('slide.bs.carousel', function (e) {
        // Afficher le texte lié à l'index de la slide
        document.getElementById('légende_carousel').innerHTML = document.getElementById('text_cola_' + e.to).innerHTML;
    });
}



/*window.onload = codeAddress;

function codeAddress() {
    var myCarousel = document.getElementById('carouselExampleIndicators')

    myCarousel.addEventListener('slide.bs.carousel', function (e) {
        console.log(e.to)
        document.getElementById('légende_carousel').innerHTML=document.getElementById('text_cola_'+e.to).innerHTML
    })
}*/




