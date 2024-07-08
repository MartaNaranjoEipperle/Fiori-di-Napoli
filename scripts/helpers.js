function formatToEuro(price) {
    return price.toFixed(2).replace('.', ',');
}

function formatToFlo(element){
    return parseFloat(element.innerHTML.replace(',', '.'))
}

function calculateTotalPrice(price, quantity) {
    return (+price) * quantity;
}

function leerContain(id){
    let containToLeer = document.getElementById(id);
    containToLeer.innerHTML = ''; 
    return containToLeer;
}

function updateInnerHTML(element, content) {
    element.innerHTML = content;
}

function calculatePriceWithoutOneProduct(price, newNumber, newOrder) {
    return price / newNumber * newOrder;
}

function calculateNewSum(currentSum, priceChange) {
    return currentSum - priceChange;
}