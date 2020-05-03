function startTimer() {
        var seconds = 0;
	timer = setInterval(function() {
	    seconds ++;
	    document.getElementById("seconds").innerText = seconds % 60;
            document.getElementById("minutes").innerText = parseInt(seconds / 60);
        }, 1000);

        function timeOver () {
            alert("Time is up!");
            window.location.reload();
        }
        
        setTimeout(timeOver, 120000);

    $("#submit").click(function(){
        $(this).remove();
    });
var myQuestions =[
    {
        question: "Who is the best football team of all time?",
        answers: {
            a:"New England Patriots",
            b:"Pitsburgh Steelers",
            c:"San Francisco 49ers"
        },
        correctAnswer: "c"
        },

    {
        question: "What number does Tom Brady wear on his jersey?",
        answers: {
            a:"7",
            b:"12",
            c:"8"
        },
        correctAnswer:"b"
    },
    {
        question: "Who is the greatest Quarterback of all time?",
        answers: {
            a:"Tom Brady",
            b:"Fran Tarkington",
            c:"Joe Montana"
        },
        correctAnswer:"c"
    },
    {
        question: "What NFL team plays in Las Vegas, NV?",
        answers: {
            a:"Falcons",
            b:"Raiders",
            c:"Texans"
        },
        correctAnswer:"b"
    },
    {
        question: "Who is the Commishioner of the NFL?",
        answers: {
            a:"Roger Goodell",
            b:"Adam Silver",
            c:"Bernie Sanders"
        },
        correctAnswer:"a"
    },
    {
        question: "Who performed at the 2020 Superbowl?",
        answers: {
            a:"Maroon 5",
            b:"The Rolling Stones",
            c:"Jennifer Lopez"
        },
        correctAnswer:"c"
    },
    {
        question: "How many teams are in the NFL?",
        answers: {
            a:"50",
            b:"28",
            c:"32"
        },
        correctAnswer:"c"
    },
    {
        question: "What number does Tom Brady wear on his jersey?",
        answers: {
            a:"7",
            b:"12",
            c:"8"
        },
        correctAnswer:"b"
    },
    {
        question: "Who is the Qaurterback for the Arizon Cardinals",
        answers: {
            a:"Kyler Murray",
            b:"Derek Carr",
            c:"Cam Newton"
        },
        correctAnswer:"a"
    },
    {
        question: "Who is the Head Coach for Las Vegas Raiders",
        answers: {
            a:"Andy Reid",
            b:"John Gruden",
            c:"Johnny Tsunami"
        },
        correctAnswer:"b"
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton)
{

    function showQuestions(questions, quizContainer){
    
        var output = [];
        var answers;

  
        for(var i=0; i<questions.length; i++){
            
     
            answers = [];

   
            for(letter in questions[i].answers){

                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

           
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
      
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
  
        var userAnswer = '';
        var numCorrect = 0;
        
   
        for(var i=0; i<questions.length; i++){

     
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
          
            if(userAnswer===questions[i].correctAnswer){
             
                numCorrect++;
                
             
                answerContainers[i].style.color = 'lightgreen';
            }
            
            else
            {
                
                answerContainers[i].style.color = 'red';
            }
        }

      
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

   
    showQuestions(questions, quizContainer);
    

    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
       
    }

   
    }
        //remove Start button on click

        //stop timer on submit

        
        
        //console log radio selection
            //use console log to return partial answers if quiz is not completed
}
