function getProducts() {
  return fetch("https://dummyjson.com/products?limit=9")
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error(error));
}

const containerElement = document.querySelector("#product-container");

function addProductToDom(product) {

  const productElement = document.createElement("div");

  productElement.classList.add("item");

  productElement.innerHTML = `
  <p>ID: ${product.id} </p>
  <p>Name: ${product.title} </p>
  <p>Price: ${product.price} </p>
  `;
  
  containerElement.appendChild(productElement);
}

getProducts().then((data) => {
  data.products.map((product) => {
    addProductToDom(product);
  });
});
