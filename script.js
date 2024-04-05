document.getElementById('generate-quiz').addEventListener('click', generateQuiz);

function generateQuiz() {
    var topic = document.getElementById('topic').value;
    var difficulty = document.getElementById('difficulty').value;
    // Logic to generate quiz based on selected topic and difficulty level
    // Display generated quiz on the page
    document.getElementById('quiz').innerHTML = '<p>Generated quiz goes here</p>';
    // Sample array of questions and answers
var questions = [
    {
        question: "When was WW2 ended?",
        options: ["1942", "1945", "1950", "1947"],
        correctAnswer: "1945"
    },
    {
        question: "When was 1st Revolt of Indian Independece started?",
        options: ["1890", "1744", "1857", "1306"],
        correctAnswer: "1857"
    },
    
];

// Function to insert questions into the quiz app
function insertQuestions() {
    var quizContainer = document.getElementById('quiz');
    
    questions.forEach(function(questionObj, index) {
        // Create question container
        var questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        // Add question text
        var questionText = document.createElement('p');
        questionText.textContent = (index + 1) + ". " + questionObj.question;
        questionDiv.appendChild(questionText);

        // Add options
        questionObj.options.forEach(function(option, optionIndex) {
            var optionLabel = document.createElement('label');
            optionLabel.textContent = option;

            var optionInput = document.createElement('input');
            optionInput.type = "radio";
            optionInput.name = "question" + index;
            optionInput.value = option;

            questionDiv.appendChild(optionInput);
            questionDiv.appendChild(optionLabel);
            questionDiv.appendChild(document.createElement('br'));
        });

        quizContainer.appendChild(questionDiv);
    });
}

// Call the insertQuestions function to insert questions into the quiz app
insertQuestions();
    // Calculate and display score feedback
    var score = calculateScore(); // Example function to calculate score
    document.getElementById('score-feedback').innerHTML = '<p>Your score: ' + score + '</p>';
}

function calculateScore() {
    // Example function to calculate score
    // Logic to calculate score based on user's answers
    return Math.floor(Math.random() * 100); // Random score for demonstration purposes
}
