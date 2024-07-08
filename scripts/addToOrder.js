//Adding items to the order
function addToOrder(inputId, name, price) {
    summed = true;
    let { inputElement, errorElement, currentValue, maxValue, minValue } = giveVariable(inputId);
    if (currentValue <= maxValue && currentValue >= minValue) {
        ifCurrentValueInTheRange(name, price, currentValue, errorElement, inputElement);
    } else {
        elseCurrentValue(errorElement, minValue, maxValue, inputElement);
    }
}

function showAddToCartMessage(name) {
    let messageElement = document.getElementById('addToOrderMessage-' + name);
    messageElement.classList.remove('d-none');
    setTimeout(function() {
        messageElement.classList.add('d-none');
    }, 3000);
}

function giveVariable(inputId) {
    let inputElement = document.getElementById(inputId);
    let errorElement = document.getElementById(inputId + '-error');
    let currentValue = parseInt(inputElement.value);
    let maxValue = parseInt(inputElement.max);
    let minValue = parseInt(inputElement.min);
    return { inputElement, errorElement, currentValue, maxValue, minValue };
}

// If handling add to order
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

function textOrder() {
    let text = leerContain('cart');
    text.innerHTML = 'This is your order. Please choose how you would like to receive it.';
}

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

function updateExistingOrder(name, quantity, newPrice) {
    let more = document.getElementById(name + 'More');
    let quantityElement = document.getElementById(`${name}-quantity`);
    let quantityValue = parseInt(quantityElement.innerHTML);
    let newQuantity = quantityValue + quantity;
    let idForPrice = (`${name}-price`);
    let newEuPrice = fromFloToStr(newPrice, idForPrice);
    more.innerHTML = renderItemDetails(name, newQuantity, newEuPrice);
}

function addNewOrder(name, quantity, euPrice) {
    let selection = document.getElementById('myOrderCart');
    selection.innerHTML += `<div id="${name}More" class="flex-start-center b-margin">` + renderItemDetails(name, quantity, euPrice);
}

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

function fromFloToStr(newPrice, id) {
    let priceElement = document.getElementById(id);
    let priceValue = formatToFlo(priceElement);
    let newAddedPrice = priceValue + newPrice;
    let newEuPrice = formatToEuro(newAddedPrice);
    return newEuPrice;
}

//Else handling add to order
function elseCurrentValue(errorElement, minValue, maxValue, inputElement) {
    errorElement.classList.remove('d-none');
    errorElement.innerHTML = `Please enter a number from ${minValue} to ${maxValue}`;
    inputElement.value = '0';
}
