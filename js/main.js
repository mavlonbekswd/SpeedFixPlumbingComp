// Mobile Menu Toggle
// document.addEventListener('DOMContentLoaded', () => {
//     const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
//     const navbarMenu = document.querySelector('.navbar__menu');
//     const body = document.body;

//     if (mobileMenuToggle && navbarMenu) {
//         mobileMenuToggle.addEventListener('click', () => {
//             navbarMenu.classList.toggle('active');
//             body.style.overflow = navbarMenu.classList.contains('active') ? 'hidden' : '';
            
//             // Toggle icon
//             const icon = mobileMenuToggle.querySelector('i');
//             if (icon) {
//                 icon.classList.toggle('fa-bars');
//                 icon.classList.toggle('fa-times');
//             }
//         });

//         // Close menu when clicking outside
//         document.addEventListener('click', (e) => {
//             if (!mobileMenuToggle.contains(e.target) && 
//                 !navbarMenu.contains(e.target) && 
//                 navbarMenu.classList.contains('active')) {
//                 navbarMenu.classList.remove('active');
//                 body.style.overflow = '';
                
//                 // Reset icon
//                 const icon = mobileMenuToggle.querySelector('i');
//                 if (icon) {
//                     icon.classList.add('fa-bars');
//                     icon.classList.remove('fa-times');
//                 }
//             }
//         });

//         // Close menu when clicking on a link
//         const menuLinks = navbarMenu.querySelectorAll('a');
//         menuLinks.forEach(link => {
//             link.addEventListener('click', () => {
//                 navbarMenu.classList.remove('active');
//                 body.style.overflow = '';
                
//                 // Reset icon
//                 const icon = mobileMenuToggle.querySelector('i');
//                 if (icon) {
//                     icon.classList.add('fa-bars');
//                     icon.classList.remove('fa-times');
//                 }
//             });
//         });
//     }
// });

// Handle window resize
// window.addEventListener('resize', () => {
//     const navbarMenu = document.querySelector('.navbar__menu');
//     const body = document.body;
    
//     if (window.innerWidth > 768 && navbarMenu) {
//         navbarMenu.classList.remove('active');
//         body.style.overflow = '';
        
//         // Reset icon
//         const icon = document.querySelector('.mobile-menu-toggle i');
//         if (icon) {
//             icon.classList.add('fa-bars');
//             icon.classList.remove('fa-times');
//         }
//     }
// }); 