let showImg = ["pizza-spinat", "pasta", "pizza-vegetable", "egg"];
let choiceOption = [];
let contentProof = [];
let currentIndex = 0;
let delivery = false;
let summed = true;
let addition = true;


function init() {
    diashow();
    displayMenu(menuLibrary.Dishes.Pizza, "Pizza", "pizza-spinat");
}

//Diashow

function diashow() {
    let show = document.getElementById('diaShow')
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


//Order taking
function displayMenu(menuItems, menuTitle, imageName) {
    let menuContainer = document.getElementById('menu');
    menuContainer.innerHTML = '';
    menuContainer.innerHTML += schowMenuTitle(menuTitle, imageName);
    menuItems.forEach(item => {
        menuContainer.innerHTML += showMenuContent(item);
    });
}

//Sticky order
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

//Adjusts the height of an element based on window width.
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

window.addEventListener('load', adjustHeight);
window.addEventListener('resize', adjustHeight);

