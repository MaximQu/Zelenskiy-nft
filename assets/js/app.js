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

eval("// Burger-menu\r\nconst burgerMenu = () => {\r\n   const burger = document.querySelector('.burger'),\r\n      nav = document.querySelector('.nav'),\r\n      navLinks = nav.querySelectorAll('.nav__link');\r\n\r\n   burger.addEventListener('click', () => {\r\n      nav.classList.toggle('active');\r\n      burger.classList.toggle('active')\r\n   });\r\n\r\n   navLinks.forEach((navLink) => {\r\n      navLink.addEventListener('click', () => {\r\n         nav.classList.remove('active')\r\n         burger.classList.remove('active')\r\n      })\r\n   });\r\n};\r\n\r\n// Fade-in\r\nconst animateOnScroll = () => {\r\n   window.addEventListener('scroll', () => {\r\n      const items = document.querySelectorAll(\r\n         '.steps, .info, .goal, .slider, .exposition, .description, .team, .faq'\r\n      );\r\n      const topOfWindow = window.pageYOffset;\r\n\r\n      items.forEach(e => {\r\n         const imageRect = e.getBoundingClientRect().top + window.scrollY;\r\n         if (imageRect < topOfWindow + 900) {\r\n            e.classList.add('animate__animated');\r\n            e.classList.add('animate__fadeIn');\r\n         };\r\n      });\r\n   });\r\n};\r\n\r\nif( window.location.pathname === '/index.html' || window.location.pathname === '/') {\r\n   // switcherEN\r\n   const switcherEn = () => {\r\n      const switchListEn = document.querySelector('.exposition__list--en'),\r\n      switchBtnEn = document.querySelector('.exposition__btn--en');\r\n      console.log(switchBtnEn)\r\n      switchBtnEn.addEventListener('click', () => {\r\n         switchListEn.classList.toggle('active');\r\n      });\r\n   };\r\n\r\n   switcherEn();\r\n};\r\n\r\nif( window.location.pathname === '/index-ua.html' || window.location.pathname === '/' ) {\r\n   // switcherUA\r\n   const switcherUa = () => {\r\n      const switchListUa = document.querySelector('.exposition__list--ua'),\r\n      switchBtnUa = document.querySelector('.exposition__btn--ua');\r\n      console.log(switchBtnUa)\r\n      switchBtnUa.addEventListener('click', () => {\r\n         switchListUa.classList.toggle('active');\r\n      });\r\n   };\r\n\r\n   switcherUa();\r\n};\r\n\r\n\r\nif (window.location.pathname === '/index.html' || window.location.pathname === '/index-ua.html' || window.location.pathname === '/' ) {\r\n\r\n   burgerMenu();\r\n\r\n   animateOnScroll();\r\n\r\n   // swiper-slider\r\n   const swiper = new Swiper('.swiper', {\r\n      direction: 'horizontal',\r\n      loop: true,\r\n      slidesPerView: 'auto',\r\n      spaceBetween: 25,\r\n      grabCursor: true,\r\n      loopedSlides: 10,\r\n      centeredSlides: true,\r\n      followFinger: true,\r\n      longSwipes: false,\r\n      speed: 4000,\r\n      autoplay: {\r\n         delay: 100,\r\n         disableOnInteraction: false,\r\n         pauseOnMouseEnter: true,\r\n      },\r\n   });\r\n\r\n   // Vanilla js\r\n   VanillaTilt.init(document.querySelectorAll(\".card\"), {\r\n      max: 15,\r\n      speed: 400,\r\n      glare: true,\r\n      \"max-glare\": .5,\r\n   });\r\n};\r\n\n\n//# sourceURL=webpack://max/./src/assets/js/app.js?");

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