function generateQuiz(questions, quizContainer, resultsContainer, submitBtn){
    
    function displayQuestions(questions, quizContainer){

    }

    function displayResults(questions, quizContainer, resultsContainer){

    }

    displayQuestions(questions, quizContainer);

    submitBtn.onclick=function(){

        showResults(questions, quizContainer, resultsContainer);
    }
}

var myQuestions =[
{
    question: "What is the best football team of all time?",
    answers: {
        a:"New England Patriots",
        b:"Pitsburgh Steelers",
        c:"San Francisco 49ers",
        d:"Miami Dolphins",
    },
    correctAnswer: "c"
    },

{
    question: "What number does Tom Brady wear on his jersey?",
    answers: {
        a:"7",
        b:"12",
        c:"8",
        d:"342",
    },
    correctAnswer:"b"
},
{
    question: "Who is the greatest Quarterback of all time?",
    answers: {
        a:"Tom Brady",
        b:"Fran Tarkington",
        c:"Brett Favre",
        d:"Joe Montana",
    },
    correctAnswer:"d"
},
{
    question: "What NFL team plays in Las Vegas, NV?",
    answers: {
        a:"Falcons",
        b:"Raiders",
        c:"Texans",
        d:"Panthers",
    },
    correctAnswer:"b"
},
{
    question: "Who is the Commishioner of the NFL?",
    answers: {
        a:"Roger Goodell",
        b:"Adam Silver",
        c:"Adam Schefter",
        d:"Bernie Sanders",
    },
    correctAnswer:"a"
},
{
    question: "Who performed at the 2020 Superbowl?",
    answers: {
        a:"Maroon 5",
        b:"The Rolling Stones",
        c:"Kesha",
        d:"Jennifer Lopez",
    },
    correctAnswer:"d"
},
{
    question: "How many teams are in the NFL?",
    answers: {
        a:"50",
        b:"28",
        c:"32",
        d:"18",
    },
    correctAnswer:"c"
},
{
    question: "What number does Tom Brady wear on his jersey?",
    answers: {
        a:"7",
        b:"12",
        c:"8",
        d:"342",
    },
    correctAnswer:"b"
},
{
    question: "Who is the Qaurterback for the Arizon Cardinals",
    answers: {
        a:"Kyler Murray",
        b:"Derek Carr",
        c:"Cam Newton",
        d:"Matt Stafford",
    },
    correctAnswer:"a"
},
{
    question: "Who is the Head Coach for Las Vegas Raiders",
    answers: {
        a:"Andy Reid",
        b:"Mike Tomlin",
        c:"Johnny Tsunami",
        d:"John Gruden",
    },
    correctAnswer:"d"
},
];
