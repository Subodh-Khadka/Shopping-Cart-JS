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

    // or using destructring
    const { name, price, stock } = targetProduct;

    let currentProductQuantity;
    const existingItem = cartProductArray.find((item) => item.id === btnId);

    if (!existingItem) {
      const row = document.createElement("tr");
      row.innerHTML = `
    <td class="Id">${btnId}</td>
    <td class="name">${name}</td>
    <td>
      <button class = "plus"> + </button>
      <button class = "minus"> - </button>
      <button class = "delete"> del </button>
    </td>
    <td class="price">${price}</td>
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

      // console.log(cartProductArray);
    } else {
      const selectedProduct = document.querySelector(`.${name}`);
      currentProductQuantity = parseInt(
        selectedProduct.querySelector(".quantity").textContent
      );
      const updatedProductQuantity = parseInt(currentProductQuantity + 1);
      existingItem.quantity += 1;
      selectedProduct.querySelector(".quantity").textContent =
        updatedProductQuantity;
      console.log(cartProductArray);
    }
  }

  //cart + - button
  if (e.target.classList.contains("plus")) {
    const row = e.target.closest("tr");
    const id = row.querySelector(".Id").textContent;
    const quantityCell = row.querySelector(".quantity");
    const cartItem = cartProductArray.find((item) => item.id === id);
    console.log(row);
    if (cartItem) {
      cartItem.quantity += 1;
      quantityCell.textContent = cartItem.quantity;
    }
  } else if (e.target.classList.contains("minus")) {
    const row = e.target.closest("tr");
    const id = row.querySelector(".Id").textContent;
    const quantityCell = row.querySelector(".quantity");
    const cartItem = cartProductArray.find((item) => item.id === id);

    if (cartItem) {
      if (cartItem.quantity == 1) {
        alert("quanity cannot be zero");
      } else {
        cartItem.quantity -= 1;
        quantityCell.textContent = cartItem.quantity;
      }
    }
  }

  localStorage.setItem("cart", JSON.stringify(cartProductArray));

  //calculate direclty from the object array
  const sumTotal = cartProductArray.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (sumTotal) {
    const totalTag = document.querySelector(".total");
    totalTag.innerHTML = `Rs: ${sumTotal.toLocaleString()}`;
  }
});
