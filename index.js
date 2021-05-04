const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let questionCounter = 0;
let availableQuestion = [];

let questions = [
    {
        question: 'Тип Вашей компании: ',
        choice1: 'Общество с ограниченной ответственностью',
        choice2: 'Индивидуальное предприятие',
        choice3: 'Полное товарищество',
        choice4: 'Ограниченное товарищество'
    },
    {
        question: 'Место Вашего проживания: ',
        choice1: 'Европа',
        choice2: 'Азия',
        choice3: 'Африка',
        choice4: 'Америка'
    },
    {
        question: 'Какое помещение понадобится для Вашей деятельности?',
        choice1: 'Личный кабинет',
        choice2: 'Общий офис',
        choice3: 'Конференц-зал',
        choice4: 'Виртуальный офис'
    },
    {
        question: 'Имеется ли у вас разрешение или вид на жительство?',
        choice1: 'Первоначальный вид на жительство',
        choice2: 'Постоянный вид на жительство',
        choice3: 'Краткосрочное разрешение',
        choice4: 'Нет'
    }

]

const QUESTIONS_QUANTITY = 4;

quizHandler = () => {
    questionCounter = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}


getNewQuestion = () => {

    if(availableQuestions.length === 0 || questionCounter > QUESTIONS_QUANTITY) {
        return;
    }

    questionCounter++;
    progressText.innerText = `Вопрос ${questionCounter} из ${QUESTIONS_QUANTITY}`;
    progressBarFull.style.width = `${(questionCounter/QUESTIONS_QUANTITY) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.textContent = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
}


choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return
        acceptingAnswers = false;
        getNewQuestion();
    })
})

quizHandler();