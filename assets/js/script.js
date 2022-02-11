
let askButton = document.getElementById("ask");

let questionInput = document.getElementById("question");

let ballResponse = document.getElementById("answer");

let questionError = document.getElementById('question-error');

let questionContainer = new Array();

let remainingQuestions = document.getElementById('remaining-questions');
let startOver = document.getElementById('start-over');

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

    if (questionInput.value.length < 1) {
        questionError.style.display = "block";
        questionError.innerText = "You must ask a question!";
    } else if (questionInput.value.indexOf('?') == -1) {
        questionError.style.display = "block";
        questionError.innerText = "Are you sure you asked a question? Questions usually end with a question mark!";        
    } else {
        for(i=0; i < questionContainer.length; i++) {
            if (questionContainer[i] == questionInput.value) {
                questionError.style.display = "block";
                questionError.innerText = "The Oracle has already answered that question. Don't waste her time!"; 

                return;
            }
        }


        let index = getRandomQuestionIndex(0, options.length - 1);
        ballResponse.innerText = options[index]

        questionContainer.push(questionInput.value)

        updateRemainingQuestions();
    }

  });


  startOver.addEventListener('click', function() {
     questionContainer = new Array();
     updateRemainingQuestions();
     questionInput.value = '';
     
  });

  function updateRemainingQuestions() {
    let totalRemaining = 3 - questionContainer.length;
    remainingQuestions.innerText = 'Remaining Questions: ' + totalRemaining;
  }

  function getRandomQuestionIndex(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

