// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Initialize Animate on Scroll (AOS)
    AOS.init({
        duration: 800,
        once: true
    });

    // --- Dynamic Navigation Menu (Scrollspy) ---
    const sections = document.querySelectorAll('.project-content section');
    const navLinks = document.querySelectorAll('.project-nav a');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${entry.target.id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { rootMargin: '-30% 0px -70% 0px' }); // Activates when section is in the middle of the screen

    sections.forEach(section => {
        observer.observe(section);
    });


    // --- Interactive Code Block (Copy Button) ---
    const copyButton = document.querySelector('.copy-btn');
    const codeSnippet = document.getElementById('code-snippet');

    if (copyButton && codeSnippet) {
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(codeSnippet.innerText).then(() => {
                // Success feedback
                copyButton.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
                copyButton.classList.add('copied');
                
                // Revert back after 2 seconds
                setTimeout(() => {
                    copyButton.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
                    copyButton.classList.remove('copied');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    }

});