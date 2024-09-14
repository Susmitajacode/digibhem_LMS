function gradeQuiz() {
    let score = 0;

    // Question 1: Capital of France
    let q1Answer = document.querySelector('input[name="q1"]:checked');
    if (q1Answer && q1Answer.value === "Paris") {
        score += 1;
    }

    // Question 2: Math question
    let q2Answer = document.getElementById("q2").value;
    if (q2Answer == 8) {
        score += 1;
    }

    // Question 3: JavaScript Data Types
    let q3Answer = document.querySelector('input[name="q3"]:checked');
    if (q3Answer && q3Answer.value === "String") {
        score += 1;
    }

    // Display result
    let totalQuestions = 3;
    let percentage = (score / totalQuestions) * 100;

    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `You scored ${score} out of ${totalQuestions}. (${percentage}%)`;
}
