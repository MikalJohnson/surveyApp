const surveyForm = document.getElementById("surveyForm");
const favoriteselectedChar = document.getElementById('favoriteCharacter');
const knowledgeRating = document.getElementById('knowledgeRating');
const characterError = document.getElementById('characterError');
const ratingError = document.getElementById('ratingError');
const confirmationMessage = document.getElementById('confirmationError');

surveyForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedChar = favoriteselectedChar.value
    const knowlegdeRate = parseInt(knowledgeRating.value);

    //Reset error message
    characterError.textContent = "";
    ratingError.textContent = "";

    //Validation
    let isValid = true

    // Validation and check for selected character
    if(selectedChar === " ") {
        characterError.textContent = "Please Select a character";
        isValid = false;
    }

    if(isNaN(knowlegdeRate) || knowlegdeRate < 1 || knowlegdeRate > 5) {
        ratingError.textContent = "Please rate you knowledge on a scale form 1 - 5";
        ratingError.style.color = 'red'
        ratingError.style.fontWeight = 'bold'
        isValid = false
    }

    if(isValid) {
        confirmationMessage.textContent = "Thank you for completing the survey!"
    }
})