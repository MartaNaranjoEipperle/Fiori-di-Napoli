
function addOrdering(){
return`<label class="option" id="dineIn" onclick="selectDeliveryOption('dineIn')">
               Dine In
            </label>
            <label class="option" id="pickup" onclick="selectDeliveryOption('pickup')">
                Pickup
            </label>
            <label class="option" id="delivery" onclick="selectDeliveryOption('delivery')">
                 Delivery
            </label>`
} 

function schowMenuTitle(menuTitle, imageName){
return`<div style="background-image: url('./assets/img/${imageName}.jpg')" alt="" class="menu-image"></div>
    <h2>${menuTitle}</h2>`;
}
  

function showMenuContent(item){
    return`<div class="menu-item">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p>${item.price} €</p> 
                <div class="quantity">
                    <input type="number" id="quantity-${item.name}" class="quantity-input" value="0" min="1" max="100" pattern="\d+" title="Please enter a number between 1 and 100" required>
                    <button class="quantity-btn" onclick="addToOrder('quantity-${item.name}', '${item.name}', '${item.price}')">+</button>
                    <div class="d-none" id="quantity-${item.name}-error"></div>
                    <div id="addToOrderMessage-${item.name}" class="add-to-order-message d-none">Item added to cart!</div>
                </div>
            </div>`;
}

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

function errorMessageTableNumber(){
    return `You did not enter anything. Please enter your table <b>number</b> again.<div class="finally-order" onclick="popup('dineIn')">Correct</div>`;
}

function errorMessageName(){
    return `You did not enter anything. Please enter your <b>name</b> again <div class="finally-order" onclick="popup('pickup')">Correct</div>`;
}

function errorMessageAddress(){
    return `You did not enter a valid address. Please enter your delivery address again in the specified format.<div class="finally-order" onclick="popup('delivery')">Correct</div>`;
}

function messageTableNumber(number){
    return `Thank you for your order. We are preparing it promptly so that you can enjoy it to the fullest. Your satisfaction is our priority. Your order will be delivered to table number <b>${number}</b>.`;
}

function messageName(name){
    return `Thank you for your order. We are preparing it promptly so that you can enjoy it to the fullest. Your satisfaction is our priority. Your order is noted under the name <b>${name}</b>. Please provide this name upon pickup.`;
}

function messageAddress(address){
    return `Thank you for your order. We are preparing it promptly so that you can enjoy it to the fullest. Your satisfaction is our priority. Your order will be delivered to the address <b>${address}</b>.`;
}