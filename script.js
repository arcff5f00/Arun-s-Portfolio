document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('nav a');
    const logo = document.querySelector('.logo');
  
    navItems.forEach(item => {
      item.addEventListener('mouseover', () => {
        item.style.color = '#ffffff';
        item.style.border = '2px solid #ffffff';
  
        // Make other items grey
        navItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.style.color = '#7A746F';
          }
        });
      });
  
      item.addEventListener('mouseout', () => {
        // Revert styles for the hovered item
        item.style.color = '#ffffff';
        item.style.border = '2px solid transparent';
  
        // Revert styles for other items
        navItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.style.color = '#ffffff';
          }
        });
      });
    });
  
    // Add click event for the logo
    logo.addEventListener('click', function () {
      // Set the window location to the home page or refresh the page
      window.location.href = 'index.html';
      // Alternatively, use window.location.reload(true) to force a reload
    });

    const tooltipContainer = document.querySelector('.tooltip-container');

  tooltipContainer.addEventListener('mouseover', function () {
    const tooltipText = this.querySelector('.tooltip-text');
    tooltipText.style.visibility = 'visible';
  });

  tooltipContainer.addEventListener('mouseout', function () {
    const tooltipText = this.querySelector('.tooltip-text');
    tooltipText.style.visibility = 'hidden';
  });


  const helloText = document.querySelector('.hello-text');

  const greetings = [
    'ನಮಸ್ಕಾರ,', 'Hallo,', 'Bonjour,', 'नमस्ते,', 'Ciao,', '안녕하세요,', 'こんにちは,'
  ];

  let index = 0;

  function changeHelloText() {
    helloText.style.opacity = 0;
    
    setTimeout(() => {
      helloText.textContent = greetings[index];
      helloText.style.opacity = 1;
      index = (index + 1) % greetings.length;
    }, 500); // Adjust the duration as needed
  }

  setInterval(changeHelloText, 2000); // Change greeting every 2 seconds

  });
  