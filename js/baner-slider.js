const slideList = [{
    img: '../media/person1.jpg',
    name: 'Marek Kaczmarek',
    text: 'Cześć, jestem Marek Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, quasi?'
},
{   img: '../media/person2.jpg',
    name: 'Jarek Międziarek',
    text: 'Cześć, jestem Jarek Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, quasi?'
},
{
    img: '../media/person3.jpg',
    name: 'Czarek Browarek',
    text: 'Cześć, jestem Czarek Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, quasi?'
}];
const rightArrow = document.querySelector('i.fa-arrow-right');
const leftArrow = document.querySelector('i.fa-arrow-left');
const sliderImage = document.querySelector('img.slider');
const sliderName = document.querySelector('.name-header');
const sliderQuote = document.querySelector('p.quote');

let slideIndex = 0;
let slideTime = 4000;

const changer = function(){
    slideIndex++;
    sliderImage.animate([{opacity: '0.1'}, {opacity:'1.0'}], {duration: 1000, fill:'forwards'});
    if(slideIndex >= slideList.length){
        slideIndex = 0;
    }
    sliderImage.src = slideList[slideIndex].img;
    sliderName.textContent = slideList[slideIndex].name;
    sliderQuote.textContent = slideList[slideIndex].text;
 
};

let slider = setInterval (changer, slideTime);

const slideForward = function(){
    clearInterval(slider);
    slideIndex++;
    sliderImage.animate([{opacity: '0.1'}, {opacity:'1.0'}], {duration: 1000, fill:'forwards'});
    if(slideIndex >= slideList.length){
        slideIndex = 0;
    }
    sliderImage.src = slideList[slideIndex].img;
    sliderName.textContent = slideList[slideIndex].name;
    sliderQuote.textContent = slideList[slideIndex].text;
    slider = setInterval(changer, slideTime);

}

const slideBackward = function(){
    clearInterval(slider);
    slideIndex--;
    sliderImage.animate([{opacity: '0.1'}, {opacity:'1.0'}], {duration: 1000, fill:'forwards'});
    if(slideIndex < 0){
        slideIndex = 2;
    }
    sliderImage.src = slideList[slideIndex].img;
    sliderName.textContent = slideList[slideIndex].name;
    sliderQuote.textContent = slideList[slideIndex].text;
    slider = setInterval(changer, slideTime);
}
rightArrow.addEventListener('click', slideForward);
leftArrow.addEventListener('click', slideBackward);