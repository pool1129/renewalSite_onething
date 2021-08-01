//best item
const list = document.querySelector('.list');

function init(){
    for(let i=0; i<bestSeller.length; i++){
        var content = document.createElement('div');
        var figure = document.createElement('figure');
        var img = document.createElement('img');
        var h4= document.createElement('h4');
        var p = document.createElement('p');
        var button = document.createElement('button');

        var heart = document.createElement('div');
        // const heartColor = `<img src="img/heart_Color.png" alt="" class="heart active">`;

        content.classList.add('contents');
        button.classList.add('look');
        heart.classList.add('heart');

        list.appendChild(content);

        content.appendChild(figure);

        figure.appendChild(heart);
        figure.appendChild(img);

        content.appendChild(h4);
        content.appendChild(p);
        content.appendChild(button);

        h4.innerHTML = bestSeller[i].tit;
        p.innerHTML = bestSeller[i].price;
        button.innerHTML = '자세히보기';
        img.setAttribute('src',bestSeller[i].img); 
    }
}

init();

//heart click Color
const heart = document.querySelectorAll('.heart');

for(let j=0; j<bestSeller.length; j++){
    heart[j].addEventListener('click',function(){
        heart[j].classList.toggle('active');
    });
}

//메인 slick 슬라이더
$('.index.main .container').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000     
});

//베스트 아이템 slick 슬라이더
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


//메인 페이지 스크롤 이벤트
function isElementUnderBottom(elem, triggerDiff) {
    const { top } = elem.getBoundingClientRect();
    const { innerHeight } = window;
    return top > innerHeight + (triggerDiff || 0);
}

function handleScroll() {
const elems = document.querySelectorAll('.ele');
elems.forEach(elem => {
    if (isElementUnderBottom(elem, -50)) {
    elem.style.opacity = "0";
    elem.style.transform = 'translateY(70px)';
    } else {
    elem.style.opacity = "1";
    elem.style.transform = 'translateY(0px)';
    }
})
}

window.addEventListener('scroll', handleScroll);


