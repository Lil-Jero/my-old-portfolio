////////////////////////////////////////////////////////////////////////
// Code pour le menu, on scroll à la position choisi lors du click

$("#section_1").click(function() {
    $('html, body').animate({
        scrollTop: $("#section1").offset().top - 66
    }, 1000);
    return false;
});

$("#section_2").click(function() {
    $('html, body').animate({
        scrollTop: $("#section2").offset().top - 112
    }, 1000);
    return false;
});

$("#section_3").click(function() {
    $(' html,body').animate({
        scrollTop: $("#section3").offset().top - 112
    }, 1000);
    return false;
});

$("#section_4").click(function() {
    $('html,body ').animate({
        scrollTop: $("#section4").offset().top - 112
    }, 1000);
    return false;
});

////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////


var id_elemg = "";


//fonction qui récupère l'id onclick de l'item correspondant 
function cuming(clicked_id) {
    var id_elem = clicked_id;
    id_elemg = id_elem;
}


//foncion qui trigger lors du click sur l'item POUR ouvrir le bon modal avec l'aide de la fonction précédente
$(document).ready(function() {

    var bonid = "";
    $('.trigger').on('click', function() {
        cuming(id_elemg);
        //alert(id_elemg);

        if (id_elemg == 'item1') {
            bonid = 'item1m';
        }

        if (id_elemg == 'item2') {
            bonid = 'item2m';
        }

        if (id_elemg == 'item3') {
            bonid = 'item3m';
        }

        if (id_elemg == 'item4') {
            bonid = 'item4m';
        }

        if (id_elemg == 'item5') {
            bonid = 'item5m';
        }

        if (id_elemg == 'item6') {
            bonid = 'item6m';
        }
        if (id_elemg == 'item7') {
            bonid = 'item7m';
        }
        if (id_elemg == 'item8') {
            bonid = 'item8m';
        }
        if (id_elemg == 'item9') {
            bonid = 'item9m';
        }
        if (id_elemg == 'item10') {
            bonid = 'item10m';
        }
        if (id_elemg == 'item11') {
            bonid = 'item11m';
        }
        if (id_elemg == 'item12') {
            bonid = 'item12m';
        }

        $('#' + bonid).toggleClass('open');
        $('.page-wrapper').toggleClass('blur-it');
        var delayInMilliseconds = 150; //1 second
        setTimeout(function() {
            $('body').toggleClass('stop-scrolling');
        }, delayInMilliseconds);
        return false;
    });
});

////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
// Fonction pour le bouton voir plus du portfolio

function showmore() {

    var showmoreid = document.getElementById('part2_img4id');
    $(showmoreid).toggleClass('hidden');
    //$(showmoreid).toggleClass('part2_img3');

    var button_text = document.getElementById('button_show').innerHTML;

    if (button_text == "En voir plus") {
        button_text = "En voir moins";

    } else {
        button_text = "En voir plus";


    };

    $('#button_show').text(button_text);


}


////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////
// Lors de la première connexion au site, pour check ou pas le toggle button dark mode

var body1 = document.getElementById('body');
var style1 = window.getComputedStyle(body1);
var ouais1 = style1.getPropertyValue('background-color');

if (ouais1 !== "rgb(230, 230, 245)") {
    document.querySelector('.checkbox').checked = true;
    var w1 = document.getElementsByClassName("nigg")[0].id;
    var az1 = document.getElementById(w1);
    az1.setAttribute('src', 'img/home_blue.png');
    document.getElementById("img_moon").src = "img/night-mode_white.png";
    document.getElementById("img_sun").src = "img/sun_grey.png";
}

////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////
// Maintenant qu'on c'est connecté au moins une fois et qu'on a choisis son mode, on regarde le cache de l'utilisateur

const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const flavicon = document.getElementById("iconrel")

const toDark = () =>
{
    flavicon.setAttribute("href", "img/j2.png")
}

const toLight = () =>
{
    flavicon.setAttribute("href", "img/j.png")
}

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    document.body.classList.toggle("dark-theme");
    document.querySelector('.checkbox').checked = true;
    var w = document.getElementsByClassName("nigg")[0].id;
    var az = document.getElementById(w);
    az.setAttribute('src', 'img/home_blue.png');


    //changement d'image lors du toggle darkmode
    document.getElementById("img_moon").src = "img/night-mode_white.png";
    document.getElementById("img_sun").src = "img/sun_grey.png";

    toDark()

} else if (currentTheme == "light") {
    document.body.classList.toggle("light-theme");
    document.querySelector('.checkbox').checked = false;
    var w = document.getElementsByClassName("nigg")[0].id;
    var az = document.getElementById(w);
    az.setAttribute('src', 'img/home.png');

    //changement d'image lors du toggle darkmode
    document.getElementById("img_sun").src = "img/sun_white.png";
    document.getElementById("img_moon").src = "img/night-mode_grey.png";

    toLight()




}

////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
// Function lors du toggle du bouton 

document.querySelector('.checkbox').addEventListener('change', function() {
    if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
        var theme = document.body.classList.contains("light-theme") ?
            "light" :
            "dark";
    } else {
        document.body.classList.toggle("dark-theme");
        var theme = document.body.classList.contains("dark-theme") ?
            "dark" :
            "light";
    }
    localStorage.setItem("theme", theme);

    if (theme == "dark") {
        var a = document.getElementsByClassName("nigg")[0].id;
        var abz = document.getElementById(a);
        abz.setAttribute('src', 'img/home_blue.png');

        //var ty = document.getElementsByClassName("fas fa-moon");
        //var tu = document.getElementById(ty);
        //ty.setAttribute('src', 'img/night-mode_grey.png');

        //changement d'image lors du toggle darkmode
        document.getElementById("img_moon").src = "img/night-mode_white.png";
        document.getElementById("img_sun").src = "img/sun_grey.png";


    } else if (theme == "light") {
        var w = document.getElementsByClassName("nigg")[0].id;
        var az = document.getElementById(w);
        az.setAttribute('src', 'img/home.png');

        //changement d'image lors du toggle darkmode
        document.getElementById("img_sun").src = "img/sun_white.png";
        document.getElementById("img_moon").src = "img/night-mode_grey.png";
    }
});

////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
//fonction pour changer l'image en hover correspondant au bon mode ( dark or light )
function hover(element) {

    var body = document.getElementById('body');
    var style = window.getComputedStyle(body);
    var ouais = style.getPropertyValue('background-color');

    var elem = element.id;
    filename2 = elem.split("_")[1] - 1;
    var x = document.getElementsByClassName("nigg")[filename2].id;
    var z = document.getElementById(x);
    var src = $(z).attr('src');
    filename = src.substring(src.lastIndexOf('/') + 1);
    var first = filename.split("_")[0];

    if (ouais !== "rgb(230, 230, 245)") {
        z.setAttribute('src', 'img/' + first + '_white.png');
    } else {
        z.setAttribute('src', 'img/' + first + '.png');
    }
}

////////////////////////////////////////////////////////////////////////
//fonction pour changer l'image en UNhover correspondant au bon mode ( dark or light )
function unhover(element) {



    var body = document.getElementById('body');
    var style = window.getComputedStyle(body);
    var ouais = style.getPropertyValue('background-color');


    var elem = element.id;
    filename2 = elem.split("_")[1] - 1;
    var x = document.getElementsByClassName("nigg")[filename2].id;
    var z = document.getElementById(x);
    var src = $(z).attr('src');
    filename = src.substring(src.lastIndexOf('/') + 1);

    if (ouais !== "rgb(230, 230, 245)") {
        var first = filename.split("_")[0];
        z.setAttribute('src', 'img/' + first + '_grey.png');
    } else {
        var first = filename.split(".")[0];
        z.setAttribute('src', 'img/' + first + '_grey.png');
    }

}

////////////////////////////////////////////////////////////////////////



function openImg(){
    var image = document.getElementById('image');
    var source = image.src;
    window.open(source);
}