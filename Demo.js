// Smooth scroll to features
function scrollToFeatures() {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
}
// Contact form animation
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    document.getElementById('formMsg').textContent = "Thank you for reaching out!";
    document.getElementById('contactForm').reset();
});
// Animate feature cards on scroll
const cards = document.querySelectorAll('.feature-card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });
cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(40px)';
    observer.observe(card);
});