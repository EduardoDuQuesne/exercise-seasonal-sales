/*jshint esversion: 6 */

const print = require('./DOMOutputter');

//Add department category to product
const formatData = (prodArray, catArray) => {
    console.log("FORMAT CHECK");
    let newProdArray = prodArray.map(prod => {
        catArray.forEach(cat => {
            if (cat.id === prod.category_id) {
            prod.department = cat.name;
            prod.discount = calculateDiscount(prod.price, cat.discount);
            prod.season_discount = cat.season_discount;
            console.log(prod.discount);
            }
        });
        return prod;
    });
    print(newProdArray);
 };

 function calculateDiscount(price, discount) {
     let salePrice = price * (1 - discount);
     return salePrice.toFixed(2);
 }

module.exports = formatData;


