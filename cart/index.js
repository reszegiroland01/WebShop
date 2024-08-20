
let cart = JSON.parse(sessionStorage.getItem("cart"))??[]

function getItem(productId)
{
    
  let product 
  products.map((item)=>{
      if(item.id === productId)
      {
          product = item
      }
  })
  cart.push(product)
  sessionStorage.setItem("cart", JSON.stringify(cart));
  calculateTotal();
  checkCart();
}

function checkCart() {

console.log(cart)
let item = "";
if (cart.length === 0) {
    item += "<h1>A kosarad üres</h1>";
} else {
    item += '<div class="cartItemsContainer">';  // Konténer az összes kosár elemhez
    // Kosár tartalmának megjelenítése
    cart.map((product) => {
      item += `
          <div class="cartItem">
              <div class="cartProductImageContainer">
                  <img class="cartProductImage" src="${product.image}" alt="${product.name}"></img>
              </div>
                <p><strong> ${product.name} </strong></p>
                <p><strong> ${product.price} Ft</strong> </p>
                <button class='cartRemove' onclick="removeItem(${product.id})">✖</button>
          </div>`;
  });
  item += '</div>';  // Befejezi a konténert
  }
  document.getElementById("itemsContainer").innerHTML = item;
  console.log(cart)
  isActive()
}
checkCart()
// // Törlés funkció a kosárból
function removeItem(productId) {
cart = cart.filter((product) => product.id !== productId);
sessionStorage.setItem("cart", JSON.stringify(cart));
checkCart(); // Frissíti a kosarat, miután eltávolított egy elemet
calculateTotal()
isActive()
}


function calculateTotal()
{

  let total = 0
  cart.map((item)=>{
    total += item.price;
    console.log(item.price);
  });
  document.getElementById("totalAmount").innerHTML = `Összeg: ${total} Ft`;
  checkCart()
  let totalItems = cart.length
  document.getElementById("itemsLength").innerHTML = totalItems
}
calculateTotal()

function clearCart() {
  cart = []; 
  calculateTotal(); 
  checkCart(); 
  sessionStorage.removeItem("cart")
}

function placeOrder() {
  if (cart.length === 0) {
    alert("A kosár üres, nem tudsz rendelni.");
    return;
  }
  alert("Köszönjük a rendelést!");
  clearCart();
  sessionStorage.removeItem("cart")
  window.location.href="./index.html"
}

function isActive()
{
  let button = ""
  if(cart.length === 0)
  {
    button = '<button disabled onclick="placeOrder()" class="submitOrder disabled">Rendelés leadása</button>'
  }
  else
  {
    button = '<button onclick="placeOrder()" class="submitOrder">Rendelés leadása</button>'
  }
  document.getElementById("buttonContainer").innerHTML=button
}
isActive()