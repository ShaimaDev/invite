const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const personalImage = document.getElementById('personalImage');

// قراءة اسم الشخص من الرابط
const params = new URLSearchParams(window.location.search);
const name = params.get('name');

// تحديد الصورة الخاصة حسب الاسم
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
    imageSrc = 'images/Khadijah.jpg'; // افتراضي
}

personalImage.src = imageSrc;

// بعد 5 ثواني، الانتقال الناعم
setTimeout(() => {
  page1.classList.add('hidden');
  setTimeout(() => {
    page1.style.display = 'none';
    page2.style.opacity = 0;
    page2.style.display = 'block';
    setTimeout(() => {
      page2.style.transition = 'opacity 1s ease';
      page2.style.opacity = 1;
    }, 50);
  }, 1000);
}, 5000);
