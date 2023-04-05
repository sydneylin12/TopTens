const img = document.getElementById('image');
const textbox = document.getElementById('textbox');
const caption = document.getElementById('caption');

let index = 0;
let categoryIndex = 0;

let categories = [
    // 1-10
    {
        folderName: 'middle_finger',
        title: 'Middle Fingers',
        captions: {
            4: 'I don\'t even think this was a middle finger... LOL'
        }
    },
    // 11-20
    {
        folderName: 'eats',
        title: 'Eats',
        captions: {
            1: 'Nana\'s Green Tea - XX/YY/ZZ',
            2: 'Boiling Point - XX/YY/ZZ'
        }
    }
]

const getImageUrl = () => {
    const idx = Math.floor(index / 10);
    const numberImage = index % 10;
    return `img/${categories[idx].folderName}/${numberImage + 1}.png`;
}

const getTitle = () => {
    const idx = Math.floor(index / 10);
    const numberImage = index % 10;
    return `Top 10 ${categories[idx].title}: ${numberImage + 1}`;
};

const getCaption = () => {
    const idx = Math.floor(index / 10);
    const numberImage = index % 10;
    return categories[idx].captions[numberImage + 1] || '';
};

const updatePage = () => {
    img.src = getImageUrl();
    textbox.innerHTML = getTitle();
    caption.innerHTML = getCaption();
}

// Run once on start
updatePage();

document.addEventListener('keydown', (e) => {
    console.log(index);
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
        return;
    }
    else {
        index = e.key === 'ArrowLeft' ? Math.max(index - 1, 0) : Math.min(index + 1, categories.length * 10 - 1);
    }
    updatePage();
});

