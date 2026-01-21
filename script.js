const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const personalImage = document.getElementById('personalImage');

// قراءة الاسم من الرابط
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
    imageSrc = 'images/invite.jpg'; // fallback
}

// الصورة الخاصة **لا تظهر إلا بعد الانتقال**
personalImage.src = imageSrc;

// اجعل صفحة الدعوة تظهر دائمًا عند تحميل الصفحة
page1.classList.remove('hidden');
page1.style.display = 'block';
page2.style.display = 'none';
page2.style.opacity = 0;

// بعد 5 ثوانٍ، الانتقال الناعم من صفحة الدعوة إلى الصورة الخاصة
setTimeout(() => {
  page1.classList.add('hidden');

  setTimeout(() => {
    page1.style.display = 'none';
    page2.style.display = 'block';
    page2.style.opacity = 0;

    // fade in للصورة الخاصة
    setTimeout(() => {
      page2.style.transition = 'opacity 1s ease';
      page2.style.opacity = 1;
    }, 50);
  }, 1000);

}, 5000);
