
let askButton = document.getElementById("ask");

let questionInput = document.getElementById("question");

let ballResponse = document.getElementById("answer");

let questionError = document.getElementById('question-error');

let questionContainer = new Array();

let remainingQuestions = document.getElementById('remaining-questions');
let numberOfQuestions = document.getElementById('number-of-questions');

let startOver = document.getElementById('start-over');

let success = document.getElementById("success");

let horoscope = document.getElementById("horoscope");

let options = [
    "Don't count your chickens",
    "What do YOU think?",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "You're joking, right?",
    "Outlook good",
    "Erm...?",
    "Computer says Yes",
    "Who knows?",
    "Not looking good",
    "Computer says no",
    "Meh...",
    "Very doubtful",
    "Reply hazy, try again",
    "How would I know?",
    "Better not tell you now",
    "Cannot predict now",
    "Not in this universe"
  ];

askButton.addEventListener("click", function(){
    questionError.innerText = '';
    questionError.style.display = 'none';
    success.style.display = 'none';

    if (questionInput.value.length < 1) {
        // check we have a question
        questionError.style.display = "block";
        questionError.innerText = "You must ask a question!";
    } else if (questionInput.value.indexOf('?') == -1) {
      // makes sure a question is asked with a question mark
        questionError.style.display = "block";
        questionError.innerText = "Are you sure you asked a question? Questions usually end with a question mark!";    
    } else if (questionContainer.length >=3) {
      // when three questions have been asked 
      questionError.style.display = "block";
      questionError.innerText = "No more questions! Check your horoscope or start again!"; 


    } else {
      // handle the answer for a question 

      // check if the question has been asked already
        for(i=0; i < questionContainer.length; i++) {
            if (questionContainer[i] == questionInput.value) {
                questionError.style.display = "block";
                questionError.innerText = "The Oracle has already answered that question. Don't waste her time!"; 

                return;
            }
        }

        // get a random response
        let index = getRandomQuestionIndex(0, options.length - 1);
        ballResponse.innerText = options[index]

        // push question to the question container
        questionContainer.push(questionInput.value)

        updateRemainingQuestions();
        questionInput.value = '';

        // when 3 questions have been asked
        if (questionContainer.length === 3) {
          success.style.display = "block";
          success.innerText = "All questions asked! Click for your horoscope now!"; 
          horoscope.style.background = "#e03756";
        }
    }

});

horoscope.addEventListener('click', function() {
  //quit if we don't have 3 questions answered
  if (questionContainer.length != 3) {
    return;
  }

  //show horoscope

  resetGame();

});


startOver.addEventListener('click', function() {
  resetGame();
});


function resetGame() {
  questionContainer = new Array();
  updateRemainingQuestions();
  questionInput.value = '';
  ballResponse.innerText = '';
  success.style.display = "none";
  questionError.style.display = "none";
  horoscope.style.background = "#666666";
  numberOfQuestions.innerHtml = 'three';
}

function updateRemainingQuestions() {
  let totalRemaining = 3 - questionContainer.length;
  remainingQuestions.innerText = 'Remaining Questions: ' + totalRemaining;

  switch (totalRemaining) {
    case 2: 
      numberOfQuestions.innerHTML = 'two';
      break;
    case 1: 
      numberOfQuestions.innerHTML = 'one';
      break;
    case 0:
      numberOfQuestions.innerHTML = 'none';
      break;
    default:
      numberOfQuestions.innerHTML = 'three';
  }
}

function getRandomQuestionIndex(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

