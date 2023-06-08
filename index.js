// Declare variables
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('#.choice-text'));
const progressText = document.querySelector('#progressText');
const score = document.querySelector('#score');
const progressBarTracker = document.querySelector('#progressBarTracker');
const SCORE_POINTS = 10
const MAX_QUESTIONS = 4

let currentQuestion = {}
let acceptingAnswer = true
let score = 0
let questionCounter = 0
let availableQuestions = []
// Astrology Questions
let questions = [
    {
        question:'How many Zodiac signs are there?',
        choice1: '15',
        choice2: '11',
        choice3: '10',
        choice4: '12',
        answer: 12, 
    }
    {
        question:'What element is the sign of Aries?',
        choice1: 'Earth',
        choice2: 'Air',
        choice3: 'Fire',
        choice4: 'Water',
        answer: Fire, 
    }
    {
        question:'What element is the sign of Cancer?',
        choice1: 'Earth',
        choice2: 'Air',
        choice3: 'Fire',
        choice4: 'Water',
        answer: Water, 
    }
    {
        question:'What is the most common Zodiac sign in the US?',
        choice1: 'Virgo',
        choice2: 'Libra',
        choice3: 'Gemini',
        choice4: 'Scorpio',
        answer: Scorpio with an estimated 9.6% US population,
    }
    {
        question:'What is the least common Zodiac sign in the US?',
        choice1: 'Sagittarius',
        choice2: 'Aquarius',
        choice3: 'Leo',
        choice4: 'Taurus',
        answer: Aquarius with an estimated 6.3% US population,
    }
    {
        question:'How many planets rule the twelve Zodiac signs?',
        choice1: '9',
        choice2: '7',
        choice3: '6',
        choice4: '10',
        answer: 9, 
    }
    {
        question:'What are the only planets to rule over one Zodiac sign?',
        choice1: 'Mercury and Jupiter',
        choice2: 'Venus and Sun',
        choice3: 'Saturn and Mars',
        choice4: 'Sun and Moon',
        answer: Sun and Moon, 
    }
    {
        question:'What are the most common star signs among NFL All-Stars?',
        choice1: 'Libra and Aries',
        choice2: 'Sagittarius and Virgo',
        choice3: 'Leo and Aries',
        choice4: 'Gemini and Cancer',
        answer: Leo and Aries, 
    }
    {
        question:'What is the most common star sign among billionaires?',
        choice1: 'Virgo',
        choice2: 'Libra',
        choice3: 'Taurus',
        choice4: 'Leo',
        answer: Libra with 32 billionaires under this sign, 
    }
    {
        question:'What star sign Bill Gates?',
        choice1: 'Cancer,',
        choice2: 'Aries',
        choice3: 'Pisces',
        choice4: 'Scorpio',
        answer: Scorpio, 
    }
]

// Declare functions
// Initialize game
startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion = ()
}
// Create function to generate newQuestion/ store data for high score
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('/end.html')
    }
    // Display what question we're on
    questionCounter++
    progressText.innerText = 'Question ${questionCounter/MAX_QUESTIONS} *  10}%'
    // Display progress bar advancement
    progressBarTracker.style.width = '${(questionCounter/MAX_QUESTIONS) * 10} %'
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
}