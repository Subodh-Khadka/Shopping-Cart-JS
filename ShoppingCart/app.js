const products = [
  { id: "1", name: "Football", stock: 25, price: "1200" },
  { id: "2", name: "basketball", stock: 40, price: "1000" },
  { id: "3", name: "Chess", stock: 10, price: "800" },
];

const productContainer = document.querySelector(".product-list");

productContainer.innerHTML = products
  .map((product) => {
    return `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.price}</p>
        <a href="#" dataId = ${product.id} class="cart-button btn btn-sm btn-primary">Add</a>
      </div>
    </div> <br>`;
  })
  .join("");

const cart = document.querySelector(".cart-products");
const productDetailsInCart = document.querySelector(".product-details");
const mainContainer = document.querySelector(".shopping-cart");
const cartBtn = document.querySelector(".cart-button");

const cartProductArray = [];

mainContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("cart-button")) {
    const btnId = e.target.getAttribute("dataId");

    const targetProduct = products[btnId - 1];
    //getting other properties
    // const productName = targetProduct.name;
    // const productPrice = targetProduct.price;
    // const productStock = targetProduct.stock;

    // or using destructring
    const { name, price, stock } = targetProduct;

    const existingItem = cartProductArray.find((item) => item.id === btnId);

    if (!existingItem) {
      const row = document.createElement("tr");
      row.innerHTML = `
    <td class="Id">${btnId}</td>
    <td class="name">${name}</td>
    <td class="price">${price}</td>
    <td class="stock">${stock}</td>
    <td class="quantity">1</td>
    `;
      row.classList.add(`${name}`);
      productDetailsInCart.appendChild(row);

      cartProductArray.push({
        id: btnId,
        name: name,
        price: parseInt(price),
        quantity: 1,
      });

      console.log(cartProductArray);
    } else {
      const selectedProduct = document.querySelector(`.${name}`);
      const currentProductQuantity = parseInt(
        selectedProduct.querySelector(".quantity").textContent
      );
      const updatedProductQuantity = currentProductQuantity + 1;
      selectedProduct.querySelector(".quantity").textContent =
        updatedProductQuantity;
    }
  }
});
