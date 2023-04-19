const cartContainer = document.querySelector("#cart");

// Hent den gemte indkøbskurv fra Local Storage eller opret en ny, hvis der ikke findes en.
// Retrieve the saved shopping cart from Local Storage or create a new one if none exists.
const cart = JSON.parse(localStorage.getItem("myShoppingCart")) || { cartItems: [] };

// Funktionen "createShoppingCart()" definerer en indkøbskurv og dens metoder.
// The "createShoppingCart()" function defines a shopping cart and its methods.

function createShoppingCart() {
  // Funktionen "saveCart()" gemmer den aktuelle tilstand af kurven til Local Storage.
  // The "saveCart()" function saves the current state of the cart to Local Storage.
  function saveCart() {
    localStorage.setItem("myShoppingCart", JSON.stringify(cart));
  }

  // Returner en objekt med en række metoder til at manipulere indkøbskurven.
  // Return an object with a number of methods for manipulating the shopping cart.
  return {
    // Metode til at få indkøbskurvens varer.
    // Method to get the items in the shopping cart.
    getCartItems: function () {
      return cart.cartItems;
    },

    // Metode til at fjerne en vare fra indkøbskurven.
    // Method to remove an item from the shopping cart.
    setDeleteItem: function (id) {
      cart.cartItems = cart.cartItems.filter(function (item) {
        return item.id !== id;
      });
      saveCart();
    },

    // Metode til at tømme indkøbskurven.
    // Method to empty the shopping cart.
    setEmptyCart: function () {
      cart.cartItems = [];
      saveCart();
    },

    // Metode til at øge antallet af en vare i indkøbskurven.
    // Method to increase the quantity of an item in the shopping cart.
    increaseCartQuantity: function (id, price, title, thumbnail) {
      // Find den eksisterende vare i kurven.
      // Find the existing item in the cart.
      let existingItem = cart.cartItems.find(function (item) {
        return item.id === id;
      });

      if (existingItem) {
        // Hvis varen allerede findes i kurven, øg antallet af den.
        // If the item already exists in the cart, increase its quantity.
        existingItem.amount += 1;
      } else {
        // Hvis varen ikke findes i kurven, tilføj den.
        // If the item does not exist in the cart, add it.
        cart.cartItems.push({ id: id, price: price, amount: 1, title: title, thumbnail: thumbnail });
      }

      // Gem ændringerne i kurven.
      // Save the changes to the cart.
      saveCart();
    },
  };
}

const shoppingcart = createShoppingCart();

console.log("cartitems ", shoppingcart.getCartItems());
