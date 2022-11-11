

// let slidePosition = 0;
// const slides = document.getElementsByClassName("mySlide")
// const totalSlides = slides.length;
// console.log(totalSlides)

// document.
//    getElementById("slide_btn--next").
//     addEventListener("click",function(){
//         moveToNextSlide();
// });
// document.
//    getElementById("slide_btn--prev").
//     addEventListener("click",function(){
//        moveToPrevSlide();
// });

// function updateSlidePosition() {
//     //used forloop to loop through our slides element
//   for(let slide of slides){
//     slide.classList.add("mySlide--visible")
//   }
 
//    slides[slidePosition].classList.add("mySlide");
// }




// function moveToNextSlide() {
//     if (slidePosition == totalSlides -1) {
//         slidePosition = 0;
//     }else{
//         slidePosition++
//     }
//     updateSlidePosition();
// }

// function moveToPrevSlide() {
//     if (slidePosition == 0) {
//         slidePosition = totalSlides -1;
//     }else{
//         slidePosition--;
//     }
//     updateSlidePosition();
// }


let slideIndex= 1;
showSlides(slideIndex);



function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n){
  let i;
  let slides = document.getElementsByClassName("mySlide");
  if (n > slides.length) {
    slideIndex=1
  }
  if (n < 1) {
    slideIndex= slides.length
  }
  for(i = 0; i < slides.length;i++){
    slides[i].style.display="none"
  }
  slides[slideIndex-1].style.display="block";
}
showSlides()

