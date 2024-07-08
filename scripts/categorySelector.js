// Function for selecting category in menu

function confirmCategory(myCategory) {
    const category = categoryMap[myCategory];
    if (category) {
        displayMenu(category.dishes, category.title, category.icon);
    }
    confirmSubategory();
    document.getElementById(myCategory + "Menu").classList.add('opacity');
}

function confirmSubategory() {
    Object.keys(categoryMap).forEach(category => {
        let categoryElement = document.getElementById(category + "Menu");
        if (categoryElement) {
            categoryElement.classList.remove('opacity');
        }
    });
}

//Selection in menu (drinks or food)
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

function addOpacity(nameOfSelection) {
    document.getElementById('dishes-selection').classList.remove('opacity');
    document.getElementById('beverages-selection').classList.remove('opacity');
    document.getElementById(nameOfSelection).classList.add('opacity');
}

function removeOpacity() {
    document.querySelectorAll('.nameOfSelection').forEach(label => {
        label.classList.remove('opacity');
    });
}

//Selection of order delivery
function selectDeliveryOption(option) {
    updateOptionSelection(option);
    if (option == 'delivery' && delivery == false) {
        ifOptionForSelectDelivery(option);
    } else if(delivery == true) {
        elseOptionForSelectDelivery();
    } 
}

function updateOptionSelection(option) {
    choiceOption = [option];
    document.querySelectorAll('.option').forEach(label => {
        label.classList.remove('selected');
    });
    document.getElementById(option).classList.add('selected');
    document.getElementById('finallyOrder').classList.remove('d-none');
    document.getElementById('finallyOrder').innerHTML = 'To order';
}

function ifOptionForSelectDelivery(option){
    delivery = true;
    document.getElementById(option).innerHTML += '(+5,00€)';
    let priceWithDelivery = 5 + determinePrice();
    let euPriceWithDelivery = formatToEuro(priceWithDelivery);
    ReloadUpdatePrice(euPriceWithDelivery);
}

function elseOptionForSelectDelivery(){
    document.getElementById('finallyOrder').classList.add('d-none');
    document.getElementById('delivery').classList.remove('selected');
    delivery = false;
    let priceWithoutDelivery = determinePrice() - 5;
    let euPriceWithoutDelivery = formatToEuro(priceWithoutDelivery);
    ReloadUpdatePrice(euPriceWithoutDelivery);
    document.getElementById('delivery').innerHTML = 'Delivery ';
}