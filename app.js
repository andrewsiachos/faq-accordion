
const questions = document.querySelectorAll('.question-item');

for(let i=0;i<questions.length;i++){
    questions[i].addEventListener('click', ()=>{
        if(questions[i].children[1].classList.contains('invisible')){
            questions[i].children[0].children[1].src="assets/images/icon-minus.svg";
        }else{
            questions[i].children[0].children[1].src="assets/images/icon-plus.svg";
        }
        questions[i].children[1].classList.toggle('invisible');
    })
}