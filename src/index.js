import sum from './sum';
import axios from 'axios';
const Carousel = require("vanilla-js-carousel");
// const cors = require(cors)

console.log(sum(1,2));

const main = async () => {
  const response = await axios.get("https://project.wnyc.org/ice-cream/data/places.json")
  // use.cors()
  console.log(response.data)
}

///button here on click pops open modal getting button from index.html
///add event listener here 

// let button = document.getElementById('modal-btn')
// // console.log(button) 
// button.addEventListener('click', function(e){
//   popUpModal
//   console.log(e.target)
// })


const popUpModal = () => {
  ///in here goes the form and box for chat 
  console.log('workss?')
}


var carousel = new Carousel({
  elem: 'carousel',    // id of the carousel container
  autoplay: false,      // starts the rotation automatically
  infinite: true,      // enables infinite mode
  interval: 1500,      // interval between slide changes
  initial: 0,          // slide to start with
  dots: false,          // show navigation dots
  arrows: true,        // show navigation arrows
  buttons: false,      // hide <play>/<stop> buttons,
  btnStopText: 'Pause' // <stop> button text
});

carousel.show(1);

// Move to the next slide
carousel.next();


main();



