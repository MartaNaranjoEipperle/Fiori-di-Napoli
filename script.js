let showImg = ["pizza-spinat", "pasta", "pizza-vegetable", "egg"];
let choiceOption = [];
let contentProof = [];
let currentIndex = 0;
let delivery = false;
let summed = true;
let addition = true;


/**
 * Initializes the application by starting the diashow and displaying the menu.
 */
function init() {
    diashow();
    displayMenu(menuLibrary.Dishes.Pizza, "Pizza", "pizza-spinat");
}

/**
 * Starts the diashow by changing the background image of the diaShow element every 6 seconds.
 */
function diashow() {
    let show = document.getElementById('diaShow');
    setInterval(function () {
        show.style.opacity = 0;
        setTimeout(function () {
            show.style.backgroundImage = `url('./assets/img/${showImg[currentIndex]}.jpg')`;
            show.style.opacity = 1;
        }, 1000);
        currentIndex = (currentIndex + 1) % showImg.length;
        show.style.opacity = 0;
    }, 6000);
}

/**
 * Displays the menu items in the menu container.
 *
 * @param {Array<Object>} menuItems - The list of menu items to display.
 * @param {string} menuTitle - The title of the menu.
 * @param {string} imageName - The image name associated with the menu.
 */
function displayMenu(menuItems, menuTitle, imageName) {
    let menuContainer = document.getElementById('menu');
    menuContainer.innerHTML = '';
    menuContainer.innerHTML += schowMenuTitle(menuTitle, imageName);
    menuItems.forEach(item => {
        menuContainer.innerHTML += showMenuContent(item);
    });
}

/**
 * Processes the final order by checking if the cart is empty, displaying a popup, and clearing the cart.
 */
function finallyorder() {
    let content = document.getElementById('myOrderCart').innerHTML.trim();
    if (content.length !== 0) {
        popup(choiceOption[0]);
        leerContain('myOrderCart');
        leerContain('mySum');
        currentIndex = 0;
        contentProof = [];
        document.getElementById('selection-container').classList.add('d-none');
        document.getElementById('finallyOrder').classList.add('d-none');
    } else {
        alert('Your cart is empty. Explore our delicious dishes and choose the perfect one for you.');
    }
}

/**
 * Adjusts the height of the sticky element based on the window width.
 */
function adjustHeight() {
    if (window.innerWidth > 767) {
        let overlay = document.getElementById('overlay');
        let sticky = document.getElementById('sticky');
        let overlayHeight = overlay.offsetHeight - 450;
        sticky.style.height = `${overlayHeight}px`;
    } else {
        sticky.style.height = '';
    }
}

// Adds event listeners to adjust the height on window load and resize.
window.addEventListener('load', adjustHeight);
window.addEventListener('resize', adjustHeight);
