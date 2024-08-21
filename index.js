
const products = [
  {
    id: 1,
    name: "Fehér Póló",
    price: 3990,
    description: "Kényelmes és egyszerű fehér póló, 100% pamut.",
    category: "Ruházat",
    inStock: true,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
  },
  {
    id: 2,
    name: "Kék Farmer",
    price: 10990,
    description: "Klasszikus kék farmer, egyenes szabású és tartós anyagból.",
    category: "Ruházat",
    inStock: true,
    image: "https://images.unsplash.com/photo-1581502473651-37428e2f975f"
  },
  {
    id: 3,
    name: "Vezeték Nélküli Fejhallgató",
    price: 18990,
    description: "Zajszűrő vezeték nélküli fejhallgató, 20 órás üzemidővel.",
    category: "Elektronika",
    inStock: false,
    image: "https://images.unsplash.com/photo-1583225151893-d99e6819a075"
  },
  {
    id: 4,
    name: "Eszpresszó Gép",
    price: 32990,
    description: "Kompakt eszpresszó gép otthoni használatra, könnyen kezelhető és tisztítható.",
    category: "Háztartási Gépek",
    inStock: true,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
  },
  {
    id: 5,
    name: "Futócipő",
    price: 22990,
    description: "Könnyű és tartós futócipő, kiváló párnázással.",
    category: "Ruházat",
    inStock: true,
    image: "https://images.unsplash.com/photo-1599058917213-3f3d0ab1c91c"
  },
  {
    id: 6,
    name: "Okostelefon",
    price: 89990,
    description: "Legújabb modell okostelefon, nagy felbontású kijelzővel és gyors processzorral.",
    category: "Elektronika",
    inStock: true,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  },
  {
    id: 7,
    name: "Hátizsák",
    price: 7990,
    description: "Tartós és vízálló hátizsák, ideális kirándulásokhoz és mindennapi használatra.",
    category: "Kiegészítők",
    inStock: true,
    image: "https://images.unsplash.com/photo-1598300058603-77a5b0305bfb"
  },
  {
    id: 8,
    name: "Kávéfőző",
    price: 19990,
    description: "Automata kávéfőző, egyszerű kezeléssel és ízletes kávéval.",
    category: "Háztartási Gépek",
    inStock: true,
    image: "https://images.unsplash.com/photo-1580377968139-906f4f5df6d7"
  },
  {
    id: 9,
    name: "Tablet",
    price: 64990,
    description: "Kompakt és könnyű tablet, tökéletes olvasáshoz és szórakozáshoz.",
    category: "Elektronika",
    inStock: false,
    image: "https://images.unsplash.com/photo-1553864256-44df0f82c39e"
  },
  {
    id: 10,
    name: "Napszemüveg",
    price: 4990,
    description: "Stílusos napszemüveg UV-védelemmel.",
    category: "Kiegészítők",
    inStock: true,
    image: "https://images.unsplash.com/photo-1583241938089-710196e5452c"
  }
];

let cart = JSON.parse(sessionStorage.getItem("cart"))??[]



function fo()
{
  let item = ''
  products.map((product)=>{
      item += '<div class="row '+(product.inStock === true? "" : "faded")+'">'
      item += '<div class="productImageContainer"><img class="productImage" src='+product.image+' alt='+product.name+'></img></div>'
      item += '<p class="productName">'+product.name+'</p>'
      item += '<p class="productInstock">' + (product.inStock === true ? "Raktáron" : "Elfogyott") + '</p>';
      item += '<p class="productPrice">'+product.price+" Ft"+'</p>'
      item += '<button onClick="getItem(' + product.id + ')" class="productButton"' + (!product.inStock ? ' disabled' : '') + '>Kosárba</button>';
      item += '</div>'

  })
  document.getElementById("container").innerHTML=item


}
fo()

function checkUser()
{
  const user = localStorage.getItem("User")
  if(!user)
  {
    window.location.href="./login/index.html"
  }
}
checkUser()

function navigateToCart()
{
  window.location.href="./cart/index.html"
}


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
  getCartLength()
}

function getCartLength(){
  document.getElementById("cartLength").innerHTML=cart.length
}

getCartLength()










