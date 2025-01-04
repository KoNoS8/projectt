const time = new Date().getHours(); 
const year = new Date().getFullYear();
const day = new Date().getDate();
const month = new Date().getMonth() + 1;
let greeting;
if (time < 12) {
      greeting = "Καλημέρα";
} else if (time < 18) {
      greeting = "Χαίρετε";
} else {
      greeting = "Καλησπέρα";
}
if (window.location.href.includes('home-page')) {
      document.getElementById("test").innerHTML = window.alert(`Σήμερα είναι: ${day}/${month}/${year}\n${greeting}, Η ιστοσελίδα μας αναδεικνύει το skateboard ως προς την όψη ενός ολυμπιακού αθλήματος `);
}
function color(){
      const paragraph = document.getElementById("para");
      paragraph.style.backgroundColor= 'maroon';
}

function start(){
      const name=document.getElementById("userInput").value;
      document.getElementById("demo").innerHTML='Καλή επιτυχία <b>' + name + '</b>!';
      loadQuestion();
}





const quizData = [
      {
        question: "Ποια χρονιά δημιουργήθηκε το skateboard;",
        options: ["1940", "1950", "1960", "1970"],
        correct: "1950",
      },
      {
        question: "Ποιος είναι ο γνωστότερος επαγγελματίας skateboarder;",
        options: ["Tony Hawk", "Rodney Mullen", "Nyjah Huston", "Bob Burnquist"],
        correct: "Tony Hawk",
      },
      {
        question: "Ποιο είναι το μεγαλύτερο και πιο γνωστό extreme sports event;",
        options: ["Red Bull Skate Events", "Vans Park Series", "Street League Skateboarding", "X Games"],
        correct: "X Games",
      },
      {
            question: "Ποιος Θεωρείται ο πατέρας του street skating;",
            options: ["Rodney Mullen", "Tony Hawk", "Nyjah Huston", "Bob Burnquist"],
            correct: "Rodney Mullen",
      },
      { 
            question:' Πως βαθμολογούνται οι skaters στους ολυμπιακούς αγώνες;',
            options: ["Με βάση το δυσκολία", "Με βάση την εκτέλεση και την ροή", "Με βάση τη δημιουργικότητα και την συνολική παρουσία", "Με βάση όλα τα παραπάνω"],
            correct: "Με βάση όλα τα παραπάνω",

      },
      {
            question:'Ποιος είναι γνωστός για τα tricks 360 flip και backside flip;',
            options: ["Chris Cole", "Leo baker", "Nyjah Huston", "Bob Burnquist"],
            correct: "Chris Cole",
      },
      {
            question:" Πότε έγινε το skateboarding ολυμπιακό άθλημα;",
            options: ["2019", "2023", "2021", "2017"],
            correct: "2021",
      }

    ];
    
    let currentQuestionIndex = 0;
    let score = 0;
    
    const quizContainer = document.getElementById("quiz-container");
    
    function loadQuestion() {
      const currentQuestion = quizData[currentQuestionIndex];
      const quizHTML = `
        <div class="question">${currentQuestion.question}</div>
        <div class="answers">
          ${currentQuestion.options
            .map(
              (option) =>
                `<button onclick="checkAnswer('${option}')">${option}</button>`
            )
            .join("")}
        </div>
      `;
      quizContainer.innerHTML = quizHTML;
    }
    
    function checkAnswer(answer) {
      const currentQuestion = quizData[currentQuestionIndex];
      if (answer === currentQuestion.correct) {
        score++;
      }
      currentQuestionIndex++;
      if (currentQuestionIndex < quizData.length) {
        loadQuestion();
      } else {
        showScore();
      }
    }
    
    function showScore() {
      quizContainer.innerHTML = `
        <div class="score">Το Quiz ολοκληρώθηκε!</div>
        <div class="score">Σκορ: ${score} / ${quizData.length}</div>
      `;
    }
