const content = document.querySelector('.content');
const   img = document.querySelectorAll('img');

//buttons
const btnprev = document.querySelector('#prev');
const btnnext = document.querySelector('#next');

//counter

let counter = 1;
const size = img[0].clientWidth;

content.style.transform = `translateX(${-size * counter}px)`;

//btnlisters

btnnext.addEventListener('click', ()=>{
    content.classList.add('transition');
    counter++;
    content.style.transform = `translateX(${-size * counter}px)`;
    console.log(counter);
});

btnprev.addEventListener('click', ()=>{
    content.classList.add('transition');
    counter--;
    content.style.transform = `translateX(${-size * counter}px)`;
    console.log(counter);
});

content.addEventListener('transitionend', () =>{
    if (img[counter].matches('#lastimg')) {
        content.classList.remove('transition');
        counter = img.length -2;
        content.style.transform = `translateX(${-size * counter}px)`;
    }
})

content.addEventListener('transitionend', () =>{
    if (img[counter].matches('#firstimg')) {
        content.classList.remove('transition');
        counter = img.length -6;
        content.style.transform = `translateX(${-size * counter}px)`;
    }
})
