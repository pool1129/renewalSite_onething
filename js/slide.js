// main영역 slide
const mainImg = document.querySelector(".main_img"),
      title = document.querySelector(".title"),
      titleDesc = document.querySelector(".title_desc"),
      endpoint = 4;
      

// setInterval(function slide(){

//         var status = document.querySelector('.status');

//         for(i = 0; i < endpoint; i++){
          
//           mainImg.children[i].classList.add('showing');
//           title.innerHTML = mainList[i].title;
//           titleDesc.innerHTML = mainList[i].title_desc;
//           status.style.width = (100 / endpoint) * (i + 1) + '%';
//         }
// },1000);



var i = 0;

var it = setInterval(function(){

  if(i++ < endpoint){

    var status = document.querySelector('.status');

    mainImg.children[i].classList.add('showing');
    title.innerHTML = mainList[i].title;
    titleDesc.innerHTML = mainList[i].title_desc;
    status.style.width = (100 / endpoint) * (i) + '%';

  }else{

  }
}, 1000);







// function begin() {
//         main.style.WebkitAnimation = "fadeOut 1s";
//         main.style.ani mation = "fadeOut 1s";

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

//     function addAnswer(answerText, qIdx, Idx) {
//         var a = document.querySelector('.answerBox');
//         var answer = document.createElement('button'); //button 추가
    
//         answer.classList.add('answerList'); //answerList라는 클래스 추가
//         answer.classList.add('my-3'); //margin-bottom 30px 추가
//         answer.classList.add('py-3'); //padding-bottom 30px 추가
//         answer.classList.add('mx-auto');
//         answer.classList.add('fadeIn');
    
//         a.appendChild(answer); //answer button이 a에 소속
//         answer.innerHTML = answerText;
    
//         answer.addEventListener("click", function () {
//                 var children = document.querySelectorAll('.answerList');
//                 for (let i = 0; i < children.length; i++) { // 반복문 생성
    
//                     children[i].disabled = true; //비활성화되고 다음으로 넘어가야함
//                     children[i].style.WebkitAnimation = "fadeOut 0.5s";
//                     children[i].style.animation = "fadeOut 0.5s";
//                 }
    
//                 setTimeout(() => {
    
//                 var target = qnaList[qIdx].a[Idx].type;
//                 for (let j = 0; j < target.length; j++) {
//                     select[target[j]] +=1; 
//                     //몇번째 질문에서 몇번째 질문을 선택했는지 배열에 담김
//                 }
//                 for (let i = 0; i < children.length; i++) {
//                         children[i].style.display = 'none';
//                 }
//                 goNext(++qIdx);
//             }, 450)
//         }, false);
//     }

// function slide(){
//     const currentSlide = mainImg.children[0];
          
//     if(currentSlide){ // 만약 현재 슬라이드라면
//         currentSlide.classList.add(showClass); // 현재 슬라이드에서 SHOWING_CLASS를 붙인다.


//         if(nextSlide){ //만약 다음 슬라이드가 있다면
//             nextSlide.classList.add(showClass); //다음 슬라이드에 SHOWING_CLASS를 붙인다.

//         }else{ // 다음 슬라이드가 없다면 => (마지막 슬라이드라면)
//             firstSlide.classList.add(showClass); // 첫번째 슬라이드에 SHOWING_CLASS를 붙인다.
//         }
//     }else{
//         firstSlide.classList.add(showClass);
//     }
// }


// // const target = wrap.children[0]
// // const len = target.children.length


// slide();
// setInterval(slide,2000);

// mainImg.childElementCount

// // for(i = 0; i < mainImg.length; i++)