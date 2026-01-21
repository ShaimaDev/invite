// قراءة اسم الشخص من الرابط
const params = new URLSearchParams(window.location.search);
const name = params.get('name');

// العنصر اللي يعرض الصورة الأولى
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const inviteImage = document.getElementById('inviteImage');

// تعيين الصورة الأولى حسب الاسم
switch(name) {
  case 'Khadijah':
    inviteImage.src = 'images/Khadijah.jpg';
    break;
  case 'Omniah':
    inviteImage.src = 'images/Omniah.jpg';
    break;
  case 'Amani':
    inviteImage.src = 'images/Amani.jpg';
    break;
  case 'Ghudaf':
    inviteImage.src = 'images/Ghudaf.jpg';
    break;
  case 'HALA':
    inviteImage.src = 'images/HALA.jpg';
    break;
  default:
    inviteImage.src = 'images/Khadijah.jpg';
}

// بعد 5 ثواني، نعمل الانتقال الناعم
setTimeout(() => {
  // أخفي الصفحة الأولى تدريجيًا
  page1.classList.add('hidden');

  // بعد 1 ثانية (وقت fade)، نعرض الصفحة الثانية
  setTimeout(() => {
    page1.style.display = 'none';
    page2.style.opacity = 0;
    page2.style.display = 'block';

    // اجعل الصفحة الثانية تظهر تدريجيًا
    setTimeout(() => {
      page2.style.transition = 'opacity 1s ease';
      page2.style.opacity = 1;
    }, 50);
  }, 1000);
}, 5000);
