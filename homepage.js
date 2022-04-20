
document.querySelector('.hambur').addEventListener('click', () => {
    document.querySelector('.infoBox').classList.toggle('show');
})

window.addEventListener("resize", () => {
    document.querySelector('.infoBox').classList.remove('show');

});

document.querySelector('.up').addEventListener('click', () => {
    window.scrollTo(0, 0);
})


//carousel-start
const slides = document.querySelectorAll('.slide');
const formerImg = document.querySelector('.formerImg');
const nextImg = document.querySelector('.nextImg');
const dots = document.querySelectorAll('.dotClass');


slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
})

let count = 0;
formerImg.addEventListener('click', () => {
    count--;
    changeImg();
})

nextImg.addEventListener('click', () => {
    count++;
    changeImg();
})

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        count = index;
        changeImg();
    })
})

function changeImg() {
    slides.forEach((slide, index) => {
        if (count > slides.length - 1) {
            count = 0;
        }

        if (count < 0) {
            count = slides.length - 1;
        }

        slide.style.transform = `translateX(-${count * 100}%)`
    })
}


setInterval(() => {
    count++;
    changeImg();
}, 3000);

//carorsel-end






