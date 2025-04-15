document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const toggleBtn = item.querySelector('.toggle-btn');
        
        // Set initial state
        answer.style.maxHeight = '0';
        answer.style.opacity = '0';
        answer.style.padding = '0 var(--spacing-lg)';

        question.addEventListener('click', () => {
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherToggleBtn = otherItem.querySelector('.toggle-btn');
                    otherAnswer.style.maxHeight = '0';
                    otherAnswer.style.opacity = '0';
                    otherAnswer.style.padding = '0 var(--spacing-lg)';
                    otherToggleBtn.classList.remove('active');
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current FAQ item
            const isActive = item.classList.contains('active');
            
            if (isActive) {
                answer.style.maxHeight = '0';
                answer.style.opacity = '0';
                answer.style.padding = '0 var(--spacing-lg)';
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.opacity = '1';
                answer.style.padding = 'var(--spacing-lg)';
            }

            toggleBtn.classList.toggle('active');
            item.classList.toggle('active');
        });
    });

    // Add intersection observer for animation on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all FAQ items
    faqItems.forEach(item => {
        observer.observe(item);
    });

    // Optional: Open first FAQ item by default
    if (faqItems.length > 0) {
        const firstItem = faqItems[0];
        const firstAnswer = firstItem.querySelector('.faq-answer');
        firstItem.classList.add('active');
        firstAnswer.style.maxHeight = firstAnswer.scrollHeight + 'px';
        firstAnswer.style.opacity = '1';
        firstAnswer.style.padding = 'var(--spacing-lg)';
    }
}); 