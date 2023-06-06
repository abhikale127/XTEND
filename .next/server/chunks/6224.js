"use strict";
exports.id = 6224;
exports.ids = [6224];
exports.modules = {

/***/ 6224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Clients1)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/sections/clients1.json
const clients1_namespaceObject = JSON.parse('[{"id":1,"lightImage":"/img/clients/brands/light/1.png","darkImage":"/img/clients/brands/dark/01.png","url":"www.avo.com"},{"id":2,"lightImage":"/img/clients/brands/light/2.png","darkImage":"/img/clients/brands/dark/02.png","url":"www.avo.com"},{"id":3,"lightImage":"/img/clients/brands/light/3.png","darkImage":"/img/clients/brands/dark/03.png","url":"www.avo.com"},{"id":4,"lightImage":"/img/clients/brands/light/4.png","darkImage":"/img/clients/brands/dark/04.png","url":"www.avo.com"},{"id":5,"lightImage":"/img/clients/brands/light/5.png","darkImage":"/img/clients/brands/dark/05.png","url":"www.avo.com"},{"id":6,"lightImage":"/img/clients/brands/light/6.png","darkImage":"/img/clients/brands/dark/06.png","url":"www.avo.com"},{"id":7,"lightImage":"/img/clients/brands/light/7.png","darkImage":"/img/clients/brands/dark/07.png","url":"www.avo.com"},{"id":8,"lightImage":"/img/clients/brands/light/8.png","darkImage":"/img/clients/brands/dark/08.png","url":"www.avo.com"}]');
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(8636);
;// CONCATENATED MODULE: ./src/components/Clients1/index.jsx

/* eslint-disable @next/next/no-img-element */ 


const Clients1 = ({ theme , subBG  })=>{
    var first = clients1_namespaceObject.slice(0, clients1_namespaceObject.length / 2);
    var second = clients1_namespaceObject.slice(4, clients1_namespaceObject.length);
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: `clients section-padding ${subBG ? "sub-bg" : ""}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
            id: "About",
            src: "/img/slid/5.png",
            alt: "image"
        })
    }));
};
/* harmony default export */ const components_Clients1 = (Clients1);


/***/ })

};
;