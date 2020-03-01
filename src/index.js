import sum from './sum';
import axios from 'axios';
const Carousel = require("vanilla-js-carousel");
// const cors = require(cors)


const main = async () => {
  const response = await axios.get("https://project.wnyc.org/ice-cream/data/places.json")
  // use.cors()
  console.log(response.data)
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


let button = document.querySelector('openBtn')

let toggle = function () {
  document.querySelector('.modal').classList.toggle('active') // toggle class for animation
}
button.addEventListener('click', toggle, false);


main();



