let menuLibrary = {
    "Dishes": {
        "Pasta": [
            {
                "name": "Tagliatelle Bolognese",
                "price": "12.50",
                "description": "Traditional Italian pasta served with a rich and hearty meat sauce made from minced beef, tomatoes, and aromatic herbs."
            },
            {
                "name": "Fusilli alla Caprese",
                "price": "11.00",
                "description": "Spiral pasta mixed with fresh tomatoes, mozzarella, basil, and a drizzle of olive oil, creating a light and refreshing dish."
            },
            {
                "name": "Gnocchi al Pesto",
                "price": "13.00",
                "description": "Soft potato dumplings tossed in a vibrant and aromatic basil pesto sauce, topped with grated Parmesan cheese."
            },
            {
                "name": "Fettuccine Alfredo",
                "price": "14.00",
                "description": "Wide ribbons of pasta coated in a creamy Alfredo sauce made with butter, heavy cream, and Parmesan cheese."
            },
            {
                "name": "Tortellini alla Panna",
                "price": "13.50",
                "description": "Cheese-filled tortellini served in a rich and creamy sauce made from heavy cream, butter, and Parmesan cheese."
            }
        ],
        "Pizza": [
            {
                "name": "Margherita",
                "price": "10.00",
                "description": "Classic pizza topped with fresh tomatoes, mozzarella cheese, and basil, finished with a drizzle of olive oil."
            },
            {
                "name": "Pepperoni",
                "price": "12.00",
                "description": "A popular choice featuring spicy pepperoni slices, mozzarella cheese, and a rich tomato sauce."
            },
            {
                "name": "Quattro Formaggi",
                "price": "14.00",
                "description": "Delicious pizza topped with a blend of four cheeses: mozzarella, gorgonzola, parmesan, and fontina."
            },
            {
                "name": "Prosciutto e Funghi",
                "price": "13.50",
                "description": "Tasty pizza with thinly sliced prosciutto, mushrooms, mozzarella cheese, and tomato sauce."
            },
            {
                "name": "Vegetariana",
                "price": "11.50",
                "description": "A healthy option with a variety of fresh vegetables, including bell peppers, onions, olives, and tomatoes, on a bed of mozzarella cheese and tomato sauce."
            }
        ],
        "Appetizers": [
            {
                "name": "Baked Eggs with Vegetables",
                "price": "7.00",
                "description": "Delicious baked eggs served with a medley of fresh vegetables, seasoned with herbs and spices."
            },
            {
                "name": "Bruschetta",
                "price": "6.00",
                "description": "Toasted bread topped with a mixture of diced tomatoes, garlic, basil, and olive oil."
            },
            {
                "name": "Caprese Salad",
                "price": "8.50",
                "description": "Fresh mozzarella, ripe tomatoes, and basil leaves drizzled with balsamic glaze and olive oil."
            },
            {
                "name": "Stuffed Mushrooms",
                "price": "7.50",
                "description": "Mushrooms stuffed with a savory mixture of cheese, breadcrumbs, and herbs, baked to perfection."
            },
            {
                "name": "Garlic Bread",
                "price": "5.00",
                "description": "Crispy bread slices topped with garlic butter and parsley, baked until golden brown."
            }
        ]
    },
    "Beverages": {
        "Wine": [
            {
                "name": "Chianti Classico",
                "price": "18.00",
                "description": "A classic Italian red wine with a full-bodied flavor and notes of red fruits and spices."
            },
            {
                "name": "Pinot Grigio",
                "price": "15.00",
                "description": "A crisp and refreshing white wine with flavors of citrus, green apple, and a hint of minerality."
            },
            {
                "name": "Prosecco",
                "price": "12.00",
                "description": "A light and bubbly sparkling wine, perfect for celebrations or as an aperitif."
            },
            {
                "name": "Barolo",
                "price": "22.00",
                "description": "A robust red wine with rich tannins and flavors of dark berries, tobacco, and leather."
            },
            {
                "name": "Sauvignon Blanc",
                "price": "16.00",
                "description": "A zesty white wine with bright acidity and notes of tropical fruits and fresh herbs."
            }
        ],
        "Coffee": [
            {
                "name": "Espresso",
                "price": "3.50",
                "description": "A strong and concentrated coffee served in a small shot, perfect for espresso lovers."
            },
            {
                "name": "Cappuccino",
                "price": "4.50",
                "description": "An espresso-based coffee topped with steamed milk and a frothy milk foam, often dusted with cocoa powder."
            },
            {
                "name": "Caffè Latte",
                "price": "4.00",
                "description": "A coffee drink made with espresso and steamed milk, offering a creamy and smooth flavor."
            },
            {
                "name": "Macchiato",
                "price": "3.75",
                "description": "An espresso with a dollop of foamed milk on top, providing a balanced mix of coffee and milk."
            },
            {
                "name": "Mocha",
                "price": "5.00",
                "description": "A decadent coffee drink made with espresso, steamed milk, and chocolate syrup, often topped with whipped cream."
            }
        ],
        "Cocktail": [
            {
                "name": "Negroni",
                "price": "9.00",
                "description": "A classic cocktail made with equal parts gin, vermouth rosso, and Campari, garnished with an orange twist."
            },
            {
                "name": "Margarita",
                "price": "8.50",
                "description": "A refreshing cocktail made with tequila, triple sec, lime juice, and a salted rim."
            },
            {
                "name": "Mojito",
                "price": "7.50",
                "description": "A tropical cocktail made with white rum, fresh mint leaves, lime juice, sugar, and soda water."
            },
            {
                "name": "Cosmopolitan",
                "price": "9.50",
                "description": "A popular cocktail made with vodka, triple sec, cranberry juice, and freshly squeezed lime juice."
            },
            {
                "name": "Old Fashioned",
                "price": "10.00",
                "description": "A classic cocktail made with bourbon or rye whiskey, sugar, bitters, and a twist of citrus peel."
            }
        ]
    }
};


let categoryMap = {
    "Pizza": { dishes: menuLibrary.Dishes.Pizza, title: "Pizza", icon: "pizza-spinat" },
    "Pasta": { dishes: menuLibrary.Dishes.Pasta, title: "Pasta", icon: "pasta" },
    "Appetizers": { dishes: menuLibrary.Dishes.Appetizers, title: "Appetizers", icon: "egg" },
    "Wine": { dishes: menuLibrary.Beverages.Wine, title: "Wine", icon: "vino" },
    "Cocktail": { dishes: menuLibrary.Beverages.Cocktail, title: "Cocktails", icon: "cocktail" },
    "Coffee": { dishes: menuLibrary.Beverages.Coffee, title: "Coffee", icon: "coffee" }
};