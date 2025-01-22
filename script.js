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

function toggleDropdown(button) {
    const content = button.nextElementSibling;
    const isExpanded = content.classList.contains('show');
    
    // Toggle the arrow
    button.innerHTML = button.innerHTML.replace(
        isExpanded ? '▲' : '▼',
        isExpanded ? '▼' : '▲'
    );
    
    // Toggle the content
    content.classList.toggle('show');
}