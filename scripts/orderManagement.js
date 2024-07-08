//Delete partial order
function deletePartialOrder(nameOfOrder){
    handleLastItem(nameOfOrder);
    addition = false;
    if(document.getElementById('myOrderCart').innerHTML === ''){
        delivery = false;
    }
}

//Increase product quantity in cart
function addQuantity(nameOfOrder) {
    addition = true;
    let newQuantityofOrder = document.getElementById(nameOfOrder + '-quantity');
    let newNumber = parseInt(newQuantityofOrder.innerHTML);
    let newOrder = newNumber + 1;
    updateQuantityAndPrice(nameOfOrder, newOrder, newNumber, newQuantityofOrder);
}

//Decrease product quantity in cart
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

function updateQuantityAndPrice(nameOfOrder, newOrder, newNumber, newQuantityofOrder) {
    updateInnerHTML(newQuantityofOrder, newOrder);
    let priceChange = updateProductPrice(nameOfOrder, newNumber, newOrder);
    updateSum(priceChange);
}

function updateProductPrice(nameOfOrder, newNumber, newOrder) {
    let priceOfProduct = document.getElementById(nameOfOrder + '-price');
    let priceToInt = formatToFlo(priceOfProduct);
    let priceWithoutOneProduct = calculatePriceWithoutOneProduct(priceToInt, newNumber, newOrder);
    let euPriceWithoutOneProduct = formatToEuro(priceWithoutOneProduct);
    updateInnerHTML(priceOfProduct, euPriceWithoutOneProduct);
    return priceToInt / newNumber;
}

function updateSum(priceChange) {
    let sum = document.getElementById('withoutDelivery');
    let newSumFloat = formatToFlo(sum);
    if(addition == false){
         let newSumMinus = newSumFloat - priceChange;
         updateNewSum(sum, newSumMinus)
    }else{
        let newSumPlus = newSumFloat + priceChange;
        updateNewSum(sum, newSumPlus)
    }
}

function updateNewSum(sum, newSum){
    let euNewSum = formatToEuro(newSum);
    updateInnerHTML(sum, euNewSum);
}

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

function removeOrderItem(nameOfOrder) {
    document.getElementById(nameOfOrder + 'More').remove();
}

function handleContentProof(nameOfOrder) {
    let deleteFromContentProof = nameOfOrder + 'ToProof';
    let indexToDelete = contentProof.indexOf(deleteFromContentProof);
    if (indexToDelete !== -1) {
        contentProof.splice(indexToDelete, 1);
    }
}

function resetOrder() {
    summed = false;
    updateInnerHTML(document.getElementById('myOrderCart'), '');
    updateInnerHTML(document.getElementById('mySum'), '');
    currentIndex = 0;
    contentProof = [];
    document.getElementById('selection-container').classList.add('d-none');
    document.getElementById('finallyOrder').classList.add('d-none');
}


//Price update for respective delivery selection
function determinePrice(){
    let withoutDelivery = document.getElementById('withoutDelivery');
    let priceWithoutDelivery =formatToFlo(withoutDelivery);
    leerContain('withoutDelivery');
    return priceWithoutDelivery;
}

function ReloadUpdatePrice(reloadPrice){
    let withoutDelivery = document.getElementById('withoutDelivery');
    withoutDelivery.innerHTML += `${reloadPrice}`;
}