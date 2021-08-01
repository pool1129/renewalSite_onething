const endpoint = 8;
const qna = document.querySelector('.qna'),
      result = document.querySelector('.result_section'),
      mainSec = document.querySelector('.main_section'),
      custom = document.querySelector('.main_section p'),
      header = document.querySelector('header'),
      main = document.querySelector('.main'),
      list = document.querySelector('.list');

const select = [0, 0, 0, 0];

function calResult(){
    console.log(select);
    var result =select.indexOf(Math.max(...select)); 
    //최대값 반환 ...select=전개구문 
    
    return result;
}

function setResult(){
    let point = calResult();

    for(let j=0; j<resultList[point].a.length; j++){
        var content = document.createElement('div'),
            eng = document.createElement('span'),
            tit = document.createElement('p'),
            capa = document.createElement('small'),
            price = document.createElement('p'),
            img = document.createElement('img');
        
        content.classList.add('content');

        list.appendChild(content);
        content.appendChild(img);
        content.appendChild(eng);
        content.appendChild(tit);
        content.appendChild(capa);
        content.appendChild(price);

        img.setAttribute('src', `${resultList[point].a[j].img}`);

        eng.innerHTML = resultList[point].a[j].eng;
        tit.innerHTML = resultList[point].a[j].tit;
        capa.innerHTML = resultList[point].a[j].capa;
        price.innerHTML = resultList[point].a[j].price;
    }
}

function goResult() {
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";

    custom.style.WebkitAnimation = "fadeOut 1s";
    custom.style.animation = "fadeOut 1s";

    setTimeout(() => {
        result.style.WebkitAnimation = "fadeOut 1s";
        result.style.animation = "fadeIn 1s";

        setTimeout(() => {
            header.style.backgroundColor = '#FBF6F2';
            main.style.backgroundColor = '#FBF6F2';

            qna.style.display = 'none';
            mainSec.style.display = 'none';
            custom.style.display = 'none';
            result.style.display = 'block';
        }, 500)
    });
    setResult();
}

function addAnswer(answerText, qIdx, Idx){
    var a = document.querySelector(".anwerBox");
    var answer = document.createElement('button');

    answer.classList.add('answerList');

    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click", function(){

        var children = document.querySelectorAll('.answerList');

        for (let i = 0; i < children.length; i++ ){

            children[i].disabled = true;
            children[i].style.WebkitAnimation = "fadeOut 0.5s";
            children[i].style.animation = "fadeOut 0.5s";
        }

        setTimeout(() => {

            var target = customQna[qIdx]. a[Idx].type;
            for (let j = 0; j < target.length; j++){
                select[target[j]] += 1;
            }
            for (let i = 0; i <children.length; i++){
                children[i].style.display = 'none';
            }
            goNext(++qIdx);
        },450);
    },false);
}

function goNext(qIdx){
    
    if(qIdx === endpoint){
        goResult();
        return;
    }

    var q = document.querySelector('.qBox');
    q.innerHTML = customQna[qIdx].q;

    for (let i in customQna[qIdx].a){
        addAnswer(customQna[qIdx].a[i].answer, qIdx, i);
        
    }

    var status = document.querySelector('.status');
    status.style.width = (100 / endpoint) * (qIdx + 1) + '%';
}

function begin(){
        let qIdx = 0;
        goNext(qIdx);
};

begin();





