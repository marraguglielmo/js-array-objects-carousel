// elements
const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    
    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];
const itemsWrapper = document.querySelector('.my-carousel-images');
const thumbsWrapper = document.querySelector('.my-thumbnails');

let counter = 0;

// inserisco le immagini
images.forEach((slide) =>{
    itemsWrapper.innerHTML += `
    <div class="item my-carousel-item">
    <img class="img-fluid" src="${slide.url}" alt ="${slide.title} picture">
    <div class="item-description px-3">
    <h2>${slide.title}</h2>
    <p>${slide.description}</p>
    </div>
    </div>
    `
    thumbsWrapper.innerHTML += `
    <div class="my-thumbnail thumb">
    <img class="img-fluid" src="${slide.url}" alt="Thumbnail of ${slide.title} picture">
    </div>
    `
});

const btnPrev = document.querySelector('.my-previous');
const btnNext = document.querySelector('.my-next');

// salvo tutti gli elementi immagine e thumb
const imgCollection = document.querySelectorAll('.item')
const thumbCollection = document.querySelectorAll('.thumb')



// click prev
btnPrev.addEventListener('click', scrollPrev);
// click next
btnNext.addEventListener('click', scrollNext);

imgCollection[counter].classList.add('active');
thumbCollection[counter].classList.add('th-active');

const ThumbCollection = document.querySelectorAll('.thumb');
thumbCollection[counter].addEventListener('click', function(){
    console.log('ciao');
});

// FUNCTIONS //////
const btnScorrNext = document.querySelector('.scorr-next');
const btnScorrPrev = document.querySelector('.scorr-prev');
let setNext;
let setPrev;

btnScorrPrev.addEventListener('click', function(){
    clearInterval(setPrev);
    clearInterval(setNext);
    setPrev = setInterval(scrollPrev, 2000);
});

btnScorrNext.addEventListener('click', function(){
    clearInterval(setNext);
    clearInterval(setPrev);
    setNext = setInterval(scrollNext, 2000);
});


function scrollNext(){
    imgCollection[counter].classList.remove('active');
    thumbCollection[counter].classList.remove('th-active');
    counter++;
    if(counter === images.length){
        counter = 0;
    }
    imgCollection[counter].classList.add('active');
    thumbCollection[counter].classList.add('th-active');


}

function scrollPrev(){
    imgCollection[counter].classList.remove('active');
    thumbCollection[counter].classList.remove('th-active');
    counter--;
    if(counter < 0){
        counter = images.length - 1;
    }
    imgCollection[counter].classList.add('active');
    thumbCollection[counter].classList.add('th-active');

}