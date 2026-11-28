
// JavaScript Quiz Game

function startQuiz() {

    // Array of questions and answers
    let quiz = [
        {
            question: "What is the full form of CPU?",
            answer: "central processing unit"
        },
        {
            question: "Which language is used for web development?",
            answer: "javascript"
        },
        {
            question: "What is the output of 5 + 5?",
            answer: "10"
        },
        {
            question: "Which keyword is used to declare a variable in JavaScript?",
            answer: "let"
        },
        {
            question: "Which symbol is used for comments in JavaScript?",
            answer: "//"
        }
    ];

    let score = 0;

    // Loop through each question
    for (let i = 0; i < quiz.length; i++) {

        let userAnswer = prompt(quiz[i].question);

        // Convert answer to lowercase and remove spaces
        userAnswer = userAnswer.toLowerCase().trim();

        // Check the answer
        if (userAnswer === quiz[i].answer) {
            alert("Correct Answer!");
            score++;
        } else {
            alert("Wrong Answer! Correct answer is: " + quiz[i].answer);
        }
    }

    // Display final score
    alert("Quiz Completed!\nYour Score: " + score + " out of " + quiz.length);
}

// Start the quiz
startQuiz();
