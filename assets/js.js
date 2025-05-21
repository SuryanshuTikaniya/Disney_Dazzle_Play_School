document.addEventListener('DOMContentLoaded', function () {
  // DARK/LIGHT MODE TOGGLE
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    // Save user's theme preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });

  // Load saved theme preference
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }

  // MULTI-STEP FORM NAVIGATION
  const steps = document.querySelectorAll('.form-step');
  let currentStep = 0;

  // Make sure the first step is visible
  if (steps.length > 0) {
    steps[currentStep].classList.add('form-step-active');
  }

  // NEXT BUTTONS
  const btnNexts = document.querySelectorAll('.btn-next');
  btnNexts.forEach(button => {
    button.addEventListener('click', () => {
      console.log("Next clicked on step", currentStep);
      // Hide current step
      steps[currentStep].classList.remove('form-step-active');
      // Increment step counter
      currentStep++;
      if (currentStep >= steps.length) {
        currentStep = steps.length - 1;
      }
      // Show the next step
      steps[currentStep].classList.add('form-step-active');
    });
  });

  // PREVIOUS BUTTONS
  const btnPrevs = document.querySelectorAll('.btn-prev');
  btnPrevs.forEach(button => {
    button.addEventListener('click', () => {
      console.log("Previous clicked on step", currentStep);
      // Hide current step
      steps[currentStep].classList.remove('form-step-active');
      // Decrement step counter
      currentStep--;
      if (currentStep < 0) {
        currentStep = 0;
      }
      // Show the previous step
      steps[currentStep].classList.add('form-step-active');
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  // DARK/LIGHT MODE TOGGLE
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');
      // Save user's theme preference in localStorage
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  } else {
    console.error("Theme toggle element not found");
  }

  // Load saved theme preference on page load
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
});