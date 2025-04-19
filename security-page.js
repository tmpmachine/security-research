// Loading animation and transition
document.addEventListener('DOMContentLoaded', function() {
    // Show loading spinner for 2 seconds
    setTimeout(function() {
    const loadingOverlay = document.querySelector('.loading-overlay');
    loadingOverlay.classList.add('fade-out');
    
    // After the fade-out animation completes, remove the overlay
    setTimeout(function() {
        loadingOverlay.style.display = 'none';
        
        // Fade in the main content
        const mainContent = document.querySelector('.main-content');
        mainContent.classList.add('fade-in');
    }, 500); // Match this to the CSS transition time
    }, 2000); // Show loader for 2 seconds
});

document.querySelector('._btnClose').addEventListener('click', () => {
    parent.postMessage('close-iframe', '*')
})

document.querySelector('._btnAction').addEventListener('click', () => {
    alert('End of PoC. Implementation may vary.')
})
