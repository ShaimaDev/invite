const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const personalImage = document.getElementById('personalImage');

// قراءة الاسم من الرابط
const params = new URLSearchParams(window.location.search);
const name = params.get('name');

// تعيين الصورة الخاصة حسب الاسم
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

// **الصورة الخاصة لا تُعرض إلا بعد الانتقال**
personalImage.src = imageSrc;

// بعد 5 ثواني، الانتقال من صفحة الدعوة إلى الصورة الخاصة
setTimeout(() => {
  // أخفي صفحة الدعوة
  page1.classList.add('hidden');

  setTimeout(() => {
    page1.style.display = 'none';
    page2.style.opacity = 0;
    page2.style.display = 'block';

    // fade in للصورة الخاصة
    setTimeout(() => {
      page2.style.transition = 'opacity 1s ease';
      page2.style.opacity = 1;
    }, 50);
  }, 1000);

}, 5000);
