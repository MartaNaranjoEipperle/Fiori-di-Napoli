/**
 * Confirms the selected category and updates the menu display.
 * 
 * @param {string} myCategory - The selected category.
 */
function confirmCategory(myCategory) {
    const category = categoryMap[myCategory];
    if (category) {
        displayMenu(category.dishes, category.title, category.icon);
    }
    confirmSubategory();
    document.getElementById(myCategory + "Menu").classList.add('opacity');
}

/**
 * Confirms the subcategory by resetting the opacity of all categories.
 */
function confirmSubategory() {
    Object.keys(categoryMap).forEach(category => {
        let categoryElement = document.getElementById(category + "Menu");
        if (categoryElement) {
            categoryElement.classList.remove('opacity');
        }
    });
}

/**
 * Handles the selection of either dishes or beverages in the menu.
 * 
 * @param {string} nameOfSelection - The name of the selection (dishes or beverages).
 */
function selection(nameOfSelection) {
    let selection = leerContain('selection');
    removeOpacity();
    let categories = (nameOfSelection === 'dishes-selection') ? Object.keys(menuLibrary.Dishes) : Object.keys(menuLibrary.Beverages);
    categories.forEach(category => {
        selection.innerHTML += `
            <p onclick="confirmCategory('${category}')" id="${category}Menu">${category}</p>
        `;
    });
    addOpacity(nameOfSelection);
}

/**
 * Adds opacity to the selected menu category.
 * 
 * @param {string} nameOfSelection - The name of the selected category.
 */
function addOpacity(nameOfSelection) {
    document.getElementById('dishes-selection').classList.remove('opacity');
    document.getElementById('beverages-selection').classList.remove('opacity');
    document.getElementById(nameOfSelection).classList.add('opacity');
}

/**
 * Removes opacity from all selection labels.
 */
function removeOpacity() {
    document.querySelectorAll('.nameOfSelection').forEach(label => {
        label.classList.remove('opacity');
    });
}

/**
 * Handles the selection of order delivery option.
 * 
 * @param {string} option - The selected delivery option.
 */
function selectDeliveryOption(option) {
    updateOptionSelection(option);
    if (option == 'delivery' && delivery == false) {
        ifOptionForSelectDelivery(option);
    } else if (delivery == true) {
        elseOptionForSelectDelivery();
    } 
}

/**
 * Updates the selection of the delivery option.
 * 
 * @param {string} option - The selected delivery option.
 */
function updateOptionSelection(option) {
    choiceOption = [option];
    document.querySelectorAll('.option').forEach(label => {
        label.classList.remove('selected');
    });
    document.getElementById(option).classList.add('selected');
    document.getElementById('finallyOrder').classList.remove('d-none');
    document.getElementById('finallyOrder').innerHTML = 'To order';
}

/**
 * Handles the case when the delivery option is selected.
 * 
 * @param {string} option - The selected delivery option.
 */
function ifOptionForSelectDelivery(option) {
    delivery = true;
    document.getElementById(option).innerHTML += '(+5,00€)';
    let priceWithDelivery = 5 + determinePrice();
    let euPriceWithDelivery = formatToEuro(priceWithDelivery);
    ReloadUpdatePrice(euPriceWithDelivery);
}

/**
 * Handles the case when the delivery option is deselected.
 */
function elseOptionForSelectDelivery() {
    document.getElementById('finallyOrder').classList.add('d-none');
    document.getElementById('delivery').classList.remove('selected');
    delivery = false;
    let priceWithoutDelivery = determinePrice() - 5;
    let euPriceWithoutDelivery = formatToEuro(priceWithoutDelivery);
    ReloadUpdatePrice(euPriceWithoutDelivery);
    document.getElementById('delivery').innerHTML = 'Delivery ';
}
