var slideIndex = 1;

showImage(slideIndex);

function showImage(n) {
    var slide = document.getElementsByClassName('slides');
    var dots = document.getElementsByClassName('dots');

    if (n > slide.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slide.length;
    }

    for (var i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none';
    }

    slide[slideIndex - 1].style.display = 'block';

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace('active', '');
    }

    dots[slideIndex - 1].className += ' active';

}

function plusIndex(n) {
    showImage(slideIndex += n);
}

function currentSlide(n) {
    showImage(slideIndex = n);
}



function openslidemenue() {
    let openSlide = document.getElementById("side-menue");
    let openSlide1 = document.getElementById("main");

    openSlide.style.width = "200px";
    openSlide1.style.marginRight = "200px";
}

function closeslidemenu() {
    document.getElementById("side-menue").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}


$(document).ready(function () {
    // var minDate = new Date();
    $("#Arrival").datepicker({
        showAnim: 'drop',
        numberOfMonth: 1,
        // minDate: minDate,
        dateFormat: 'dd/mm/yy',
        onClose: function (selectedDate) {
            $("#Departure").datepicker("option", "minDate", selectedDate);
        }
    });

    $("#Departure").datepicker({
        showAnim: 'drop',
        numberOfMonth: 1,
        //minDate: minDate,
        dateFormat: 'dd/mm/yy',
        onClose: function (selectedDate) {
            $("#Arrival").datepicker("option", "minDate", selectedDate);
        }
    });

});
