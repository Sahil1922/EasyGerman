document.addEventListener('DOMContentLoaded', function () {
  var imageButtons = document.querySelectorAll('.speakerBtn-practice');

  // Function to handle the redirection to the next page
  function redirectToNextPage() {
    window.location.href = 'page1.html';
    window.location.href = 'page2.html';
    window.location.href = 'page3.html';
    window.location.href = 'page4.html';
    window.location.href = 'page5.html';
    window.location.href = 'page6.html';
    window.location.href = 'page7.html';
    window.location.href = 'page8.html';
    window.location.href = 'page9.html';
    window.location.href = 'page10.html';
    window.location.href = 'page11.html';
    window.location.href = 'page12.html';
    window.location.href = 'page13.html';
    window.location.href = 'page14.html';
    window.location.href = 'page15.html';
    window.location.href = 'page16.html';
    window.location.href = 'page17.html';
    window.location.href = 'page18.html';
    window.location.href = 'page19.html';
    window.location.href = 'page20.html';
    window.location.href = 'page21.html';
    window.location.href = 'page22.html';
    window.location.href = 'page23.html';
    window.location.href = 'page24.html';
    window.location.href = 'page25.html';
    window.location.href = 'page26.html';
    window.location.href = 'page27.html';
    window.location.href = 'page28.html';
    window.location.href = 'page29.html';
    window.location.href = 'page30.html';
  }

  // Add event listener to the next page button
  const nextPageBtn = document.querySelector('.next-page-btn-practice');
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
