    /*jshint esversion: 6 */

let productContainer = document.getElementById("product-container");

function printToDom(prod) {
    prod.forEach((prod) => {
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", `flex-item ${prod.season_discount}-discount`);
        newDiv.innerHTML = `<h2>${prod.name}</h2>
                            <h3>${prod.department}</h3>
                            <h4 class="regular-price">Price: $${prod.price}</h4>
                            <h4 class="discount-price hidden">Discount Price : $${prod.discount}</h4>`;
        productContainer.appendChild(newDiv);

    });
}

module.exports = printToDom;