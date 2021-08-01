$(function(){
    
    $('header').load('inc.html header > div' , function(){
       // .header .menu 
        let hash = location.hash;
        const hMenu = document.querySelectorAll('.header .menu a'),
              hMenu2 = document.querySelectorAll('.header .nav_menu a');

        let pageIdx = 0;
        switch(hash){
            case '#about' : pageIdx =0; break;
            case '#custom' : pageIdx =1; break;
            case '#shop' : pageIdx =2; break;
            case '#notice' : pageIdx =3; break;
            }

        hMenu[pageIdx].className = 'active';
        hMenu2[pageIdx].className = 'active'; 

        // mobile
        $(".ham").click(function(){
            $(this).toggleClass("active");
            $('.nav_menu').toggleClass('on');
          });

        document.addEventListener('DOMContentLoaded', function(){
            document.querySelector(".mobile-menu").addEventListener("click", function(e){
                if ( document.querySelector('.menuwrap').classList.contains('on') ){
                    //메뉴닫힘
                    document.querySelector('.menuwrap').classList.remove('on');
                    document.querySelector('.mobile-menu i').classList.remove('fa-times')
                    document.querySelector('.mobile-menu i').classList.add('fa-bars');
                } else {
                    //메뉴펼침
                    document.querySelector('.menuwrap').classList.add('on');
                    document.querySelector('.mobile-menu i').classList.remove('fa-bars');
                    document.querySelector('.mobile-menu i').classList.add('fa-times');
                }
            });
        });

        //shopping_count
        if(localStorage.favoriteNum == null){
            favorite = [];
        }else{
            favorite = localStorage.favoriteNum.split(',');

            const set = new Set(favorite);
            const favoriteArr = [...set];

            countHeart = favoriteArr.length;

        const shop = document.querySelector('.icon a:nth-of-type(3) span');
        console.log(shop.innerHTML);

        shop.innerHTML = countHeart;
        }

        //search_icon
        const searchIcon = document.querySelector('.header .search');
        const input = document.querySelector('.header input');
        const slider = document.querySelector('.slide_search');
        const header = document.querySelector('header');

        searchIcon.addEventListener('click',function(){

            if(window.innerWidth > 960){
                slider.classList.toggle('active');
                header.classList.toggle('active');
            }else{
                input.classList.toggle('active');
            }
        });

        const closeSearch = document.querySelector('.slide_search .text .closepopup');
        closeSearch.addEventListener('click',function(){
            slider.classList.remove('active');
            header.classList.remove('active');
        });


        //heart_icon
        const heartIcon = document.querySelector('.header .icon .shopping');

        heartIcon.addEventListener('click',function(){
            const span = document.querySelector('.header .icon a:nth-of-type(3) span');
            const heart = document.querySelector('.header .icon .shopping path');

            span.classList.toggle('active');
            heart.classList.toggle('active');
        });

    });
    $('footer').load('inc.html footer > div',function(){

    });
});

const countLi = document.querySelectorAll('.nav ul li');

for(let i=0; i<countLi.length; i++){
    countLi[i].addEventListener('click',function(e){
        e.preventDefault();
        for(let j=0; j<countLi.length; j++){
            countLi[j].classList.remove('active');
        }
        countLi[i].classList.add('active');
    });
}

//mouse effect
const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

document.addEventListener("mousemove", (e) => {
    // cursor.style.left="e.pageX"
    // cursor.style.top="e.pageY"

    gsap.to(cursor,{duration:0.3, left: e.pageX -5, top: e.pageY -5});
    gsap.to(follower,{duration:0.8, left: e.pageX -15, top: e.pageY -15});
});

