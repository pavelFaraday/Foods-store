//  Header - Nav Toggle ---- დააკოპირე ეს კოდი და გამოიყენე css-ის და html-კოდთან ერთად -->

$(document).ready(function () {

    $('.menu').on('click', function(){       
        $(this).toggleClass('active');
        $('.overlay').toggleClass('menu-open');
    });


    $(".nav a").on('click', function () {
        $('.menu').removeClass('active');
        $('.overlay').removeClass('menu-open');

    });
});

//  Header - Nav Toggle ---- დააკოპირე ეს კოდი და გამოიყენე css-ის და html-კოდთან ერთად 