const quiz = [
    {
        question: "Who is the last Prophet of Islam?",
        optiona: "Prophet Isa (AS)",
        optionb: "Prophet Muhammad (SAW)",
        optionc: "Prophet Ibrahim (AS)",
        optiond: "Prophet Adam (AS)",
        answer: "Prophet Muhammad (SAW)",
    },
    {
        question: "How many chapters (Surahs) are there in the Quran",
        optiona: "100",
        optionb: "110",
        optionc: "114",
        optiond: "120",
        answer: "114",
    },
    {
        question: "What is the first pillar of Islam?",
        optiona: "Salah (Prayer)",
        optionb: "Zakah (Charity)",
        optionc: "Shahada (Faith)",
        optiond: "Sawm (Fasting)",
        answer: "Shahada (Faith)",
    },
    {
        question: "In which city was the Prophet Muhammad (PBUH) born?",
        optiona: "Jerusalem",
        optionb: "Medina",
        optionc: "Makkah",
        optiond: "Damascus",
        answer: "Makkah",
    },
    {
        question: "Which angel is responsible for delivering revelations to the Prophets?",
        optiona: "Jibril (Gabriel)",
        optionb: "Angel Israfil",
        optionc: "Angel Malik",
        optiond: "Angel Mikail",
        answer: "Jibril (Gabriel)",
    }
];

const question = document.getElementById("q");
const optiona = document.getElementById("o-t-1");
const optionb = document.getElementById("o-t-2");
const optionc = document.getElementById("o-t-3");
const optiond = document.getElementById("o-t-4");
const answers = document.querySelectorAll(".ans");

const sub = document.getElementById("next");

let score = 0;
let currentq = 0;

// Set the first question
function loadQuestion() {
    question.textContent = quiz[currentq].question;
    optiona.textContent = quiz[currentq].optiona;
    optionb.textContent = quiz[currentq].optionb;
    optionc.textContent = quiz[currentq].optionc;
    optiond.textContent = quiz[currentq].optiond;
}

loadQuestion();

sub.addEventListener('click', () => {
    const ansCd = document.querySelector('input[type="radio"]:checked');
    if (ansCd == null) {
        alert("Please select an answer!");
    } else {
        // Check the answer
        if (ansCd.nextElementSibling.textContent === quiz[currentq].answer) {
            score++;
        }

        // Move to the next question
        currentq++;
        if (currentq < quiz.length) {
            loadQuestion();
            ansCd.checked = false; // Uncheck the previous radio button
        } else {
            alert(`Your final score is ${score}/${quiz.length}`);
            location.reload();
        }
    }
});
