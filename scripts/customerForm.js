//Form for necessary data for order taking
function popup(option) {
    let message = '';
    switch (option) {
        case 'pickup':
            message = handlePickup();
            break;
        case 'dineIn':
            message = handleDineIn();
            break;
        case 'delivery':
            message = handleDelivery();
            break;
        default:
            message = 'Invalid option selected.';
            break;
    }
    document.getElementById('cart').innerHTML = message;
}

function handlePickup() {
    let name = prompt("Enter Your Name:");
    if (name === null || name === "") {
        return errorMessageName();
    } else {
        return messageName(name);
    }
}

function handleDineIn() {
    let tableNumber = prompt("Enter Your table number:");
    if (tableNumber === null || tableNumber.trim() === "" || isNaN(tableNumber)) {
        return errorMessageTableNumber();
    } else {
        return messageTableNumber(tableNumber);
    }
}

function handleDelivery() {
    let address = prompt("Enter your delivery address in the following format:\nStreet HouseNumber, PostalCode City");
    if (address === null || !isValidAddress(address)) {
        return errorMessageAddress();
    } else {
        return messageAddress(address);
    }
}

function isValidAddress(address) {
    if (address.trim() === "") {
        return false;
    }
    let addressPattern = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    return addressPattern.test(address);
}