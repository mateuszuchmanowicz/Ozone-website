const arrowUpContainer = document.querySelector(".arrow-navigation-up");
let prevScrollPosition = window.pageYOffset;

const showArrow = function(){
    let currentScrollPosition = window.pageYOffset;
    if(prevScrollPosition > currentScrollPosition){
        arrowUpContainer.style.visibility = "visible";
    }else {
        arrowUpContainer.style.visibility = "hidden";
    }
    prevScrollPosition = currentScrollPosition;
}

let typingTime = 80;
let letterIndex = 0;
const text = "jeśli tak jak my jesteś zapalonym fanem motocykli... ";
const submainText = document.querySelector(".submain-text h2");

function typing(){
    setTimeout(function(){
        setInterval(function(){
            submainText.textContent += text[letterIndex];
            letterIndex++;
            if(letterIndex >= text.length){
                submainText.textContent = "Cześć, " + text + "Dołącz do nas!";
            }
            
        }, typingTime);
}, 1000);
};

const hold = function(){
    typing();
};



window.addEventListener("scroll", showArrow);
document.addEventListener("DOMContentLoaded", hold);