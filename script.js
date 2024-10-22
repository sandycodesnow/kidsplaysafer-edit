let currentTurn = "child";  // Track whose turn it is
let childAnswer = null;
let parentAnswer = null;

const avatar = document.getElementById('avatar');
const turnText = document.getElementById('turn-text');
const answerButtons = document.querySelectorAll('.answer-button');
const nextButton = document.getElementById('next');
const backButton = document.getElementById('back');

// Define the total number of questions (e.g., if you have 5 questions)
const totalQuestions = 2;

// Function to change turn between child and parent
function changeTurn() {
    if (currentTurn === "child") {
        currentTurn = "parent";
        avatar.src = 'parent-icon.bmp'; // Swap to parent avatar (parent-icon.bmp)
        turnText.textContent = "parent, it's your turn";
        resetAnswers();  // Reset selected answers for the parent
        nextButton.disabled = true;
    } else if (currentTurn === "results") {
        // Redirect to the next question dynamically
        redirectToNextQuestion();
    } else {
        // Both turns completed, compare answers
        checkAnswers();
    }
}

// Function to go back to previous turn or redirect
function goBack() {
    const currentUrl = window.location.href;
    const questionMatch = currentUrl.match(/question(\d+)\.html/);

    if (currentTurn === "parent") {
        currentTurn = "child";
        avatar.src = 'child-icon.bmp'; // Swap back to child avatar (child-icon.bmp)
        avatar.classList.remove('hidden'); // Ensure avatar is visible
        turnText.textContent = "child, it's your turn";
        resetAnswers();  // Reset selected answers for the child
        nextButton.disabled = true;
    } else if (currentTurn === "results") {
        // If we're on the results page, reset to parent turn
        currentTurn = "parent";
        avatar.src = 'parent-icon.bmp'; // Ensure parent avatar is shown (parent-icon.bmp)
        avatar.classList.remove('hidden'); // Ensure avatar is visible
        turnText.textContent = "parent, it's your turn";
        resetAnswers();
        nextButton.disabled = true;
    } else if (questionMatch && questionMatch[1]) {
        const currentQuestionNumber = parseInt(questionMatch[1], 10);  // Get current question number

        if (currentQuestionNumber === 1) {
            // If on question1, redirect to index.html
            window.location.href = 'index.html';
        } else {
            // If on any other question, go back to the previous question
            const previousQuestionNumber = currentQuestionNumber - 1;
            window.location.href = `question${previousQuestionNumber}.html`;
        }
    } else {
        console.error("Current URL does not match expected question format.");
    }
}

// Function to compare answers and display results
function checkAnswers() {
    currentTurn = "results"; // Track that we're on the results page
    avatar.classList.add('hidden');  // Hide avatar when showing results
    
    // If the child's and parent's answers are the same
    if (childAnswer === parentAnswer) {
        turnText.textContent = "Amazing! Your choices are the same!";
    } else {
        turnText.textContent = "Uh Oh! Looks like you two don't agree";

        // Highlight child and parent's answers in different colors
        answerButtons.forEach(btn => {
            if (btn.textContent === childAnswer.textContent) {
                // Highlight child's selected option in blue
                btn.style.backgroundColor = "#6495ED";  // CornflowerBlue for child
            } else if (btn.textContent === parentAnswer.textContent) {
                // Highlight parent's selected option in pink
                btn.style.backgroundColor = "#FF69B4";  // HotPink for parent
            } else {
                // Reset other buttons
                btn.style.backgroundColor = "transparent";
            }
        });
    }
    nextButton.disabled = false; // Enable 'Next' after comparison
}

// Function to handle answer selection
function handleAnswerSelection(answer, answerText) {
    if (currentTurn === "child") {
        childAnswer = answer;
    } else if (currentTurn === "parent") {
        parentAnswer = answer;
    }
    answerButtons.forEach(btn => btn.style.backgroundColor = '');  // Clear previous selection
    answer.style.backgroundColor = "#ff69b4";  // Highlight selected answer (default pink highlight)
    nextButton.disabled = false;  // Enable 'Next' after answer selection
}

// Reset the answer selection (unselect all buttons)
function resetAnswers() {
    answerButtons.forEach(btn => btn.style.backgroundColor = '');  // Reset button highlights
}

// Function to dynamically redirect to the next question
function redirectToNextQuestion() {
    // Get current page URL
    const currentUrl = window.location.href;
    
    // Extract the question number from the URL using a regular expression
    const questionMatch = currentUrl.match(/question(\d+)\.html/);

    if (questionMatch && questionMatch[1]) {
        const currentQuestionNumber = parseInt(questionMatch[1], 10);  // Get current question number

        if (currentQuestionNumber >= totalQuestions) {
            // If the current question number is the last question, redirect to index.html
            window.location.href = 'index.html';
        } else {
            const nextQuestionNumber = currentQuestionNumber + 1;  // Increment the question number by 1
            // Redirect to the next question (e.g., question2.html, question3.html, etc.)
            window.location.href = `question${nextQuestionNumber}.html`;
        }
    } else {
        // Handle the case where the current URL is not in the expected format (e.g., questionX.html)
        console.error("Current URL does not match expected question format.");
    }
}

// Add event listeners to answer buttons
answerButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        handleAnswerSelection(button, button.textContent);
    });
});

// Add event listener to 'Next' button to switch turns or redirect
nextButton.addEventListener('click', () => {
    changeTurn();
});

// Add event listener to 'Back' button to go back to the previous turn or redirect
backButton.addEventListener('click', () => {
    goBack();
});
