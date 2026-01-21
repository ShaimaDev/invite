const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const personalImage = document.getElementById('personalImage');
const transitionSound = document.getElementById('transitionSound');
const startBtn = document.getElementById('startBtn');

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

// Initial state
page1.style.opacity = 1;
page2.style.opacity = 0;
page1.style.display = 'block';
page2.style.display = 'block';

// Function to start transition
function startTransition() {
  // Play sound
  transitionSound.currentTime = 0;
  transitionSound.play().catch(e => console.log("Audio not allowed yet"));

  // Fade out invite
  setTimeout(() => {
    page1.style.transition = 'opacity 1s ease';
    page1.style.opacity = 0;

    // Fade in name after 1 second
    setTimeout(() => {
      page2.style.transition = 'opacity 1s ease';
      page2.style.opacity = 1;
    }, 1000);

  }, 5000); // 5 seconds invite display
}

// Wait for user interaction to allow audio
startBtn.addEventListener('click', () => {
  startBtn.style.display = 'none'; // Hide button
  startTransition();
});
