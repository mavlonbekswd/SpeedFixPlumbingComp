// Loading Screen Handler
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    
    // Ensure the loading screen is visible initially
    loadingScreen.style.display = 'flex';
    
    // Function to hide loading screen
    const hideLoadingScreen = () => {
        loadingScreen.classList.add('hide');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500); // Wait for transition to complete
    };

    // If page is loaded from cache
    if (document.readyState === 'complete') {
        setTimeout(hideLoadingScreen, 1500);
    } else {
        // If fresh load, wait for all content
        window.addEventListener('load', () => {
            setTimeout(hideLoadingScreen, 1500);
        });
    }

    // Fallback to hide loading screen if something goes wrong
    setTimeout(hideLoadingScreen, 3000);
}); 
