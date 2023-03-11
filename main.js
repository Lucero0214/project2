document.addEventListener('DOMContentLoaded', init);
var myInterval = setInterval(changeSlide, 2000);

function init() {
  //create shortcut vars
  const back_btn = document.querySelector(".back-btn");
  const next_btn = document.querySelector(".next-btn");
  const frame = document.querySelector(".frame");
  const slides = frame.querySelectorAll("img");

  //with JS active, hide all images
  slides.forEach((slide) => {
    slide.classList.add("hide");
  });
  
  // show the first slide
  slides[0].classList.remove("hide");
  
   next_btn.addEventListener("click", changeSlide);
   back_btn.addEventListener("click", changeSlide);
}


function changeSlide(e) {
  if(e) {
    // stop link from trying to reload page
    e.preventDefault();
    clearInterval(myInterval);
  }
    
    //shortcut vars
    const frame = document.querySelector(".frame");
    const slides = frame.querySelectorAll("img");
    let showing = document.querySelector(".current");
    let nextUp = "";
    let caption = document.getElementById('caption');
  
    if(!e || e.target.className == 'next-btn') {
      nextUp = showing.nextElementSibling;
    } else {
      nextUp = showing.previousElementSibling;
    }
    
    // deactivate current image
    showing.classList.add("hide");
    showing.classList.remove("current");
    
    //make sure next image is there
    if (!nextUp) {
      nextUp = slides[slides.length - 1];
    }
  
    if (nextUp.nodeName !== "IMG") {
      nextUp = slides[0];
    }
  
    // activate next image
    nextUp.classList.remove("hide");
    nextUp.classList.add("current");
  
  //grab the alt text from current image 
  let altText = nextUp.getAttribute('alt');

  //change the figcaption  to the alt text
  caption.innerText = altText;
};

//form section 

const form = document.getElementById('formSubmit').addEventListener('click', function (event) {
  event.preventDefault();
});

form.elements[0];
form.elements['name'];
form.elements['name'];

form.elements[1];
form.elements['phone'];
form.elements['phone'];

const name = form.elements['name'];
const phone = form.elements['phone'];

let fullName = name.value;
let emailAddress = phone.value;