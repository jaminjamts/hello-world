// import throttle from "lodash/throttle";
// import debounce from "lodash/debounce";

// const scrollThrottle = require("lodash/throttle");
// const browserHeight = require("lodash/debounce");

// class RevealOnScroll {
//   constructor(els, revealPoint) {
//     this.revealPoint = revealPoint;
//     this.itemsToReveal = els;
//     this.browserHeight = window.innerHeight;
//     this.hideInitially();
//     this.scrollThrottle = scrollThrottle
//       .throttle(this.calcCaller, 200)
//       .bind(this);
//     this.events();
//   }

//   events() {
//     window.addEventListener("scroll", this.scrollThrottle.throttle);
//     window.addEventListener(
//       "resize",
//       _.debounce(() => {
//         console.log("resize in browser");
//         this.browserHeight.debounce = window.innerHeight;
//       }, 300)
//     );
//   }

//   calcCaller() {
//     console.log("Scroll funtion worked");
//     this.itemsToReveal.forEach((el) => {
//       if (el.isRevealed == false) {
//         this.calculateIfScrolledTo(el);
//       }
//     });
//   }

//   calculateIfScrolledTo(el) {
//     if (window.scrollY + window.innerHeight > el.offsetTop) {
//       console.log("totsoolol hiigdej baina");
//       let scrollPercent =
//         (el.getBoundingClientRect().y / this.browserHeight) * 100;
//       if (scrollPercent < this.revealPoint) {
//         el.classList.add("reveal-item--is-visible");
//         el.isRevealed = true;
//         if (el.isLastItem) {
//           window.removeEventListener("scroll", this.scrollThrottle);
//         }
//       }
//     }
//   }
//   hideInitially() {
//     this.itemsToReveal.forEach((el) => {
//       el.classList.add("reveal-item");
//       el.isRevealed = false;
//     });
//     this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
//   }
// }

// export default RevealOnScroll;
