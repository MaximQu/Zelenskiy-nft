/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("// swiper-slider\r\nconst swiper = new Swiper('.swiper', {\r\n   // Optional parameters\r\n   direction: 'horizontal',\r\n   loop: true,\r\n   slidesPerView: 'auto',\r\n   spaceBetween: 25,\r\n   grabCursor: true,\r\n   loopedSlides: 5,\r\n   centeredSlides: true,\r\n   followFinger: true,\r\n   longSwipes: false,\r\n   speed: 4000,\r\n   autoplay: {\r\n      delay: 100,\r\n      disableOnInteraction: false,\r\n      pauseOnMouseEnter: true,\r\n   },\r\n});\r\n\r\n// burger-menu\r\nconst burgerMenu = () => {\r\n   const burger = document.querySelector('.burger'),\r\n      nav = document.querySelector('.nav'),\r\n      navLinks = nav.querySelectorAll('.nav__link');\r\n\r\n   burger.addEventListener('click', () => {\r\n      nav.classList.toggle('active')\r\n      burger.classList.toggle('active')\r\n   });\r\n\r\n   navLinks.forEach((navLink) => {\r\n      navLink.addEventListener('click', () => {\r\n         nav.classList.remove('active')\r\n         burger.classList.remove('active')\r\n      })\r\n   });\r\n};\r\n\r\nburgerMenu();\r\n\r\n// Fade-in\r\n$(window).scroll(function () {\r\n   $('.steps, .goal , .info , .team , .faq').each(function () {\r\n      let imagePos = $(this).offset().top;\r\n\r\n      let topOfWindow = $(window).scrollTop();\r\n      if (imagePos < topOfWindow + 900) {\r\n         $(this).addClass('animate__animated animate__fadeIn');\r\n      }\r\n   });\r\n});\r\n\n\n//# sourceURL=webpack://max/./src/assets/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	
/******/ })()
;