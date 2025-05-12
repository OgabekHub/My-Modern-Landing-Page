
const mainContainer = document.querySelector('.main-container');


const currentTheme = localStorage.getItem('theme') || 'light-theme';
mainContainer.className = 'main-container ' + currentTheme;
updateThemeIcon();

function toggleTheme() {
    const themeIcon = document.querySelector('.theme-icon');
    if (mainContainer.classList.contains('light-theme')) {
        mainContainer.classList.remove('light-theme');
        mainContainer.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
        themeIcon.textContent = '☀️'; 
    } else {
        mainContainer.classList.remove('dark-theme');
        mainContainer.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme');
        themeIcon.textContent = '🌙';
    }
}

function updateThemeIcon() {
    const themeIcon = document.querySelector('.theme-icon');
    if (mainContainer.classList.contains('light-theme')) {
        themeIcon.textContent = '🌙';
    } else {
        themeIcon.textContent = '☀️';
    }
}

function searchCards() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        if (title.includes(input) || description.includes(input)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.1
});
cards.forEach(card => {
    observer.observe(card);
});


document.getElementById('searchInput').addEventListener('input', searchCards);


document.querySelector('.theme-icon').addEventListener('click', toggleTheme);