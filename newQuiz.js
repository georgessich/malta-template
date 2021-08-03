const questionText = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const progressBarFull = document.querySelector("#progressBarFull");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const quizWindow = document.querySelector('.quiz');
const quizFinishWindow = document.querySelector('.quiz__finish');
let currentQuestion = 0;
let questionCounter = 0;
let acceptingQuestions = true;

let questions = [
  {
    question: "Тип Вашей компании: ",
    choices: {
      choice1: "Общество с ограниченной ответственностью",
      choice2: "Индивидуальное предприятие",
      choice3: "Полное товарищество",
      choice4: "Ограниченное товарищество",
    },
  },
  {
    question: "Место Вашего проживания: ",
    choices: {
      choice1: "Европа",
      choice2: "Азия",
      choice3: "Африка",
      choice4: "Америка",
    },
  },
  {
    question: "Какое помещение понадобится для Вашей деятельности?",
    choices: {
      choice1: "Личный кабинет",
      choice2: "Общий офис",
      choice3: "Конференц-зал",
      choice4: "Виртуальный офис",
    },
  },
  {
    question: "Имеется ли у вас разрешение или вид на жительство?",
    choices: {
      choice1: "Первоначальный вид на жительство",
      choice2: "Постоянный вид на жительство",
      choice3: "Краткосрочное разрешение",
      choice4: "Нет",
    },
  },
];
const QUESTIONS_QUANTITY = questions.length;

function questionHandler() {
  quizFinishWindow.classList.add('hide');
  if (currentQuestion < QUESTIONS_QUANTITY) {
    questionText.textContent = questions[currentQuestion].question;
    progressText.innerText = `Вопрос ${
      questionCounter + 1
    } из ${QUESTIONS_QUANTITY}`;
    progressBarFull.style.width = `${
      (questionCounter / QUESTIONS_QUANTITY) * 100
    }%`;
    choices.forEach((choice) => {
      const number = choice.dataset["number"];
      choice.textContent =
        questions[currentQuestion].choices["choice" + number];
    });
  } else if(currentQuestion === QUESTIONS_QUANTITY){
      quizWindow.classList.add('hide');
      quizFinishWindow.classList.remove('hide');
  }
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  questionCounter++;
  questionHandler();
});
prevBtn.addEventListener("click", () => {
  currentQuestion--;
  questionCounter--;
  questionHandler();
});

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (currentQuestion < QUESTIONS_QUANTITY) {
      currentQuestion++;
      questionCounter++;
      questionHandler();
    }
  });
});

questionHandler();

