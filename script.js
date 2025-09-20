// Collapsible sections
document.querySelectorAll('.collapsible h2').forEach(h2 => {
    h2.addEventListener('click', () => {
        const content = h2.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Copy buttons
document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const text = document.getElementById(targetId).innerText;
        navigator.clipboard.writeText(text).then(() => {
            btn.innerText = 'Copied!';
            setTimeout(() => btn.innerText = 'Copy Code', 1000);
        });
    });
});
