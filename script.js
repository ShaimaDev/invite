const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const personalImage = document.getElementById('personalImage');

// Read the name from the URL
const params = new URLSearchParams(window.location.search);
const name = params.get('name');

// Assign the correct image for the person
let imageSrc = '';
switch(name){
  case 'Khadijah':
    imageSrc = 'images/Khadijah.jpg';
    break;
  case 'Omniah':
    imageSrc = 'images/Omniah.jpg';
    break;
  case 'Amani':
    imageSrc = 'images/Amani.jpg';
    break;
  case 'Ghudaf':
    imageSrc = 'images/Ghudaf.jpg';
    break;
  case 'HALA':
    imageSrc = 'images/HALA.jpg';
    break;
  default:
    imageSrc = 'images/invite.jpg'; // fallback
}

personalImage.src = imageSrc;

// Make sure invite page shows first
page1.style.opacity = 1;
page1.style.display = 'block';
page2.style.display = 'block';
page2.style.opacity = 0;

// After 5 seconds, fade out invite, fade in name
setTimeout(() => {
  // Fade out invite
  page1.style.transition = 'opacity 1s ease';
  page1.style.opacity = 0;

  // After fade-out completes, fade in the name
  setTimeout(() => {
    page2.style.transition = 'opacity 1s ease';
    page2.style.opacity = 1;
  }, 1000); // matches fade-out duration

}, 5000);
