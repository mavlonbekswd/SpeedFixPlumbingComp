document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.querySelector(".navbar__menu");
    const body = document.body;
    
    // Create overlay element
    const overlay = document.createElement("div");
    overlay.className = "menu-overlay";
    body.appendChild(overlay);

    if (navToggle && navMenu) {
        // Toggle menu when button is clicked
        navToggle.addEventListener("click", function (e) {
            e.stopPropagation();
            navMenu.classList.toggle("active");
            overlay.classList.toggle("active");
            body.style.overflow = navMenu.classList.contains("active") ? "hidden" : "";
            
            // Toggle icon
            const icon = navToggle.querySelector("i");
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-times");
        });

        // Close menu when clicking overlay
        overlay.addEventListener("click", function() {
            navMenu.classList.remove("active");
            overlay.classList.remove("active");
            body.style.overflow = "";
            
            const icon = navToggle.querySelector("i");
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        });

        // Close menu when clicking menu items
        const menuLinks = navMenu.querySelectorAll("a");
        menuLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                overlay.classList.remove("active");
                body.style.overflow = "";
                
                const icon = navToggle.querySelector("i");
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            });
        });

        // Close menu when window is resized to desktop view
        window.addEventListener("resize", function() {
            if (window.innerWidth > 992) {
                navMenu.classList.remove("active");
                overlay.classList.remove("active");
                body.style.overflow = "";
                
                const icon = navToggle.querySelector("i");
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }
        });
    }
});
  