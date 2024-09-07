let currentQuestion = 0;
let correktAnswer = 0;

function init() {
  document.getElementById('welcome-page').style = '';
  document.getElementById('quiz-page').style='display: none';
  document.getElementById('end-screen').style = 'display: none';
  document.getElementById('number-questions').innerHTML = questions.length;
}

function showQuestion() {
  document.getElementById('welcome-page').style = 'display: none';
  document.getElementById('quiz-page').style='';
  if (currentQuestion >= questions.length) {
    document.getElementById('end-screen').style='';
    document.getElementById('quiz-page').style = 'display: none';
    document.getElementById('amount-of-questions').innerHTML = questions.length;
    document.getElementById('amount-of-right-question').innerHTML = correktAnswer;

  } else {
    let question = questions[currentQuestion]
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    document.getElementById('number-current-question').innerHTML = currentQuestion + 1;
  }
}

function answer(selection) {

  let question = questions[currentQuestion];
  let idOfRightAnswer = `answer_${question['right_answer']}`;

  if (selection === (`answer_${question['right_answer']}`)) {  
    document.getElementById(selection).parentNode.classList.add('bg-success-subtle');
    document.getElementById(selection).nextElementSibling.classList.add('bg-success-inner'); 
    correktAnswer++;
  } else {
    document.getElementById(selection).parentNode.classList.add('bg-danger-subtle');
    document.getElementById(selection).nextElementSibling.classList.add('bg-danger-inner');
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success-subtle');
    document.getElementById(idOfRightAnswer).nextElementSibling.classList.add('bg-success-inner');
  }
  document.getElementById('next-button').disabled = false;
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

function showQuestionAgain() {
  document.getElementById('welcome-page').style ='display: none';
  document.getElementById('quiz-page').style = '';
  document.getElementById('end-screen').style = 'display: none';
  currentQuestion = 0;
  correktAnswer = 0; 
  showQuestion();
}