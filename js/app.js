// Get the UL element for to populate the nav bar
const navBar = document.querySelector('#navbar__list');
// Get all the sections on the page to populate the nav bar
const sectionsList = document.getElementsByTagName('section');
// Get all the sections on the page to check which section is in view
const sections = document.querySelectorAll('section');

// Building the nav bar with the sections present on the page
for (let section of sectionsList) {
    const sectionName = section.dataset.nav;
    const newSection = document.createElement('li');
    const newLink = document.createElement('a');
    newLink.setAttribute('href', '#'+section.id);
    newLink.classList.add("menu__link");
    newLink.innerText = sectionName;
    newSection.appendChild(newLink);
    navBar.appendChild(newSection);
}

// Function to check what section is in view and add the active state to that section and link in the nav bar
function checkInViewAndAddActiveState() {
    sections.forEach(section => {
      // Get the position and size of the section relative to the viewport
      const sectionRect = section.getBoundingClientRect();
      // Get the specific link that is in viewport
      const link = document.querySelector(`a[href="#${section.id}"]`);
      // Check if the section is in the viewport
      if (sectionRect.top <= 150 && sectionRect.bottom >= 150) {
        // Adding the active state class to the specific section in the viewport
        section.classList.add('your-active-class');
        // Adding the active state class to the specific link in the viewport
        link.classList.add('active');
      } else {
        // Removing the active state class to the specific section that is not in the viewport
        section.classList.remove('your-active-class');
        // Removing the active state class to the specific link that is not in the viewport
        link.classList.remove('active');
      }
    });
}
// Adding a scroll event listener to the window with the above function
window.addEventListener('scroll', checkInViewAndAddActiveState);

// Get all the navigation links to add a click event listener to each of them
const navLinks = document.querySelectorAll('nav a');

// Loopping through each link on the nav bar to add a click event listener that scrolls to the section selected
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    // Prevent the default link behavior
    event.preventDefault();
    // Get the target section ID from the link's href attribute
    const targetId = link.getAttribute('href');
    // Scroll to the target section
    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Get the button element to be used to scroll to the top of the page
const scrollToTopButton = document.getElementById("buttonToTop");
// Function for button to appear when user scrolls down 20px from the top of the document
function displayButton() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
}

// Adding a scroll event listener to the window for scrollToTopButton
window.addEventListener('scroll', displayButton);

// Function to scroll to the top of the page that will be added to a button in the HTML
function scrollToTop(){
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}