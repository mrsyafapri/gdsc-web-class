// Start:AOS
AOS.init({
    once: true,
    duration: 1000,
});
// End:AOS

// Start:GSAP
gsap.registerPlugin(TextPlugin);
gsap.to('.lead', {
    duration: 1.5,
    delay: 1.5,
    text: 'Student | Software Engineering | Bangkit 2023 Cohort'
})
gsap.from('.jumbotron img', {
    duration: 1,
    rotateY: 360,
    opacity: 0,
});
gsap.from('.navbar', {
    duration: 1.5,
    y: -150,
    opacity: 0,
    ease: 'bounce',
});
gsap.from('.display-4', {
    duration: 1,
    x: -50,
    opacity: 0,
    delay: 0.5,
    ease: 'back',
});
// End:GSAP

// Start:Quote
const quote = document.getElementById('quote');
const author = document.getElementById('author');

window.addEventListener('load', () => {
    fetch('https://type.fit/api/quotes')
        .then(response => response.json())
        .then(data => {
            let random = Math.floor(Math.random() * data.length);
            quote.innerHTML = data[random].text;
            author.innerHTML = `- ${data[random].author}`;
        })
});
// End:Quote