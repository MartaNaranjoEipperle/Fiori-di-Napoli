/**
 * Formats a price to a string in Euro format.
 * 
 * @param {number} price - The price to format.
 * @returns {string} - The formatted price as a string.
 */
function formatToEuro(price) {
    return price.toFixed(2).replace('.', ',');
}

/**
 * Converts the innerHTML of an element to a float.
 * 
 * @param {HTMLElement} element - The HTML element whose innerHTML needs to be converted.
 * @returns {number} - The converted float value.
 */
function formatToFlo(element) {
    return parseFloat(element.innerHTML.replace(',', '.'));
}

/**
 * Calculates the total price based on unit price and quantity.
 * 
 * @param {number} price - The unit price of the item.
 * @param {number} quantity - The quantity of the item.
 * @returns {number} - The total price.
 */
function calculateTotalPrice(price, quantity) {
    return (+price) * quantity;
}

/**
 * Clears the innerHTML of the specified container and returns the container element.
 * 
 * @param {string} id - The id of the container element to clear.
 * @returns {HTMLElement} - The cleared container element.
 */
function leerContain(id) {
    let containToLeer = document.getElementById(id);
    containToLeer.innerHTML = ''; 
    return containToLeer;
}

/**
 * Updates the innerHTML of the specified element with the provided content.
 * 
 * @param {HTMLElement} element - The element whose innerHTML needs to be updated.
 * @param {string} content - The new content to set.
 */
function updateInnerHTML(element, content) {
    element.innerHTML = content;
}

/**
 * Calculates the price without one product based on the original price, new number, and new order.
 * 
 * @param {number} price - The original price.
 * @param {number} newNumber - The new number of items.
 * @param {number} newOrder - The new order quantity.
 * @returns {number} - The calculated price without one product.
 */
function calculatePriceWithoutOneProduct(price, newNumber, newOrder) {
    return price / newNumber * newOrder;
}

/**
 * Calculates the new sum after subtracting a price change from the current sum.
 * 
 * @param {number} currentSum - The current sum.
 * @param {number} priceChange - The amount to subtract from the current sum.
 * @returns {number} - The new sum.
 */
function calculateNewSum(currentSum, priceChange) {
    return currentSum - priceChange;
}
