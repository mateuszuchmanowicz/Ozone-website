//Jquery

// const hamburger = $(".col-hamburger-icon");
// const hamburgerIcon = $(".hamburger-icon");
// const hamburgerMenu = $(".hamburger-menu");


// const hamburgerRotate = $(hamburger).click(function(){
// 	$(hamburgerIcon).toggleClass("hamburger-icon-rotate");
// 	$(hamburgerMenu).toggleClass("hamburger-slide");
// 	const li = document.querySelectorAll("li");
// 	$(li).toggleClass("asd")
// 	console.log(li);
// });


//Vanilla JS

//Rotate hamburger Icon and slide a nav
const hamburger = document.querySelector('.col-hamburger-icon');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerItems = [...document.querySelectorAll('.menu-item')];

let index = 0;
let time = 100;

const slideHamburgerItems = function(){
	setTimeout(function(){
		hamburgerItems[index].classList.toggle('slide-item');
		index++;
		if(index < hamburgerItems.length){
			slideHamburgerItems();
		}else if (index == hamburgerItems.length){
			index = 0;
		}
	}, time);
}

const hamburgerRotate = function(){
	hamburgerIcon.classList.toggle('hamburger-icon-rotate');
	hamburgerMenu.classList.toggle('hamburger-slide');
	slideHamburgerItems();
}



hamburger.addEventListener("click", hamburgerRotate);
