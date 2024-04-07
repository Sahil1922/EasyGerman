document.addEventListener('DOMContentLoaded', function () {
  var imageButtons = document.querySelectorAll('.openPageBtn');

  // Function to handle the redirection to the next page
  function redirectToNextPage() {
    // Array of page URLs
    const pages = [
      'page1.html', 'page2.html', 'page3.html', 'page4.html', 'page5.html',
      'page6.html', 'page7.html', 'page8.html', 'page9.html', 'page10.html',
      'page11.html', 'page12.html', 'page13.html', 'page14.html', 'page15.html',
      'page16.html', 'page17.html', 'page18.html', 'page19.html', 'page20.html',
      'page21.html', 'page22.html', 'page23.html', 'page24.html', 'page25.html',
      'page26.html', 'page27.html', 'page28.html', 'page29.html', 'page30.html'
    ];
  
    // Function to redirect to the next page
    function redirectToPage(index) {
      if (index < pages.length) {
        window.location.href = pages[index];
        setTimeout(() => redirectToPage(index + 1), 1000); // Change the delay as needed
      }
    }
  
    // Start redirection
    redirectToPage(0);
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
