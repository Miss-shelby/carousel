

let slidePosition = 0;
const slides = document.getElementsByClassName("mySlide")
const totalSlides = slides.length;
console.log(totalSlides)

document.
   getElementById("slide_btn--next").
    addEventListener("click",function(){
        moveToNextSlide();
});
document.
   getElementById("slide_btn--prev").
    addEventListener("click",function(){
       moveToPrevSlide();
});

function updateSlidePosition() {
    //used forloop to loop through our slides element
  for(let slide of slides){
    console.log(slide)
   
  }
 
   slides[slidePosition].classList.add();
}
updateSlidePosition()



function moveToNextSlide() {
    if (slidePosition == totalSlides -1) {
        slidePosition = 0;
    }else{
        slidePosition++
    }
    updateSlidePosition();
}

function moveToPrevSlide() {
    if (slidePosition == 0) {
        slidePosition = totalSlides -1;
    }else{
        slidePosition--;
    }
    updateSlidePosition();
}