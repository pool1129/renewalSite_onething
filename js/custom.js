const endpoint = 8;
const qna = document.querySelector('.qna'),
      result = document.querySelector('.result_section'),
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





// const main = document.querySelector('#main');
// const qna = document.querySelector('#qna');

// const endpoint = 12; //진행 상태 바

// const result = document.querySelector('#result');

// const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// function calResult(){
//     console.log(select);
//     var result =select.indexOf(Math.max(...select)); 
//     //최대값 반환 ...select=전개구문 
    
//     return result;
// }

// function setResult(){
//     let point = calResult();
//     const resultName = document.querySelector('.resultname');
//     resultName.innerHTML = infoList[point].name;
    
//     var resultImg = document.createElement('img');
//     const imgDiv = document.querySelector('#resultImg');
//     var imgURL ='img/image-' + point +'.png';
    
//     resultImg. src =imgURL;
//     resultImg.alt =point;
//     resultImg.classList.add('img-fluid');
//     imgDiv.appendChild(resultImg);
    
//     const resultDesc = document.querySelector('.resultDesc');
//     resultDesc.innerHTML=infoList[point].desc;
// }


// function goResult() {
//     qna.style.WebkitAnimation = "fadeOut 1s";
//     qna.style.animation = "fadeOut 1s";

//     setTimeout(() => {
//         result.style.WebkitAnimation = "fadeOut 1s";
//         result.style.animation = "fadeIn 1s";

//         setTimeout(() => {
//             qna.style.display = 'none';
//             result.style.display = 'block';
//         }, 500)
//     });
//     setResult();
// }

// function addAnswer(answerText, qIdx, Idx) {
//     var a = document.querySelector('.answerBox');
//     var answer = document.createElement('button'); //button 추가

//     answer.classList.add('answerList'); //answerList라는 클래스 추가
//     answer.classList.add('my-3'); //margin-bottom 30px 추가
//     answer.classList.add('py-3'); //padding-bottom 30px 추가
//     answer.classList.add('mx-auto');
//     answer.classList.add('fadeIn');

//     a.appendChild(answer); //answer button이 a에 소속
//     answer.innerHTML = answerText;

//     answer.addEventListener("click", function () {
//             var children = document.querySelectorAll('.answerList');
//             for (let i = 0; i < children.length; i++) { // 반복문 생성

//                 children[i].disabled = true; //비활성화되고 다음으로 넘어가야함
//                 children[i].style.WebkitAnimation = "fadeOut 0.5s";
//                 children[i].style.animation = "fadeOut 0.5s";
//             }

//             setTimeout(() => {

//             var target = qnaList[qIdx].a[Idx].type;
//             for (let j = 0; j < target.length; j++) {
//                 select[target[j]] +=1; 
//                 //몇번째 질문에서 몇번째 질문을 선택했는지 배열에 담김
//             }
//             for (let i = 0; i < children.length; i++) {
//                     children[i].style.display = 'none';
//             }
//             goNext(++qIdx);
//         }, 450)
//     }, false);
// }

//     function goNext(qIdx) {

//         if (qIdx === endpoint) {
//             goResult();
//             return;
//         }

//         var q = document.querySelector('.qBox');
//         q.innerHTML = qnaList[qIdx].q; //qnaList의 q를 가지고 오는거

//         for (let i in qnaList[qIdx].a) { //let i는 qnaList 안의 qIdx번째의 a
//             addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
//         }

//         var status = document.querySelector('.statusBar');
//         status.style.width = (100 / endpoint) * (qIdx + 1) + '%';
//     }

//     function begin() {
//         main.style.WebkitAnimation = "fadeOut 1s";
//         main.style.animation = "fadeOut 1s";

//         setTimeout(() => {
//             qna.style.WebkitAnimation = "fadeIn 1s";
//             qna.style.animation = "fadeIn 1s";

//             setTimeout(() => {
//                 main.style.display = 'none';
//                 qna.style.display = 'block';
//             }, 500)
//             let qIdx = 0;
//             goNext(qIdx);
//         }, 450);
//     };


