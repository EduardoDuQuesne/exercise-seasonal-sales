/*jshint esversion: 6 */

const format = require("./formatter");

require("./DOMInteraction");

let catData = null;
let prodData = null;

const parseCatData = () => {
    catData = JSON.parse(event.target.responseText).categories;
    prodRequest.send();
};

const parseProdData = () => {
    let prodData = JSON.parse(event.target.responseText).products;
    format(prodData, catData);
};

//REQUESTS
// categories XHR
const catRequest = new XMLHttpRequest();
catRequest.addEventListener("load", parseCatData);
catRequest.open("GET", "data/categories.json");
catRequest.send();

//Products XHR
const prodRequest = new XMLHttpRequest();
prodRequest.addEventListener("load", parseProdData);
prodRequest.open("GET", "data/products.json");

