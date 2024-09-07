let currentQuestion = 0;
let correktAnswer = 0;
let audioSuccess = new Audio('assets/audio/success.mp3');
let audioFail = new Audio('assets/audio/fail.mp3');

function init() {
  // document.getElementById('number-questions').innerHTML = questions.length;
}

function showQuestion() {
   document.getElementById('number-questions').innerHTML = questions.length;
  document.getElementById('welcome-page').style = 'display: none';
  document.getElementById('quiz-page').style = '';
  
  if (gameIsOver()) { 
    showEndScreen();
  } else { 
    updateProgressBar(); 
    showNextQuestion()
  }
}

function gameIsOver() {
  return currentQuestion >= questions.length;
}

function showEndScreen() {
    document.getElementById('end-screen').style='';
    document.getElementById('quiz-page').style = 'display: none';
    document.getElementById('amount-of-questions').innerHTML = questions.length;
    document.getElementById('amount-of-right-question').innerHTML = correktAnswer;
}

function showNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    document.getElementById('number-current-question').innerHTML = currentQuestion + 1;
}

function updateProgressBar() {
      let percent = ((currentQuestion + 1) / questions.length);
    percent = Math.round(percent * 100);
    console.log(percent);
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style = `width:${percent}%;`;
}

function answer(selection) {
  let question = questions[currentQuestion];
  let idOfRightAnswer = `answer_${question['right_answer']}`;
  if (rightAnswerSelected(selection, idOfRightAnswer)) {  // Frage richtig beantwortet
    document.getElementById(selection).parentNode.classList.add('bg-success-subtle');
    document.getElementById(selection).nextElementSibling.classList.add('bg-success-inner'); 
    audioSuccess.play();
    correktAnswer++;
  } else {   // Frage falsch beantwortet
    document.getElementById(selection).parentNode.classList.add('bg-danger-subtle');
    document.getElementById(selection).nextElementSibling.classList.add('bg-danger-inner');
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success-subtle');
    document.getElementById(idOfRightAnswer).nextElementSibling.classList.add('bg-success-inner');
    audioFail.play();
  }
  document.getElementById('next-button').disabled = false;
}

function rightAnswerSelected(selection, idOfRightAnswer) {
  return selection == (idOfRightAnswer);
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById('next-button').disabled = true;
  resetAnswerButtons();
  showQuestion();
}

function resetAnswerButtons() {
    for (let i = 1; i <= 4; i++) {
    document.getElementById('answer_' + i).parentNode.classList.remove('bg-success-subtle');
    document.getElementById('answer_' + i).parentNode.classList.remove('bg-danger-subtle');
    document.getElementById('answer_' + i).nextElementSibling.classList.remove('bg-success-inner');
    document.getElementById('answer_' + i).nextElementSibling.classList.remove('bg-danger-inner'); 
  }
}

function restartGame() {
  document.getElementById('welcome-page').style ='display: none';
  document.getElementById('quiz-page').style = '';
  document.getElementById('end-screen').style = 'display: none';
  currentQuestion = 0;
  correktAnswer = 0; 
  showQuestion();
}