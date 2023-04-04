// Which top 10 are we on?
let category = 'middle_finger';
let index = 0;

const getImageUrl = () => {
    return `img/${category}/${index + 1}.png`;
}

const getImg = () => {
    const img = document.createElement("img");
    img.src = getImageUrl();
    return img;
}

let current = getImg();
const container = document.getElementById('picture');
container.appendChild(current);

document.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
        return;
    }
    index = e.key === 'ArrowLeft' ? Math.max(index - 1, 0) : Math.min(index + 1, 9);
    current.src = getImageUrl();
    // ANIMATE THIS LATER
    // current.getAnimations()[0].play();
});

