  // 1. Mobile nav toggle
  const toggleBtn = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });


// 2. Scroll to Top
  const scrollBtn = document.querySelector('#scrollToTopBtn')
  window.addEventListener("scroll", function () {
    // bu yerga scroll bo‘lganda bajariladigan kod yoziladi
    if (window.pageYOffset > 300) {
         scrollBtn.style.display = 'block' ;// tugmani ko‘rsat
      } else {
        scrollBtn.style.display = 'none' ;// tugmani yashir
      }
      
  });
  // window — butun sahifani bildiradi.
  // har safar sahifa harakatlansa, callback funksiyani ishga tushiradi.
  //  window.pageYOffset > 300 Bu raqam bo‘lib, sahifaning yuqorisidan foydalanuvchi hozirgi joyigacha necha piksel pastga tushganini bildiradi.

  scrollBtn.addEventListener('click', function () {
    // yuqoriga qaytish bu yerga yoziladi
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      console.log(`Bosildi ${scrollBtn}`);
  });


  
  

// 3. Form validation

const formValid = document.querySelector('#contact-form')

formValid.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (!name || !email || !message) {
        // Hamma maydonlar to‘ldirilmagan!
      }
      if (!email.includes('@') || !email.includes('.')) {
        // Email noto‘g‘ri
      }

      const status = document.querySelector('#form-status');

if (!name || !email || !message) {
  status.textContent = 'Iltimos, barcha maydonlarni to‘ldiring!';
  status.className = 'error';
  status.style.display = 'block';
  return;
}

status.textContent = 'Xabar muvaffaqiyatli yuborildi!';
status.className = 'success';
status.style.display = 'block';

});



  
// 4. Newsletter submission
// 5. Language switch
// 6. Modal handling
// 7. Gallery lightbox
