/**
 * Displays a popup form for necessary data based on the selected order option.
 * 
 * @param {string} option - The selected order option (pickup, dineIn, delivery).
 */
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

/**
 * Handles the pickup option by prompting the user to enter their name.
 * 
 * @returns {string} - A message with the entered name or an error message.
 */
function handlePickup() {
    let name = prompt("Enter Your Name:");
    if (name === null || name === "") {
        return errorMessageName();
    } else {
        return messageName(name);
    }
}

/**
 * Handles the dine-in option by prompting the user to enter their table number.
 * 
 * @returns {string} - A message with the entered table number or an error message.
 */
function handleDineIn() {
    let tableNumber = prompt("Enter Your table number:");
    if (tableNumber === null || tableNumber.trim() === "" || isNaN(tableNumber)) {
        return errorMessageTableNumber();
    } else {
        return messageTableNumber(tableNumber);
    }
}

/**
 * Handles the delivery option by prompting the user to enter their address.
 * 
 * @returns {string} - A message with the entered address or an error message.
 */
function handleDelivery() {
    let address = prompt("Enter your delivery address in the following format:\nStreet HouseNumber, PostalCode City");
    if (address === null || !isValidAddress(address)) {
        return errorMessageAddress();
    } else {
        return messageAddress(address);
    }
}

/**
 * Validates the entered address format.
 * 
 * @param {string} address - The entered address.
 * @returns {boolean} - True if the address format is valid, false otherwise.
 */
function isValidAddress(address) {
    if (address.trim() === "") {
        return false;
    }
    let addressPattern = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    return addressPattern.test(address);
}
