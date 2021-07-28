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

        // nav_icon
        const navIcon = document.querySelector('.nav_icon'),
        navMenu = document.querySelector('.nav_menu');

        navIcon.addEventListener('click', function(){
        navIcon.classList.toggle('active');
        navMenu.classList.toggle('active');
        });

        //shopping_count
        if(localStorage.favoriteNum == null){
            favorite = [];
        }else{
            favorite = localStorage.favoriteNum.split(',');

            const set = new Set(favorite);
            const favoriteArr = [...set];

            // console.log(favoriteArr);

            // console.log(favoriteArr.length);

            countHeart = favoriteArr.length;

        const shop = document.querySelector('.icon a:nth-of-type(3) span');
        console.log(shop.innerHTML);

        shop.innerHTML = countHeart;
        }

        //search_icon
        const searchIcon = document.querySelector('.header .search');

        searchIcon.addEventListener('click',function(){
            const input = document.querySelector('.header input');

            input.classList.toggle('active');
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
    $('footer').load('inc.html footer > div');
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

//shop_sub star-fill 채우기
const star = document.querySelectorAll('.star span');
const starEvent = document.querySelectorAll('.material-icons');

for(let j=0; j<star.length; j++){

    star[j].addEventListener('mousemove',function(){

            starEvent[j].classList.add('fillIcon');
    });

}

//shop_sub review
const revList = document.querySelector('.review_section .list');

// console.log(review[1]);

for(let k=0; k<review.length; k++){
    var text = document.createElement('div'),
        id = document.createElement('p'),
        con = document.createElement('span'),
        content = document.createElement('div');

    text.classList.add('text');
    content.classList.add('content');
    id.classList.add('id');

    revList.appendChild(content);

    content.appendChild(text);
    text.appendChild(id);
    text.appendChild(con);

    var pic = document.createElement('div'),
        img1 = document.createElement('img'),
        figure = document.createElement('figure'),
        img2 = document.createElement('img');

    const svg = `<svg  xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"> 
                    <path  data-name="패스 10" d="M0,0H40V40H0Z" fill="none"/>
                    <path  data-name="패스 11" d="M21.048,10.658H17.585v6.927H10.658v3.463h6.927v6.927h3.463V21.048h6.927V17.585H21.048ZM19.317,2A17.317,17.317,0,1,0,36.633,19.317,17.323,17.323,0,0,0,19.317,2Zm0,31.17A13.853,13.853,0,1,1,33.17,19.317,13.872,13.872,0,0,1,19.317,33.17Z" transform="translate(0.683 0.683)" fill="#6A6A6A"/>
                </svg>`

    pic.classList.add('pic');

    content.appendChild(pic);
    pic.appendChild(img1);
    pic.appendChild(figure);

    figure.appendChild(img2);
    img2.innerHTML = svg;

    id.innerHTML = review[k].id;
    con.innerHTML = review[k].con;

    img1.setAttribute('src',review[k].img1);
    img2.setAttribute('src',review[k].img2);
};

//shop_sub mainImg scroll
window.addEventListener('scroll',function(){
    const y = Math.floor(window.scrollY);
    const img = document.querySelector('.main_section img');

    // console.log(y);

    if(y >= 730){
        img.classList.add('on');
    }else{
        img.classList.remove('on');
    }
});

//shop_sub capa count
function count(type){
    const resultCount = document.querySelector('.number h4');

    let number = resultCount.innerHTML;

    if(type === 'plus'){
        number = parseInt(number) + 1;
    }else if(type === 'minus'){
        if(number == 1){
            alert('최소 수량입니다.')
        }else{
        number = parseInt(number)-1;
        }
    }

    resultCount.innerHTML = number;

}

