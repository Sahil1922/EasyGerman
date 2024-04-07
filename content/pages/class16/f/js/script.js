
// Initialize user's score
let userScore = sessionStorage.getItem('userScore') ? parseInt(sessionStorage.getItem('userScore')) : 0;

function checkAnswer(button) {
  const isCorrect = button.classList.contains("correct");
  const tick = document.querySelector(".tick");
  const cross = document.querySelector(".cross");

  // Display tick or cross based on the correctness of the answer
  if (isCorrect) {
    tick.style.display = "block";
    cross.style.display = "none";
    button.classList.add("disabled");
    userScore++; // Increment score if the answer is correct
  } else {
    tick.style.display = "none";
    cross.style.display = "block";
  }

  // Store the updated score in sessionStorage
  sessionStorage.setItem('userScore', userScore);

  // Redirect to the next page after a short delay (e.g., 2 seconds)
  setTimeout(() => {
    // Check if there is a next page
    const nextPageLink = document.querySelector('.next-page-link');
    if (nextPageLink) {
      window.location.href = nextPageLink.href;
    }
  }, 2000); // Adjust delay as needed

  // Display the user's score
  const scoreElement = document.querySelector(".score");
  scoreElement.textContent = `${userScore}`; // Assuming maximum score is 30
}



document.addEventListener('DOMContentLoaded', function () {
  var imageButtons = document.querySelectorAll('.openPageBtn');

  // Function to handle the redirection to the next page
  function redirectToNextPage() {
    window.location.href = 'page1.html';
   
  }

  // Add event listener to the next page button
  const nextPageBtn = document.querySelector('.next-page-btn');
  nextPageBtn.addEventListener('click', redirectToNextPage);

  // Function to play a sound based on the data-sound attribute
  function playSound(event) {
    var soundPath = event.target.getAttribute('data-sound');

    if (soundPath) {
      var audio = new Audio(soundPath);
      audio.play();
    }

    // Add the "clicked" class to trigger the fade-out effect
    event.target.classList.add('clicked');
    
    // Remove the "clicked" class after a delay
    setTimeout(function () {
      event.target.classList.remove('clicked');
    }, 500); // Adjust the delay as needed
  }

  // Attach the playSound function to the click event of each image button
  imageButtons.forEach(function (button) {
    button.addEventListener('click', playSound);
  });
});
