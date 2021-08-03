let favorite;
favorite = localStorage.favoriteNum.split(',');
const shoppingList =  localStorage.favoriteNum;

// console.log(favorite);

function init(){
    let xhr,res;

    xhr = new XMLHttpRequest();
    xhr.open('get','js/data_shop.json');
    xhr.send(null);
    xhr.onload = function(){
        res = JSON.parse(xhr.responseText);

        // const list = document.querySelectorAll('.list > div');
            // favorite = localStorage.favoriteNum.split(',');

            const total = res.work.pro.skin.length + res.work.pro.essence.length + res.work.pro.cream.length + res.work.pro.cleanser.length + res.work.pro.acc.length;
            console.log(total);

            console.log(res.work.pro.skin[1].code);

            console.log(res.work.pro)

            for(let j=0; j<total; j++){
                // if(favorite[j] === res.work.pro.skin.code){
                //     console.log(res.work.pro.skin.code);
                // }
            }
    
    }
}

window.onload = init;






