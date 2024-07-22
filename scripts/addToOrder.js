/**
 * Adds an item to the order based on the input value.
 * 
 * @param {string} inputId - The ID of the input element.
 * @param {string} name - The name of the item.
 * @param {number} price - The price of the item.
 */
function addToOrder(inputId, name, price) {
    summed = true;
    let { inputElement, errorElement, currentValue, maxValue, minValue } = giveVariable(inputId);
    if (currentValue <= maxValue && currentValue >= minValue) {
        ifCurrentValueInTheRange(name, price, currentValue, errorElement, inputElement);
    } else {
        elseCurrentValue(errorElement, minValue, maxValue, inputElement);
    }
}

/**
 * Displays a message indicating that the item has been added to the cart.
 * 
 * @param {string} name - The name of the item.
 */
function showAddToCartMessage(name) {
    let messageElement = document.getElementById('addToOrderMessage-' + name);
    messageElement.classList.remove('d-none');
    setTimeout(function() {
        messageElement.classList.add('d-none');
    }, 3000);
}

/**
 * Retrieves and returns variables related to the input element.
 * 
 * @param {string} inputId - The ID of the input element.
 * @returns {Object} An object containing the input element, error element, current value, max value, and min value.
 */
function giveVariable(inputId) {
    let inputElement = document.getElementById(inputId);
    let errorElement = document.getElementById(inputId + '-error');
    let currentValue = parseInt(inputElement.value);
    let maxValue = parseInt(inputElement.max);
    let minValue = parseInt(inputElement.min);
    return { inputElement, errorElement, currentValue, maxValue, minValue };
}

/**
 * Handles the case when the current value is within the range.
 * 
 * @param {string} name - The name of the item.
 * @param {number} price - The price of the item.
 * @param {number} currentValue - The current value of the input.
 * @param {HTMLElement} errorElement - The error element.
 * @param {HTMLElement} inputElement - The input element.
 */
function ifCurrentValueInTheRange(name, price, currentValue, errorElement, inputElement) {
    if (window.innerWidth <= 767) {
        showAddToCartMessage(name);
    }
    let sContainer = document.getElementById('selection-container');
    sContainer.classList.remove('d-none');
    errorElement.classList.add('d-none');
    inputElement.value = '0';
    textOrder();
    addOrderingOnCard(name, price, currentValue);
    sContainer.innerHTML = addOrdering();
}

/**
 * Updates the text of the order section.
 */
function textOrder() {
    let text = leerContain('cart');
    text.innerHTML = 'This is your order. Please choose how you would like to receive it.';
}

/**
 * Adds an item to the order card.
 * 
 * @param {string} name - The name of the item.
 * @param {number} price - The price of the item.
 * @param {number} quantity - The quantity of the item.
 */
function addOrderingOnCard(name, price, quantity) {
    let newPrice = calculateTotalPrice(price, quantity);
    let euPrice = formatToEuro(newPrice);
    let contentName = name + 'ToProof';
    if (contentProof.includes(contentName)) {
        updateExistingOrder(name, quantity, newPrice);
    } else {
        addNewOrder(name, quantity, euPrice);
        contentProof.push(contentName);
    }
    calculate();
}

/**
 * Updates an existing order.
 * 
 * @param {string} name - The name of the item.
 * @param {number} quantity - The quantity of the item.
 * @param {number} newPrice - The new price of the item.
 */
function updateExistingOrder(name, quantity, newPrice) {
    let more = document.getElementById(name + 'More');
    let quantityElement = document.getElementById(`${name}-quantity`);
    let quantityValue = parseInt(quantityElement.innerHTML);
    let newQuantity = quantityValue + quantity;
    let idForPrice = (`${name}-price`);
    let newEuPrice = fromFloToStr(newPrice, idForPrice);
    more.innerHTML = renderItemDetails(name, newQuantity, newEuPrice);
}

/**
 * Adds a new order.
 * 
 * @param {string} name - The name of the item.
 * @param {number} quantity - The quantity of the item.
 * @param {string} euPrice - The formatted price in Euro.
 */
function addNewOrder(name, quantity, euPrice) {
    let selection = document.getElementById('myOrderCart');
    selection.innerHTML += `<div id="${name}More" class="flex-start-center b-margin">` + renderItemDetails(name, quantity, euPrice);
}

/**
 * Calculates the total price of the items in the cart and updates the display.
 */
function calculate() {
    let calculateContainer = leerContain('mySum');
    let priceElements = document.querySelectorAll('[id$="-price"]');
    let sum = 0;
    priceElements.forEach(priceElement => {
        let priceValue = formatToFlo(priceElement);
        sum += priceValue;
    });
    let euSum = formatToEuro(sum);
    calculateContainer.innerHTML = `Total amount: <div><b id="withoutDelivery">${euSum}</b><b>€</b><div>`;
}

/**
 * Converts a float price to a string and updates the price element.
 * 
 * @param {number} newPrice - The new price.
 * @param {string} id - The ID of the price element.
 * @returns {string} The formatted price in Euro.
 */
function fromFloToStr(newPrice, id) {
    let priceElement = document.getElementById(id);
    let priceValue = formatToFlo(priceElement);
    let newAddedPrice = priceValue + newPrice;
    let newEuPrice = formatToEuro(newAddedPrice);
    return newEuPrice;
}

/**
 * Handles the case when the current value is outside the range.
 * 
 * @param {HTMLElement} errorElement - The error element.
 * @param {number} minValue - The minimum allowed value.
 * @param {number} maxValue - The maximum allowed value.
 * @param {HTMLElement} inputElement - The input element.
 */
function elseCurrentValue(errorElement, minValue, maxValue, inputElement) {
    errorElement.classList.remove('d-none');
    errorElement.innerHTML = `Please enter a number from ${minValue} to ${maxValue}`;
    inputElement.value = '0';
}
