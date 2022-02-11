
let askButton = document.getElementById("ask");

let questionInput = document.getElementById("question");

let ballResponse = document.getElementById("answer");

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
    if (questionInput.value.length < 1) {
      alert("Please enter a question!");
    } else {
        let num = questionInput.value.length % options.length;
        ballResponse.innerText = options[num]
      }
  });


