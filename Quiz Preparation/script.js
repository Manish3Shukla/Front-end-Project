const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      question: "Which language is used for web development?",
      options: ["Python", "JavaScript", "C++", "Java"],
      answer: "JavaScript"
    },
    {
      question: "What is 5 + 3?",
      options: ["5", "8", "9", "6"],
      answer: "8"
    },
    {
      question: "What is 0 + 10 - 1 x 20?",
      options: ["55", "-10", "20", "10"],
      answer: "-10"
    }
  ];
  
  const quiz = document.getElementById("quiz");
  const submitBtn = document.getElementById("submit");
  const result = document.getElementById("result");
  
  let currentQuestion = 0; 
  let score = 0; 
  
  
  function loadQuiz() {
    quiz.innerHTML = `
      <div class="question">${quizData[currentQuestion].question}</div>
      ${quizData[currentQuestion].options
        .map(
          (option) =>
            `<label>
              <input type="radio" name="answer" value="${option}">
              ${option}
            </label><br>`
        )
        .join("")}
    `;
  
  
    quiz.style.animation = "fadeIn 0.8s ease-in-out";
  }
  
  function getSelectedAnswer() {
    const options = document.querySelectorAll('input[name="answer"]');
    let selected = null;
    options.forEach((option) => {
      if (option.checked) {
        selected = option.value;
      }
    });
    return selected;
  }
  
  
  function displayResult() {
    quiz.innerHTML = ""; 
    result.innerHTML = `
      <div>You scored <strong>${score}</strong> out of <strong>${quizData.length}</strong></div>
    `;
  
    const restartBtn = document.createElement("button");
    restartBtn.innerText = "Restart Quiz";
    restartBtn.classList.add("restart-btn");
    restartBtn.addEventListener("click", () => {
      currentQuestion = 0;
      score = 0;
      result.innerHTML = "";
      submitBtn.style.display = "block";
      loadQuiz();
    });
    result.appendChild(restartBtn);
  }
  
  submitBtn.addEventListener("click", () => {
    const answer = getSelectedAnswer();
    if (answer) {
      
      if (answer === quizData[currentQuestion].answer) {
        score++;
      }
  
      currentQuestion++; 
      if (currentQuestion < quizData.length) {
        loadQuiz();
      } else {
        submitBtn.style.display = "none";
        displayResult(); 
      }
    } else {
      alert("Please select an answer!"); 
    }
  });
  
  
  loadQuiz();
  