// قراءة اسم الشخص من الرابط
const params = new URLSearchParams(window.location.search);
const name = params.get('name');

// العنصر اللي يعرض الصورة الأولى
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
    inviteImage.src = 'images/Khadijah.jpg'; // صورة افتراضية لو ما حدد الاسم
}

// تغيير الصفحة بعد 5 ثواني
setTimeout(() => {
  document.getElementById('page1').classList.remove('active');
  document.getElementById('page2').classList.add('active');
}, 5000);
