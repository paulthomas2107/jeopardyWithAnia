let questions = [];

async function loadQuestions() {
  const response = await fetch(
    'https://the-trivia-api.com/api/questions?limit=5'
  );
  questions = await response.json();

  return questions;
}

document.addEventListener('DOMContentLoaded', async () => {
  try {
    await loadQuestions();
  } catch (e) {
    console.log(e);
  }

  console.log(questions);

  questions.forEach((question) => {
    console.log(question.category);
    console.log(question.question);
    console.log(question.correctAnswer);
    console.log(question.incorrectAnswers[0]);
    console.log(question.incorrectAnswers[1]);
    console.log(question.incorrectAnswers[2]);
  });
});
