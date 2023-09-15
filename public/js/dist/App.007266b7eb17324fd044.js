/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const NavBar = props => {
  return /*#__PURE__*/React.createElement("nav", {
    className: "NavBar"
  }, props.routes.map(_ref => {
    let {
      key,
      path
    } = _ref;
    return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Link, {
      key: key,
      to: path
    }, key);
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "./src/router/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById("app"));
root.render( /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/React.createElement(_router__WEBPACK_IMPORTED_MODULE_2__["default"], null)));

/***/ }),

/***/ "./src/pages/Contact.js":
/*!******************************!*\
  !*** ./src/pages/Contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function Contact(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ContactPage"
  }, /*#__PURE__*/React.createElement("center", null, /*#__PURE__*/React.createElement("h1", {
    className: "findMe"
  }, "Come Find Me"), /*#__PURE__*/React.createElement("div", {
    className: "email"
  }, "Email: tjc6254@gmail.com || GitHub: TJCole03 || Region: Central PA/ Philadelphia || LinkedIn:", /*#__PURE__*/React.createElement("a", {
    href: "url"
  }, " https://www.linkedin.com/in/tj-cole/ "))));
}

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function Home(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "HomePage"
  }, /*#__PURE__*/React.createElement("center", null, /*#__PURE__*/React.createElement("h1", {
    className: "header"
  }, "T.J. Cole"), /*#__PURE__*/React.createElement("img", {
    className: "proPic",
    src: "./img/picOfMe.png"
  }), /*#__PURE__*/React.createElement("div", {
    className: "div"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "intro"
  }, " Welcome to my portfolio. "), /*#__PURE__*/React.createElement("h4", {
    className: "titles"
  }, "Software Engineer | Frontend Developer | Full-stack Developer | Sustainability Aficionado "), /*#__PURE__*/React.createElement("h4", {
    className: "based"
  }, "I am based out of Central Pennsylvania but am open to working remotely for companies around the Philadelphia area. My passions in tech include frontend development using MERN software, collaborating with other programmers to solve complex problems, and integrating my background in Sustainability Studies with technology.")), /*#__PURE__*/React.createElement("div", {
    className: "skills"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "skillListHeader"
  }, " Skills and Aptitudes: "), /*#__PURE__*/React.createElement("h3", {
    className: "skillList"
  }, "HTML/CSS | Javascript | React | MERN Stack | Front-End  | Styling")), /*#__PURE__*/React.createElement("div", {
    className: "storyContainer"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "storyHeader"
  }, " My Story "), /*#__PURE__*/React.createElement("h3", {
    className: "story"
  }, " I began my journey into software development in the most unexpected place: the woods in Pennsylvania. I remember how I first realized our human connection with nature, and how I developed my passion for environmental sustainability. I decided to major in Sustainability Studies with a concentration in Sustainable Agriculture. Originally, I wanted to own and run urban gardens to help out with our nations problems with food deserts. Fast-forward to graduation: I left my university with a wealth of knowledge about issues with sustainability. I did not know how, or where, I could apply my skills.", /*#__PURE__*/React.createElement("br", null), "I found a home primarily in the greenhouse and landscaping industries. While working these jobs helped me develop a wide variety of skills, I was still thirsting to be able to apply my college degree somewhere.", /*#__PURE__*/React.createElement("br", null), "I found software engineering on a whim, based on suggestions from friends and peers amid the conversations we shared. Looking into this field made becoming an engineer feel as though I would set aside my knowledge of sustainability for something else. I could not be happier to be wrong! Software engineering gave me a plethora of tools and skills for me to work in the sustainability sector and allows me to dive further into my passion for stewardship."), /*#__PURE__*/React.createElement("h2", {
    className: "susHeader"
  }, " Why Sustainability? "), /*#__PURE__*/React.createElement("h3", {
    className: "susStory"
  }, " Since I was a child, I never understood why humans have treated our planet the way we have.", /*#__PURE__*/React.createElement("br", null), "My journey with sustainability", /*#__PURE__*/React.createElement("br", null))), /*#__PURE__*/React.createElement("a", {
    href: "./img/Resume.pdf"
  }, " ", /*#__PURE__*/React.createElement("h1", null, "Resume "))));
}

/***/ }),

/***/ "./src/pages/Projects.js":
/*!*******************************!*\
  !*** ./src/pages/Projects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ About)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function About(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ProjectPage"
  }, /*#__PURE__*/React.createElement("center", null, /*#__PURE__*/React.createElement("h1", null, "My ", props.page), /*#__PURE__*/React.createElement("div", {
    className: "solitaireContainer"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "solitaire"
  }, "Solitaire Game w/ Vanilla Javascript"), /*#__PURE__*/React.createElement("h3", null, " ", /*#__PURE__*/React.createElement("a", {
    href: "url"
  }, " https://github.com/TJCole03/unit-1-project "), " "), /*#__PURE__*/React.createElement("h3", {
    className: "projectDesc"
  }, " This was my very first project in Javascript. Let's be honest: I bit off more than I could chew and the game was not complete in time. However, I got fantastic leeway into finishing my first solitaire game for the future and learned a lot about what there is to learn in the world of code. Click the link to my github repo to see more information!"), /*#__PURE__*/React.createElement("img", {
    className: "solitaireImg",
    src: "./img/Solitaire_cards_out.png"
  })), /*#__PURE__*/React.createElement("div", {
    className: "tomatoesContainer"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "tomatoes"
  }, "Tomato Varieties API"), /*#__PURE__*/React.createElement("h3", null, " ", /*#__PURE__*/React.createElement("a", {
    href: "url"
  }, " https://github.com/TJCole03/Tomatoes "), " "), /*#__PURE__*/React.createElement("h3", {
    className: "projectDesc"
  }, " This is a basic API for a database for logging novel tomato varieties bred and propagated by university students around the world. Every year we have new varieties of tomato that get bred in academic institutions. I want to make a centralized database for university students to share their new findings with each other and fellow researchers."), /*#__PURE__*/React.createElement("img", {
    className: "tomatoERD",
    src: "./img/tomato-erd.png"
  })), /*#__PURE__*/React.createElement("div", {
    className: "animalContainer"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "animal"
  }, "MERN Stack Cafe"), /*#__PURE__*/React.createElement("h3", null, " ", /*#__PURE__*/React.createElement("a", {
    href: "url"
  }, " https://github.com/TJCole03/mern-cafe "), " "), /*#__PURE__*/React.createElement("h3", null, " ", /*#__PURE__*/React.createElement("a", {
    href: "url"
  }, " https://animaldrums.tjcole.me/ "), " "), /*#__PURE__*/React.createElement("h3", {
    className: "projectDesc"
  }, " This is my first forray into the world of the MERN stack (Mongoose, Express, React, Node.js), where I heavily retrofitted a food menu to my own whimsy."), /*#__PURE__*/React.createElement("img", {
    className: "animalDrumsImg",
    src: "./img/animaldrums.png"
  }))));
}

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/NavBar */ "./src/components/NavBar.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ "./src/router/routes.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");



const AppRouter = () => {
  return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.BrowserRouter, null, /*#__PURE__*/React.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_0__["default"], {
    routes: _routes__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Routes, null, _routes__WEBPACK_IMPORTED_MODULE_1__["default"].map(_ref => {
    let {
      Component,
      key,
      path
    } = _ref;
    return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
      key: key,
      path: path,
      element: /*#__PURE__*/React.createElement(Component, {
        page: key
      })
    });
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppRouter);

/***/ }),

/***/ "./src/router/routes.js":
/*!******************************!*\
  !*** ./src/router/routes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_Projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/Projects */ "./src/pages/Projects.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Home */ "./src/pages/Home.js");
/* harmony import */ var _pages_Contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Contact */ "./src/pages/Contact.js");



const routes = [{
  Component: _pages_Contact__WEBPACK_IMPORTED_MODULE_2__["default"],
  key: 'Contact',
  path: '/contact'
}, {
  Component: _pages_Home__WEBPACK_IMPORTED_MODULE_1__["default"],
  key: 'Home',
  path: '/'
}, {
  Component: _pages_Projects__WEBPACK_IMPORTED_MODULE_0__["default"],
  key: 'Projects',
  path: '/Projects'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"App": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbig_poppa_code_react_starter_kit"] = self["webpackChunkbig_poppa_code_react_starter_kit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_react-dom_client_js-node_modules_react-router-dom_dist_index_js"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=App.95613e3b2751b2d54432f69b48a4d94d.js.map