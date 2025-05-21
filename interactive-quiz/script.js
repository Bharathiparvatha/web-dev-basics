const questions = [
  {
    question: "What does HTML stand for?",
    correct: "A",
    options: {
      A: "HyperText Markup Language",
      B: "Home Tool Markup Language",
      C: "Hyperlinks and Text Markup Language"
    }
  },
  {
    question: "Which language is used for styling?",
    correct: "B",
    options: {
      A: "HTML",
      B: "CSS",
      C: "Java"
    }
  }
];

let current = 0;

function showQuestion() {
  const q = questions[current];
  document.getElementById("question").innerText = q.question;
  const buttons = document.querySelectorAll("button");
  buttons[0].innerText = "A: " + q.options.A;
  buttons[1].innerText = "B: " + q.options.B;
  buttons[2].innerText = "C: " + q.options.C;
  document.getElementById("result").innerText = "";
}

function answer(choice) {
  if (choice === questions[current].correct) {
    document.getElementById("result").innerText = "Correct!";
  } else {
    document.getElementById("result").innerText = "Wrong!";
  }
  current = (current + 1) % questions.length;
  setTimeout(showQuestion, 1000);
}

window.onload = showQuestion;
