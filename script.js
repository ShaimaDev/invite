const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const personalImage = document.getElementById('personalImage');
const transitionSound = document.getElementById('transitionSound');

// Read name from URL
const params = new URLSearchParams(window.location.search);
const name = params.get('name');

// Assign correct image
let imageSrc = '';
switch(name){
  case 'Khadijah': imageSrc = 'images/Khadijah.jpg'; break;
  case 'Omniah':   imageSrc = 'images/Omniah.jpg'; break;
  case 'Amani':    imageSrc = 'images/Amani.jpg'; break;
  case 'Ghudaf':   imageSrc = 'images/Ghudaf.jpg'; break;
  case 'HALA':     imageSrc = 'images/HALA.jpg'; break;
  default:         imageSrc = 'images/invite.jpg';
}

personalImage.src = imageSrc;

// Make sure invite shows first
page1.style.opacity = 1;
page1.style.display = 'block';
page2.style.display = 'block';
page2.style.opacity = 0;

// **Optional: require one click to allow sound in Chrome**
document.body.addEventListener('click', () => {
  transitionSound.play();
}, { once: true });

// After 5 seconds, fade out invite, fade in name
setTimeout(() => {
  // Play sound (will work if browser allows)
  transitionSound.currentTime = 0;
  transitionSound.play();

  // Fade out invite
  page1.style.transition = 'opacity 1s ease';
  page1.style.opacity = 0;

  // Fade in name after 1 second
  setTimeout(() => {
    page2.style.transition = 'opacity 1s ease';
    page2.style.opacity = 1;
  }, 1000);

}, 5000);
