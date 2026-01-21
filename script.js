const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const personalImage = document.getElementById('personalImage');

// قراءة الاسم من الرابط
const params = new URLSearchParams(window.location.search);
const name = params.get('name');

// تحديد الصورة الخاصة حسب الاسم
let imageSrc = 'images/invite.jpg'; // default
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

// **اجعل الصفحة الثانية تحتوي على الصورة الخاصة فقط بعد الدعوة**
personalImage.src = imageSrc;

// الآن الانتقال: تظهر صفحة الدعوة أولاً ثم بعد 5 ثواني تظهر الصورة الخاصة
setTimeout(() => {
  // أخفي صفحة الدعوة تدريجيًا
  page1.classList.add('hidden');

  // بعد 1 ثانية (مدة الـ fade)، أظهر الصورة الخاصة
  setTimeout(() => {
    page1.style.display = 'none';
    page2.style.opacity = 0;
    page2.style.display = 'block';
    setTimeout(() => {
      page2.style.transition = 'opacity 1s ease';
      page2.style.opacity = 1;
    }, 50);
  }, 1000);

}, 5000); // هنا مدة عرض الصورة الأولى (5 ثواني)
