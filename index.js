// Declare variables
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('#.choice-text'));
const progressText = document.querySelector('#progressText');
const score = document.querySelector('#score');
const progressBarTracker = document.querySelector('#progressBarTracker');
const SCORE_POINTS = 10
const MAX_QUESTIONS = 4

let currentQuestion = {}
let score = 0
let questionCounter = 0

// Astrology Questions
let questions = [
    {
        question:'How many Zodiac signs are there?',
        answers: [
            {text: '15', correct: false}
            {text: '11', correct: false}
            {text: '10', correct: false}
            {text: '12', correct: true}
        ],
    },
    {
        question:'What element is the sign of Aries?',
        answers: [
            {text: 'Earth', correct: false}
            {text: 'Air', correct: false}
            {text: 'Fire', correct: true}
            {text: 'Water', correct: false}
        ],
    },
    {
        question:'What element is the sign of Cancer?',
        answers: [
            {text: 'Earth', correct: false}
            {text: 'Air', correct: false}
            {text: 'Fire', correct: false}
            {text: 'Water', correct: true}
        ],
    },
    {
        question:'What is the most common Zodiac sign in the US?',
        answers: [
            {text: 'Virgo', correct: false}
            {text: 'Libra', correct: false}
            {text: 'Gemini', correct: false}
            {text: 'Scorpio', correct: true}
        ],
    },
    {
        question:'What is the least common Zodiac sign in the US?',
        answers: [
            {text: 'Sagittarius', correct: false}
            {text: 'Aquarius', correct: true}
            {text: 'Leo', correct: false}
            {text: 'Taurus', correct: false}
        ],
    },
    {
        question:'How many planets rule the twelve Zodiac signs?',
        answers: [
            {text: '9', correct: true}
            {text: '7', correct: false}
            {text: '6', correct: false}
            {text: '10', correct: false}
        ],
    },
    {
        question:'What are the only planets to rule over one Zodiac sign?',
        answers: [
            {text: 'Mercury and Jupiter', correct: false}
            {text: 'Venus and Sun', correct: false}
            {text: 'Saturn and Mars', correct: false}
            {text: 'Sun and Moon', correct: true}
        ],
    },
    {
        question:'What are the most common star signs among NFL All-Stars?',
        answers: [
            {text: 'Libra and Aries', correct: false}
            {text: 'Sagittarius and Virgo', correct: false}
            {text: 'Leo and Aries', correct: true}
            {text: 'Gemini and Cancer', correct: false}
        ],
    },
    {
        question:'What is the most common star sign among billionaires?',
        answers: [
            {text: 'Virgo', correct: false}
            {text: 'Libra', correct: true}
            {text: 'Taurus', correct: false}
            {text: 'Leo', correct: false}
        ],
    },
    {
        question:'What star sign is Bill Gates?',
        answers: [
            {text: 'Cancer', correct: false}
            {text: 'Pisces', correct: false}
            {text: 'Capricorn', correct: false}
            {text: 'Scorpio', correct: true}
        ],
    },
];

// Declare functions
// Initialize game
function startGame () {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion = ()
}
// Create function to generate newQuestion/ store data for high score
function getNewQuestion() {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('/end.html')}
    }
    // Display what question we're on
    questionCounter++
    progressText.innerText = 'Question ${questionCounter/MAX_QUESTIONS} *  10}%'
    // Display progress bar advancement
    progressBarTracker.style.width = '${(questionCounter/MAX_QUESTIONS) * 10} %'
    
// Stores choice
    choices.forEach(choice => {
        const number = choice.dataset ['number']
        choice.innerText = currentQuestion ['choice' + number]
    })

// change colors depending on answer
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'
// Add points if correct
        if(classToApply === 'correct') {
            IncrementScore(SCORE_POINTS)
        }

IncrementScore = num => {
    score +=num
    scoreText.innerText = score
}