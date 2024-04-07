document.addEventListener('DOMContentLoaded', function () {
    var imageButtons = document.querySelectorAll('.openPageBtn');
  
    // Function to play a sound based on the data-sound attribute
    function playSound(event) {
      var soundPath = event.target.getAttribute('data-sound');
      
      if (soundPath) {
        var audio = new Audio(soundPath);
        audio.play();
      }
    }
  
    // Attach the playSound function to the click event of each image button
    imageButtons.forEach(function (button) {
      button.addEventListener('click', playSound);
    });
  });
  