// index best item slide
$(".best_section .list").slick({
    arrows:false,
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay:true,
    autoplaySpeed:10000,

    responsive: [
        {
        breakpoint: 960,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
        breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});

// shop_sub review
$(document).ready(function(){
    $(".review_section .list").slick({
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        verticalSwiping: true
    });
});

$('.main .container').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000     
    });



