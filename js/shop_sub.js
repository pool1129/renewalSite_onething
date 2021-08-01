// shop_sub review slide
$(document).ready(function(){
    $(".review_section .list").slick({
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        arrows: false,
        verticalSwiping: true
    });
});

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

        const svg = `<img src="img/add_icon.png" alt="이미지보기" class="show">`;

    pic.classList.add('pic');
    img2.classList.add('addImg');

    content.appendChild(pic);
    pic.appendChild(img1);
    pic.appendChild(figure);

    figure.appendChild(img2);

    id.innerHTML = review[k].id;
    con.innerHTML = review[k].con;

    img1.setAttribute('src',review[k].img1);
    img2.setAttribute('src',review[k].img2);

    figure.innerHTML += svg;
};

//shop_sub mainImg scroll
// window.addEventListener('scroll',function(){
//     const y = Math.floor(window.scrollY);
//     const img = document.querySelector('.main_section img');

//     console.log(y);

//     if(y >= 700){
//         img.classList.add('on');
//     }else{
//         img.classList.remove('on');
//     }
// });

//shop_sub capa count

function count(type){
    const resultCount = document.querySelector('.number h4');
    var p = document.querySelector('.main_section .text h3:nth-of-type(2)');
    var price = p.innerHTML;

    var regex = /[^0-9]/g;		
    var result = price.replace(regex, "");	

    let number = resultCount.innerHTML;

    if(type === 'plus'){

        number = parseInt(number) + 1;
        result = parseInt(result) + 6600;

        console.log(result);

    }else if(type === 'minus'){
        if(number == 1){
            alert('최소 수량입니다.')
        }else{
        number = parseInt(number)-1;
        result = parseInt(result) - 6600;
        }
    }
    // let totalPrice = numberFormat(priceOrigin);

    p.innerHTML = numberWithCommas(result);
    resultCount.innerHTML = number;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//with item
const withList = document.querySelector('.with .list');

for(let k=0; k<withItem.length; k++){
    var contents = document.createElement('div'),
        img = document.createElement('img'),
        h4 = document.createElement('h4'),
        p = document.createElement('p');
    
    const svg = `<img src="img/add_icon.png" alt="장바구니추가" class="add">`;

        contents.classList.add('contents');

        withList.appendChild(contents);

        contents.appendChild(img);
        contents.appendChild(h4);
        contents.appendChild(p);

        img.setAttribute('src',withItem[k].img);
        h4.innerHTML = withItem[k].tit;
        p.innerHTML = withItem[k].price;

        contents.innerHTML += svg;
};

//with item add shopcart
const shopCart = document.querySelectorAll('.add');

for(let j=0; j<shopCart.length; j++){
    shopCart[j].addEventListener('click',function(e){

        e.preventDefault;
        alert('해당 상품을 장바구니에 담았습니다.');
    });
}

//review popup
const addImg = document.querySelectorAll('.review_section .content .pic figure .addImg');
const closeBtn = document.querySelector('.closepopup');
const popupMainImg = document.querySelector('.popupphoto > img');
const popupSmall1 = document.querySelector('.popuptext figure img:nth-of-type(1)');
const popupSmall2 = document.querySelector('.popuptext figure img:nth-of-type(2)');


for(let p=0; p<addImg.length; p++){
    addImg[p].addEventListener('click',function(){

        if(window.innerWidth > 460){
            let target = event.target;

            custom_name.innerHTML = review[p].id;
            desc.innerHTML = review[p].con;

            popupMainImg.setAttribute('src',review[p].img2);

            popupSmall1.setAttribute('src',review[p].img2);
            popupSmall2.setAttribute('src',review[p].img1);

            popup.classList.add('active');

            if(event.target.nodeName == 'IMG'){
                photo.src = target.src;
                popup.classList.add('active');
            }

            popupSmall1.addEventListener('click',function(){
                popupMainImg.setAttribute('src',review[p].img2);
            });

            popupSmall2.addEventListener('click',function(){
                popupMainImg.setAttribute('src',review[p].img1);
            });
        }
    });
}

closeBtn.addEventListener('click',function(e){
    e.preventDefault;
    popup.classList.remove('active');
});

popup.addEventListener('click',function(e){
    e.preventDefault;
    if(event.target.classList.contains('popup')){
        popup.classList.remove('active');  
    }
});




