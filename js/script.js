const endpoint = 8;
const qna = document.querySelector('.qna');

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
    
    var q = document.querySelector('.qBox');
    q.innerHTML = customQna[qIdx].q;

    for (let i in customQna[qIdx].a){
        addAnswer(customQna[qIdx].a[i].answer, qIdx, i);
        
    }

    var status = document.querySelector('.status');
    status.style.width = (100 / endpoint) * (qIdx + 1) + '%';
}

function begin(){
    setTimeout(() => {
        qna.style.WebkitAnimation = 'fadeIn 1s';
        qna.style.animation = 'fadeIn 1s';

        setTimeout (() => { 
            qna.style.display = 'block';
        },500)

        let qIdx = 0;
        goNext(qIdx);
    }, 450);
};

begin();

