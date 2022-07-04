const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

$("#extras-1").click(function(){   //id of the link which is being clicked
    $('html, body').animate({
           scrollTop: $("#extras-2").offset().top   //id of div to be scrolled
    }, 1000);
});
