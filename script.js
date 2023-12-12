document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('nav a');
  const logo = document.querySelector('.logo');

  navItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.classList.add('active-item');
      navItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.add('inactive-item');
        }
      });
    });

    item.addEventListener('mouseout', () => {
      item.classList.remove('active-item');
      navItems.forEach(otherItem => {
        otherItem.classList.remove('inactive-item');
      });
    });
  });

  // Add click event for the logo
  logo.addEventListener('click', function () {
    // Set the window location to the home page or refresh the page
    window.location.href = 'index.html';
    // Alternatively, use window.location.reload(true) cautiously
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
});
