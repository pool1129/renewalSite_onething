
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
        let favorite;
        let favoriteArr = []
        
        inTitSub = `<p>${res.work.intro[0].tit_sub}</p>`;
        inTit=`<h3>${res.work.intro[0].tit}</h3>`;
        inDec=`<span>${res.work.intro[0].dec}</span>`;

        menuLi[0].classList.add('active');

        intro.innerHTML = inTitSub + inTit + inDec;

        skin();

        setInterval(function(){
            intro.classList.remove('fadeDown');
        },2000);

        for(let i=0; i<menu.length; i++){

            menu[i].addEventListener('click',function(){
                // console.log(res.work.intro[i]);

                inTitSub = `<p>${res.work.intro[i].tit_sub}</p>`;
                inTit=`<h3>${res.work.intro[i].tit}</h3>`;
                inDec=`<span>${res.work.intro[i].dec}</span>`;

                intro.innerHTML = inTitSub + inTit + inDec;

                if(i == 0){
                    active(i);
                    fadeDown();
                    skin();
                }else if(i == 1){
                    active(i)
                    fadeDown();
                    essence();
                }else if(i == 2){
                    active(i)
                    fadeDown();
                    cream();
                }else if(i == 3){
                    active(i)
                    fadeDown();
                    cleanser();
                }else{
                    active(i)
                    fadeDown();
                    acc();
                }
                eventClick();
            });
        }

        function fadeDown(){
            intro.classList.add('fadeDown');
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
                content.setAttribute('data-code',res.work.pro.skin[i].code);

                product.classList.add('product');
                slideUp.classList.add('slide_up');

                list.appendChild(content);
                content.appendChild(product);
                content.appendChild(slideUp);

                const heart =   `<svg id="favorite_black_24dp" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" class="heart">
                                    <path id="패스_32" data-name="패스 32" d="M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5A5.447,5.447,0,0,1,7.5,3,5.988,5.988,0,0,1,12,5.09,5.988,5.988,0,0,1,16.5,3,5.447,5.447,0,0,1,22,8.5c0,3.78-3.4,6.86-8.55,11.54Z" fill="#6a6a6a"/>
                                </svg>`;
                                
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
                content.setAttribute('data-code',res.work.pro.essence[i].code);
                product.classList.add('product');
                slideUp.classList.add('slide_up');

                list.appendChild(content);
                content.appendChild(product);
                content.appendChild(slideUp);

                const heart =   `<svg id="favorite_black_24dp" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" class="heart">
                                    <path id="패스_32" data-name="패스 32" d="M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5A5.447,5.447,0,0,1,7.5,3,5.988,5.988,0,0,1,12,5.09,5.988,5.988,0,0,1,16.5,3,5.447,5.447,0,0,1,22,8.5c0,3.78-3.4,6.86-8.55,11.54Z" fill="#6a6a6a"/>
                                </svg>`;
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
                content.setAttribute('data-code',res.work.pro.cream[i].code);
                product.classList.add('product');
                slideUp.classList.add('slide_up');

                list.appendChild(content);
                content.appendChild(product);
                content.appendChild(slideUp);

                const heart =   `<svg id="favorite_black_24dp" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" class="heart">
                                    <path id="패스_32" data-name="패스 32" d="M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5A5.447,5.447,0,0,1,7.5,3,5.988,5.988,0,0,1,12,5.09,5.988,5.988,0,0,1,16.5,3,5.447,5.447,0,0,1,22,8.5c0,3.78-3.4,6.86-8.55,11.54Z" fill="#6a6a6a"/>
                                </svg>`;
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
                content.setAttribute('data-code',res.work.pro.cleanser[i].code);
                product.classList.add('product');
                slideUp.classList.add('slide_up');

                list.appendChild(content);
                content.appendChild(product);
                content.appendChild(slideUp);

                const heart =   `<svg id="favorite_black_24dp" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" class="heart">
                                    <path id="패스_32" data-name="패스 32" d="M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5A5.447,5.447,0,0,1,7.5,3,5.988,5.988,0,0,1,12,5.09,5.988,5.988,0,0,1,16.5,3,5.447,5.447,0,0,1,22,8.5c0,3.78-3.4,6.86-8.55,11.54Z" fill="#6a6a6a"/>
                                </svg>`;
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
                content.setAttribute('data-code',res.work.pro.acc[i].code);
                product.classList.add('product');
                slideUp.classList.add('slide_up');

                list.appendChild(content);
                content.appendChild(product);
                content.appendChild(slideUp);

                const heart =   `<svg id="favorite_black_24dp" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" class="heart">
                                    <path id="패스_32" data-name="패스 32" d="M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5A5.447,5.447,0,0,1,7.5,3,5.988,5.988,0,0,1,12,5.09,5.988,5.988,0,0,1,16.5,3,5.447,5.447,0,0,1,22,8.5c0,3.78-3.4,6.86-8.55,11.54Z" fill="#6a6a6a"/>
                                </svg>`;
                img = `<a href="shop_sub.html"><img src="${res.work.pro.acc[i].img}" alt="베스트상품"></a>`

                product.innerHTML = heart + img;

                tit = `<h4>${res.work.pro.acc[i].name}</h4>`;
                origin = `<span>${res.work.pro.acc[i].price_origin}</span>`;
                price = `<p>${res.work.pro.acc[i].price}</p>`;

                slideUp.innerHTML = tit + origin + price;
            }
        }

        function eventClick(){
            const heartIcon = document.querySelectorAll('.heart');
            const content = document.querySelectorAll('.content');
            for(let i=0; i<content.length; i++){
                heartIcon[i].addEventListener('click',function(){

                        this.classList.toggle('active');
                        const hasClass = heartIcon[i].classList.contains('active');
                        let code = content[i].getAttribute('data-code');

                        if( !hasClass ){
                            push(code,'del');
                        }else{
                            push(code,'add')
                        }
                        hartPrint();
                 });
            }   
            hartPrint();
        }
        eventClick();

        function hartPrint(){
            const list = document.querySelectorAll('.list > div')
            favorite = localStorage.favoriteNum.split(',');

            for(let j=0; j<favorite.length; j++){
               for(let k=0;k<list.length;k++){
                    if(list[k].dataset.code === favorite[j]){
                        const item = list[k].querySelector('.heart');
                        item.classList.add('active');
                    }
                }
            }
            console.log(favorite);
        }
        

        function push(i,str){

            if(localStorage.favoriteNum == null){
                localStorage.favoriteNum = '';
            }else{
                localStorage.favoriteNum = localStorage.favoriteNum + ',' + i;    

                favorite = localStorage.favoriteNum.split(',');
                const set = new Set(favorite);
                favoriteArr = [...set];
                favoriteArr[0] == '' ? favoriteArr.shift():''; //첫배열이 빈값이라면 삭제

                if(str == 'del'){
                    for(let j=0; j<favoriteArr.length; j++){
                        if(favoriteArr[j] == i){
                            favoriteArr.splice(j,1);

                        }
                    }
                                    
                }else{
                    for(let j=0; j<favoriteArr.length; j++){
                        if(favoriteArr[j] == 'null'){
                            favoriteArr.pop(j);
                        }
                    }
                }
                
                localStorage.favoriteNum = favoriteArr;   
                
            }
        }
        push(null);
    }
}

window.onload = init;

