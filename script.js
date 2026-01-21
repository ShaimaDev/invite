const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const personalImage = document.getElementById('personalImage');

// قراءة الاسم من الرابط
const params = new URLSearchParams(window.location.search);
const name = params.get('name');

// تحديد الصورة الخاصة حسب الاسم
let imageSrc = '';
switch(name){
  case 'Khadijah': imageSrc = 'images/Khadijah.jpg'; break;
  case 'Omniah':   imageSrc = 'images/Omniah.jpg'; break;
  case 'Amani':    imageSrc = 'images/Amani.jpg'; break;
  case 'Ghudaf':   imageSrc = 'images/Ghudaf.jpg'; break;
  case 'HALA':     imageSrc = 'images/HALA.jpg'; break;
  default:         imageSrc = 'images/invite.jpg';
}

// تعيين الصورة الخاصة للصفحة الثانية
personalImage.src = imageSrc;

// ضبط الحالة الأولية
page1.style.opacity = 1;
page2.style.opacity = 0;
page1.style.display = 'block';
page2.style.display = 'block';

// بعد 5 ثوانٍ، الانتقال من صفحة الدعوة إلى الصورة الخاصة
setTimeout(() => {
  // fade-out صفحة الدعوة
  page1.style.transition = 'opacity 1s ease';
  page1.style.opacity = 0;

  // fade-in الصورة الخاصة بعد 1 ثانية
  setTimeout(() => {
    page2.style.transition = 'opacity 1s ease';
    page2.style.opacity = 1;
  }, 1000);

}, 5000);
