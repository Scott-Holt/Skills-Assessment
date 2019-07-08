
//changes header image on load
const headerImages = ['../assets/HERO 1.jpg', '../assets/HERO 2.jpg', '../assets/HERO 3.jpg'];
const hero = document.getElementById('hero-img');

function changeHeader() {
    let randomImg = Math.floor(Math.random() * 3);
    hero.style.backgroundImage = `url("${headerImages[randomImg]}")`;
    console.log(hero.style.backgroundimage);
}

hero.addEventListener('load', changeHeader());



