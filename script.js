const quizData = [
    {
        question: "Nome completo do Harry Potter",
        a: "Harry James Potter",
        b: "Harry Marvolo Potter",
        c: "Harry Brian Potter",
        d: "Harry Percival Potter",
        correct: "a",
    },
    {
        question: "Esporte jogado no mundo bruxo?",
        a: "Baseboll",
        b: "Quadribol",
        c: "Futeboll",
        d: "Volei",
        correct: "b",
    },
    {
        question: "Grau de parentesco do Sirius com o Harry",
        a: "Tio",
        b: "Primo",
        c: "Padrinho",
        d: "Pai",
        correct: "c",
    },
    {
        question: "Nome completo de Voldemort",
        a: "Tom Marvolo Ridlle",
        b: "Tom Potter Ridlle",
        c: "Tom Slytherin Ridlle",
        d: "Tom HuplePuth Ridlle",
        correct: "a",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Você respondeu corretamente ${score}/${quizData.length} questões.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});