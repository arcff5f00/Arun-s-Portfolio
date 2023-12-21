document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('nav a');
  const logo = document.querySelector('.logo');
  const downIcon = document.getElementById('downIcon');
  const projectsSection = document.querySelector('.projects-section');

  navItems.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the default navigation behavior

      const targetId = item.getAttribute('href').substring(1); // Get the target section id
      const targetSection = document.getElementById(targetId);

      // Scroll to the target section with a smooth transition
      targetSection.scrollIntoView({
        behavior: 'smooth',
      });
    });
  });

  if (logo) {
    logo.addEventListener('click', function () {
      window.location.href = 'index.html';
    });
  }

  if (downIcon && projectsSection) {
    downIcon.addEventListener('click', function () {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
      });
    });
  }


  navItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.color = '#FFFFFF';
      item.style.border = '2px solid #FFFFFF';

      // Make other items grey
      navItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.style.color = '#434343';
        }
      });
    });

    item.addEventListener('mouseout', () => {
      // Revert styles for the hovered item
      item.style.color = '#FFFFFF';
      item.style.border = '2px solid transparent';

      // Revert styles for other items
      navItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.style.color = '#FFFFFF';
        }
      });
    });
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
    }, 500);
  }

  setInterval(changeHelloText, 2000);

  const shineElement = document.getElementById('shine');

  if (shineElement) {
    let isMouseMoving = false;
  
    document.addEventListener('mousemove', function (event) {
      isMouseMoving = true;
  
      const mouseX = event.clientX;
      const mouseY = event.clientY;
  
      // Check if the mouse is within the home section
      const homeSection = document.querySelector('.home-section');
      const homeSectionRect = homeSection.getBoundingClientRect();
  
      const projectsSection = document.querySelector('.projects-section');
      const projectsSectionRect = projectsSection.getBoundingClientRect();
  
      if (
        mouseX >= homeSectionRect.left &&
        mouseX <= homeSectionRect.right &&
        mouseY >= homeSectionRect.top &&
        mouseY <= homeSectionRect.bottom &&
        !(mouseX >= projectsSectionRect.left &&
          mouseX <= projectsSectionRect.right &&
          mouseY >= projectsSectionRect.top &&
          mouseY <= projectsSectionRect.bottom)
      ) {
        shineElement.style.left = `${mouseX - shineElement.offsetWidth / 2}px`;
        shineElement.style.top = `${mouseY - shineElement.offsetHeight / 2}px`;
  
        shineElement.style.opacity = 1;
  
        setTimeout(() => {
          if (!isMouseMoving) {
            shineElement.style.opacity = 0;
          }
        }, 200);
      } else {
        shineElement.style.opacity = 0;
      }
    });
  
    document.addEventListener('mouseout', function () {
      isMouseMoving = false;
      shineElement.style.opacity = 0;
    });
  }

 
  const tooltipTextDown = document.querySelector('.tooltip-text-down');

  if (downIcon && tooltipTextDown) {
    downIcon.addEventListener('mouseover', () => {
      tooltipTextDown.style.visibility = 'visible';
      tooltipTextDown.style.opacity = 1;
    });

    downIcon.addEventListener('mouseout', () => {
      tooltipTextDown.style.visibility = 'hidden';
      tooltipTextDown.style.opacity = 0;
    });
  }


  const homeSection = document.querySelector('.home-section');
  homeSection.scrollIntoView({
    behavior: 'smooth',
  });

});
