
//shop json script
function init(){
    console.log('hi');
    
    let xhr,res;
    let inTitSub, inTit, inDec;
    let img, tit, price, origin;
    const list = document.querySelector('.list');
    const menuLi = document.querySelectorAll('.menu li');
    
    xhr = new XMLHttpRequest();
    xhr.open('get','js/data_shop.json');
    xhr.send(null);
    xhr.onload = function(){
        res = JSON.parse(xhr.responseText);
        
        console.log(res.work.intro);
        
        const intro = document.querySelector('.intro_text'),
              menu = document.querySelectorAll('.text_section .menu li');
        
        inTitSub = `<p>${res.work.intro[0].tit_sub}</p>`;
        inTit=`<h3>${res.work.intro[0].tit}</h3>`;
        inDec=`<span>${res.work.intro[0].dec}</span>`;

        menuLi[0].classList.add('active');

        intro.innerHTML = inTitSub + inTit + inDec;

        skin();


        for(let i=0; i<menu.length; i++){

            menu[i].addEventListener('click',function(){
                // console.log(res.work.intro[i]);

                inTitSub = `<p>${res.work.intro[i].tit_sub}</p>`;
                inTit=`<h3>${res.work.intro[i].tit}</h3>`;
                inDec=`<span>${res.work.intro[i].dec}</span>`;

                intro.innerHTML = inTitSub + inTit + inDec;

                if(i == 0){
                    active(i);
                    skin();
                }else if(i == 1){
                    active(i)
                    essence();
                }else if(i == 2){
                    active(i)
                    cream();
                }else if(i == 3){
                    active(i)
                    cleanser();
                }else{
                    active(i)
                    acc();
                }
            });
        }

        function active(i){
            for(let j=0; j<menuLi.length; j++){
                menuLi[j].classList.remove('active');
            }

            menuLi[i].classList.add('active');
        }

        function skin(){
            list.innerHTML = '';

            for(let i=0; i<res.work.pro.skin.length; i++){
                // console.log(res.work.pro.skin.length);

                var content = document.createElement('div');
                var product = document.createElement('div');
                var slideUp = document.createElement('div');

                content.classList.add('content');
                product.classList.add('product');
                slideUp.classList.add('slide_up');

                list.appendChild(content);
                content.appendChild(product);
                content.appendChild(slideUp);

                const heart = `<img src="img/heart.png" alt="heart" class="heart">`;
                img = `<a href="shop_sub.html"><img src="${res.work.pro.skin[i].img}" alt="베스트상품"></a>`

                product.innerHTML = heart + img;

                tit = `<h4>${res.work.pro.skin[i].name}</h4>`;
                origin = `<span>${res.work.pro.skin[i].price_origin}</span>`;
                price = `<p>${res.work.pro.skin[i].price}</p>`;

                slideUp.innerHTML = tit + origin + price;
            }
        }

        function essence(){
            list.innerHTML = '';
            for(let i=0; i<res.work.pro.essence.length; i++){
                // console.log(res.work.pro.skin.length);

                var content = document.createElement('div');
                var product = document.createElement('div');
                var slideUp = document.createElement('div');

                content.classList.add('content');
                product.classList.add('product');
                slideUp.classList.add('slide_up');

                list.appendChild(content);
                content.appendChild(product);
                content.appendChild(slideUp);

                const heart = `<img src="img/heart.png" alt="heart" class="heart">`;
                img = `<a href="shop_sub.html"><img src="${res.work.pro.essence[i].img}" alt="베스트상품"></a>`

                product.innerHTML = heart + img;

                tit = `<h4>${res.work.pro.essence[i].name}</h4>`;
                origin = `<span>${res.work.pro.essence[i].price_origin}</span>`;
                price = `<p>${res.work.pro.essence[i].price}</p>`;

                slideUp.innerHTML = tit + origin + price;
            }
        }
        
        function cream(){
            list.innerHTML = '';
            for(let i=0; i<res.work.pro.cream.length; i++){
                // console.log(res.work.pro.skin.length);

                var content = document.createElement('div');
                var product = document.createElement('div');
                var slideUp = document.createElement('div');

                content.classList.add('content');
                product.classList.add('product');
                slideUp.classList.add('slide_up');

                list.appendChild(content);
                content.appendChild(product);
                content.appendChild(slideUp);

                const heart = `<img src="img/heart.png" alt="heart" class="heart">`;
                img = `<a href="shop_sub.html"><img src="${res.work.pro.cream[i].img}" alt="베스트상품"></a>`

                product.innerHTML = heart + img;

                tit = `<h4>${res.work.pro.cream[i].name}</h4>`;
                origin = `<span>${res.work.pro.cream[i].price_origin}</span>`;
                price = `<p>${res.work.pro.cream[i].price}</p>`;

                slideUp.innerHTML = tit + origin + price;
            }
        }

        function cleanser(){
            list.innerHTML = '';
            for(let i=0; i<res.work.pro.cleanser.length; i++){
                // console.log(res.work.pro.skin.length);

                var content = document.createElement('div');
                var product = document.createElement('div');
                var slideUp = document.createElement('div');

                content.classList.add('content');
                product.classList.add('product');
                slideUp.classList.add('slide_up');

                list.appendChild(content);
                content.appendChild(product);
                content.appendChild(slideUp);

                const heart = `<img src="img/heart.png" alt="heart" class="heart">`;
                img = `<a href="shop_sub.html"><img src="${res.work.pro.cleanser[i].img}" alt="베스트상품"></a>`

                product.innerHTML = heart + img;

                tit = `<h4>${res.work.pro.cleanser[i].name}</h4>`;
                origin = `<span>${res.work.pro.cleanser[i].price_origin}</span>`;
                price = `<p>${res.work.pro.cleanser[i].price}</p>`;

                slideUp.innerHTML = tit + origin + price;
            }
        }

        function acc(){
            list.innerHTML = '';
            for(let i=0; i<res.work.pro.acc.length; i++){
                // console.log(res.work.pro.skin.length);

                var content = document.createElement('div');
                var product = document.createElement('div');
                var slideUp = document.createElement('div');

                content.classList.add('content');
                product.classList.add('product');
                slideUp.classList.add('slide_up');

                list.appendChild(content);
                content.appendChild(product);
                content.appendChild(slideUp);

                const heart = `<img src="img/heart.png" alt="heart" class="heart">`;
                img = `<a href="shop_sub.html"><img src="${res.work.pro.acc[i].img}" alt="베스트상품"></a>`

                product.innerHTML = heart + img;

                tit = `<h4>${res.work.pro.acc[i].name}</h4>`;
                origin = `<span>${res.work.pro.acc[i].price_origin}</span>`;
                price = `<p>${res.work.pro.acc[i].price}</p>`;

                slideUp.innerHTML = tit + origin + price;
            }
        }

        const heartIcon = document.querySelectorAll('.heart');
        let favorite = [];

        let countHeart = '';

        for(let i=0; i<heartIcon.length; i++){
            heartIcon[i].addEventListener('click',function(e){
                e.preventDefault;

                heartIcon[i].setAttribute('src','img/heart_Color.png');

                favorite.push(i);
                localStorage.favoriteNum = favorite;
            });
        }

        if(localStorage.favoriteNum == null){
            favorite = [];
        }else{
            favorite = localStorage.favoriteNum.split(',');

            const set = new Set(favorite);
            const favoriteArr = [...set];

            console.log(favoriteArr);

            for(let j=0; j<favoriteArr.length; j++){
                heartIcon[favoriteArr[j]].setAttribute('src','img/heart_Color.png');
            }

            console.log(favoriteArr.length);

            countHeart = favoriteArr.length;
        }
    }
}

window.onload = init;






