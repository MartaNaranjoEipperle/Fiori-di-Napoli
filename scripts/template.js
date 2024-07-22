/**
 * Generates HTML for ordering options (Dine In, Pickup, Delivery).
 * 
 * @returns {string} - The HTML string for the ordering options.
 */
function addOrdering() {
    return `<label class="option" id="dineIn" onclick="selectDeliveryOption('dineIn')">
               Dine In
            </label>
            <label class="option" id="pickup" onclick="selectDeliveryOption('pickup')">
                Pickup
            </label>
            <label class="option" id="delivery" onclick="selectDeliveryOption('delivery')">
                 Delivery
            </label>`;
}

/**
 * Generates HTML for displaying the menu title with an image background.
 * 
 * @param {string} menuTitle - The title of the menu.
 * @param {string} imageName - The name of the image file (without extension).
 * @returns {string} - The HTML string for the menu title and image.
 */
function schowMenuTitle(menuTitle, imageName) {
    return `<div style="background-image: url('./assets/img/${imageName}.jpg')" alt="" class="menu-image"></div>
    <h2>${menuTitle}</h2>`;
}

/**
 * Generates HTML for displaying a menu item with its details.
 * 
 * @param {Object} item - The menu item object.
 * @param {string} item.name - The name of the menu item.
 * @param {string} item.description - The description of the menu item.
 * @param {string} item.price - The price of the menu item.
 * @returns {string} - The HTML string for the menu item.
 */
function showMenuContent(item) {
    return `<div class="menu-item">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p>${item.price} €</p> 
                <div class="quantity">
                    <input type="number" id="quantity-${item.name}" class="quantity-input" value="0" min="1" max="100" pattern="\\d+" title="Please enter a number between 1 and 100" required>
                    <button class="quantity-btn" onclick="addToOrder('quantity-${item.name}', '${item.name}', '${item.price}')">+</button>
                    <div class="d-none" id="quantity-${item.name}-error"></div>
                    <div id="addToOrderMessage-${item.name}" class="add-to-order-message d-none">Item added to cart!</div>
                </div>
            </div>`;
}

/**
 * Generates HTML for displaying item details in the cart.
 * 
 * @param {string} name - The name of the item.
 * @param {number} quantity - The quantity of the item.
 * @param {string} euPrice - The price of the item formatted in Euro.
 * @returns {string} - The HTML string for the item details.
 */
function renderItemDetails(name, quantity, euPrice) {
    return `<div class="flex-start-center add">
                <button class="quantity-btn" onclick="deleteQuantity('${name}')">-</button>
                <div class="flex-start-center">
                <h4 id="${name}-quantity">${quantity}</h4>
                <h4>x</h4>
                </div>
                <button class="quantity-btn" onclick="addQuantity('${name}')">+</button>
            </div>
            <p id="${name}ToProof" class="w130">${name}</p>
            <div class="flex-start-center delete">
                <div class="flex-start-center">
                    <p id="${name}-price">${euPrice}</p>€
                </div>
                <button class="quantity-btn" onclick="deletePartialOrder('${name}')">x</button>
            </div>`;
}

/**
 * Generates an error message for an invalid table number input.
 * 
 * @returns {string} - The HTML string for the error message.
 */
function errorMessageTableNumber() {
    return `You did not enter anything. Please enter your table <b>number</b> again.<div class="finally-order" onclick="popup('dineIn')">Correct</div>`;
}

/**
 * Generates an error message for an invalid name input.
 * 
 * @returns {string} - The HTML string for the error message.
 */
function errorMessageName() {
    return `You did not enter anything. Please enter your <b>name</b> again <div class="finally-order" onclick="popup('pickup')">Correct</div>`;
}

/**
 * Generates an error message for an invalid address input.
 * 
 * @returns {string} - The HTML string for the error message.
 */
function errorMessageAddress() {
    return `You did not enter a valid address. Please enter your delivery address again in the specified format.<div class="finally-order" onclick="popup('delivery')">Correct</div>`;
}

/**
 * Generates a confirmation message for a dine-in order with the provided table number.
 * 
 * @param {number} number - The table number.
 * @returns {string} - The HTML string for the confirmation message.
 */
function messageTableNumber(number) {
    return `Thank you for your order. We are preparing it promptly so that you can enjoy it to the fullest. Your satisfaction is our priority. Your order will be delivered to table number <b>${number}</b>.`;
}

/**
 * Generates a confirmation message for a pickup order with the provided name.
 * 
 * @param {string} name - The name provided for the order.
 * @returns {string} - The HTML string for the confirmation message.
 */
function messageName(name) {
    return `Thank you for your order. We are preparing it promptly so that you can enjoy it to the fullest. Your satisfaction is our priority. Your order is noted under the name <b>${name}</b>. Please provide this name upon pickup.`;
}

/**
 * Generates a confirmation message for a delivery order with the provided address.
 * 
 * @param {string} address - The delivery address.
 * @returns {string} - The HTML string for the confirmation message.
 */
function messageAddress(address) {
    return `Thank you for your order. We are preparing it promptly so that you can enjoy it to the fullest. Your satisfaction is our priority. Your order will be delivered to the address <b>${address}</b>.`;
}
