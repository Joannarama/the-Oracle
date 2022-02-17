
let askButton = document.getElementById("ask");

let questionInput = document.getElementById("question");

let ballResponse = document.getElementById("answer");

let questionError = document.getElementById('question-error');

let questionContainer = [];

let totalLeft = document.getElementById('total-left');

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
    "Erm...maybe?",
    "Computer says Yes",
    "Who knows?",
    "Not looking good",
    "Computer says no",
    "Meh...let's see",
    "Very doubtful",
    "Reply hazy, try again",
    "Absolutely!",
    "Better not tell you now",
    "Cannot predict now",
    "Not in this universe"
  ];

let horoscopeOptions = [
  "Be careful who you trust. Salt and sugar look the same.",
  "Though the day will spring a lot of challenges, you will be up to it every single time. Your mind will be sharp and will run like an athlete taking part in a marathon. All you need is a little self-belief. You may experiment with the interiors of your house.",
  "You are likely to be a little over-zealous and over-analytical today. You should not be too forceful or severe on others. This will help you save a few friendships and will make sure that your reputation remains intact.",
  "You may stomp your feet all you like, but you're not going to get your way today. The days of 'me-myself' are over.",
  "Today you are going to focus on enhancing your looks and appearances. Instead of trying to seek satisfaction from within yourself you will be flaunting your fine clothes, your hairstyles. A visit to a beauty parlour cannot be ruled out.",
  "Finances are likely to be as still as water this week. However, when the transit of Mars takes place in your fifth house in the second half of the week, chances of incurring favourable results become high.",
  "Venus and Mercury will take you to new professional heights. Not only this, your business may gain momentum and all the on-problems may end too, which can open the way for your growth.",
  "The year's slow and steady movement towards optimism is going to kick up in the month of February 2022. The help of planets that were previously absent has gradually arrived to bring positivity into your life.",
  "You are likely to be in a romantic mood today. You may just end up falling in love today. A difficult situation will bring out the competitive streak in you and spur you on to physical and mental excellence.",
  "Stay cool, Manage Money Meticulously, Boss is Always right, Routine Habits for Health!",
  "A comedy of errors is only funny in hindsight. Too much practicality is what ruined the world. Anything goes today, and having your hair groomed seems to be the best idea you have had in a long time.",
];

askButton.addEventListener("click", function(){
    questionError.innerText = '';
    questionError.style.display = 'none';
    success.style.display = 'none';
    ballResponse.classList.remove('final-horoscope');

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
        for(let i=0; i < questionContainer.length; i++) {
            if (questionContainer[i] == questionInput.value) {
                questionError.style.display = "block";
                questionError.innerText = "The Oracle has already answered that question. Don't waste her time!"; 

                return;
            }
        }

        // get a random response
        let index = getRandomNumber(0, options.length - 1);
        ballResponse.innerText = options[index];
        ballResponse.style.display = 'inline';

        // push question to the question container
        questionContainer.push(questionInput.value);

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
  let index = getRandomNumber(0, horoscopeOptions.length - 1);
  resetGame();

  ballResponse.innerText = horoscopeOptions[index];
  ballResponse.classList.add('final-horoscope');
  ballResponse.style.display = 'flex';

});

// button event listener to reset the game
startOver.addEventListener('click', function() {
  resetGame();
});

// reset game to start point
function resetGame() {
  questionContainer = [];
  updateRemainingQuestions();
  questionInput.value = '';
  ballResponse.innerText = '';
  ballResponse.style.display = 'none';
  success.style.display = "none";
  questionError.style.display = "none";
  horoscope.style.background = "#666666";
  numberOfQuestions.innerHtml = 'three';
}

// function to update features tracking how many questions remain
function updateRemainingQuestions() {
  let totalRemaining = 3 - questionContainer.length;
  totalLeft.innerText = totalRemaining;

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

// function to generate random number to select message indexes from message arrays
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

