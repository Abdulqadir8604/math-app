const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questionEl = document.getElementById('question');
const formEl = document.getElementById('form');
const inputEl = document.getElementById('input');
const scoreEl = document.getElementById('score');
const messageEl = document.getElementById('message');
const bg = document.getElementById('bg');

var operatorsArr = ['+', '-', '*', '/'];

let score = JSON.parse(localStorage.getItem('score'));

if(score === null){
    score = 0;
}

scoreEl.innerText = `Score: ${score}`;

questionEl.innerText = `${num1} ${operatorsArr[Math.floor(Math.random()*operatorsArr.length)]} ${num2}`;
const correctAnswer = eval(questionEl.innerText);
questionEl.innerText = questionEl.innerText.replace('*', 'x').replace('/', '÷');

formEl.addEventListener('submit', async (e) => {
    const answer = +inputEl.value;
    if (answer == correctAnswer){
        score++;
        updateLocalStorage();
        bg.style.backgroundColor = 'green';
        messageEl.innerText = 'Correct!';
    }else{
        score--;
        updateLocalStorage();
        bg.style.backgroundColor = 'red';
        messageEl.innerText = 'Wrong!';
    }
});

function updateLocalStorage(){
    localStorage.setItem('score', JSON.stringify(score));
}