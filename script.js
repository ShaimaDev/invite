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
    imageSrc = 'images/invite.jpg'; // الصورة العامة لو لم يتطابق الاسم
}

personalImage.src = imageSrc;

// بعد 6 ثواني، الانتقال الناعم
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
}, 6000); // 6 ثواني بدلاً من 5
