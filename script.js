document.addEventListener('DOMContentLoaded', function() {
    const abstractToggles = document.querySelectorAll('.abstract-toggle');
    
    abstractToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const abstractDiv = this.closest('.paper').querySelector('.abstract');
            
            if (abstractDiv.style.display === 'block') {
                abstractDiv.style.display = 'none';
                this.textContent = 'Abstract ▼';
            } else {
                abstractDiv.style.display = 'block';
                this.textContent = 'Abstract ▲';
            }
        });
    });
});