/**
 * Deletes a partial order from the cart.
 * 
 * @param {string} nameOfOrder - The name of the order item to delete.
 */
function deletePartialOrder(nameOfOrder) {
    handleLastItem(nameOfOrder);
    addition = false;
    if (document.getElementById('myOrderCart').innerHTML === '') {
        delivery = false;
    }
}

/**
 * Increases the quantity of a product in the cart.
 * 
 * @param {string} nameOfOrder - The name of the order item to increase quantity.
 */
function addQuantity(nameOfOrder) {
    addition = true;
    let newQuantityofOrder = document.getElementById(nameOfOrder + '-quantity');
    let newNumber = parseInt(newQuantityofOrder.innerHTML);
    let newOrder = newNumber + 1;
    updateQuantityAndPrice(nameOfOrder, newOrder, newNumber, newQuantityofOrder);
}

/**
 * Decreases the quantity of a product in the cart.
 * 
 * @param {string} nameOfOrder - The name of the order item to decrease quantity.
 */
function deleteQuantity(nameOfOrder) {
    addition = false;
    let newQuantityofOrder = document.getElementById(nameOfOrder + '-quantity');
    let newNumber = parseInt(newQuantityofOrder.innerHTML);
    if (newNumber > 1) {
        let newOrder = newNumber - 1;
        updateQuantityAndPrice(nameOfOrder, newOrder, newNumber, newQuantityofOrder);
    } else {
        handleLastItem(nameOfOrder);
    }
}

/**
 * Updates the quantity and price of a product in the cart.
 * 
 * @param {string} nameOfOrder - The name of the order item.
 * @param {number} newOrder - The new order quantity.
 * @param {number} newNumber - The previous order quantity.
 * @param {HTMLElement} newQuantityofOrder - The HTML element displaying the quantity.
 */
function updateQuantityAndPrice(nameOfOrder, newOrder, newNumber, newQuantityofOrder) {
    updateInnerHTML(newQuantityofOrder, newOrder);
    let priceChange = updateProductPrice(nameOfOrder, newNumber, newOrder);
    updateSum(priceChange);
}

/**
 * Updates the price of a product in the cart.
 * 
 * @param {string} nameOfOrder - The name of the order item.
 * @param {number} newNumber - The previous order quantity.
 * @param {number} newOrder - The new order quantity.
 * @returns {number} - The price change.
 */
function updateProductPrice(nameOfOrder, newNumber, newOrder) {
    let priceOfProduct = document.getElementById(nameOfOrder + '-price');
    let priceToInt = formatToFlo(priceOfProduct);
    let priceWithoutOneProduct = calculatePriceWithoutOneProduct(priceToInt, newNumber, newOrder);
    let euPriceWithoutOneProduct = formatToEuro(priceWithoutOneProduct);
    updateInnerHTML(priceOfProduct, euPriceWithoutOneProduct);
    return priceToInt / newNumber;
}

/**
 * Updates the total sum in the cart.
 * 
 * @param {number} priceChange - The change in price to be applied.
 */
function updateSum(priceChange) {
    let sum = document.getElementById('withoutDelivery');
    let newSumFloat = formatToFlo(sum);
    if (addition == false) {
        let newSumMinus = newSumFloat - priceChange;
        updateNewSum(sum, newSumMinus);
    } else {
        let newSumPlus = newSumFloat + priceChange;
        updateNewSum(sum, newSumPlus);
    }
}

/**
 * Updates the displayed total sum in the cart.
 * 
 * @param {HTMLElement} sum - The HTML element displaying the sum.
 * @param {number} newSum - The new sum to be displayed.
 */
function updateNewSum(sum, newSum) {
    let euNewSum = formatToEuro(newSum);
    updateInnerHTML(sum, euNewSum);
}

/**
 * Handles the removal of the last item in the cart.
 * 
 * @param {string} nameOfOrder - The name of the order item to remove.
 */
function handleLastItem(nameOfOrder) {
    let lastPrice = document.getElementById(nameOfOrder + '-price');
    let lastPriceFloat = formatToFlo(lastPrice);
    removeOrderItem(nameOfOrder);
    handleContentProof(nameOfOrder);
    let sum = document.getElementById('withoutDelivery');
    let newSumFloat = formatToFlo(sum);
    let newSum = calculateNewSum(newSumFloat, lastPriceFloat);
    updateInnerHTML(sum, formatToEuro(newSum));
    if (sum.innerHTML === '0,00') {
        resetOrder();
    }
}

/**
 * Removes an order item from the cart.
 * 
 * @param {string} nameOfOrder - The name of the order item to remove.
 */
function removeOrderItem(nameOfOrder) {
    document.getElementById(nameOfOrder + 'More').remove();
}

/**
 * Updates the contentProof array by removing the specified order item.
 * 
 * @param {string} nameOfOrder - The name of the order item to remove from contentProof.
 */
function handleContentProof(nameOfOrder) {
    let deleteFromContentProof = nameOfOrder + 'ToProof';
    let indexToDelete = contentProof.indexOf(deleteFromContentProof);
    if (indexToDelete !== -1) {
        contentProof.splice(indexToDelete, 1);
    }
}

/**
 * Resets the order, clearing the cart and resetting the order state.
 */
function resetOrder() {
    summed = false;
    updateInnerHTML(document.getElementById('myOrderCart'), '');
    updateInnerHTML(document.getElementById('mySum'), '');
    currentIndex = 0;
    contentProof = [];
    document.getElementById('selection-container').classList.add('d-none');
    document.getElementById('finallyOrder').classList.add('d-none');
}

/**
 * Determines the current price without delivery.
 * 
 * @returns {number} - The price without delivery.
 */
function determinePrice() {
    let withoutDelivery = document.getElementById('withoutDelivery');
    let priceWithoutDelivery = formatToFlo(withoutDelivery);
    leerContain('withoutDelivery');
    return priceWithoutDelivery;
}

/**
 * Updates the displayed price with the new delivery price.
 * 
 * @param {string} reloadPrice - The new price to display.
 */
function ReloadUpdatePrice(reloadPrice) {
    let withoutDelivery = document.getElementById('withoutDelivery');
    withoutDelivery.innerHTML += `${reloadPrice}`;
}
