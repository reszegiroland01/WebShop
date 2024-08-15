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

let cart = []


function fo()
{
  let item = ''
  products.map((product)=>{
      item += '<div class="row '+(product.inStock === true? "" : "faded")+'">'
      item += '<div class="productImageContainer"><img class="productImage" src='+product.image+' alt='+product.name+'></img></div>'
      item += '<div class="productName"><p>'+product.name+'</p></div>'
      item += '<div class="productDescription"><p class="productDestriptionText">'+product.description+'</p></div>'
      item += '<div class="productInstock"><p>' + (product.inStock === true ? "Raktáron" : "Elfogyott") + '</p></div>';
      item += '<div class="productPrice"><p>'+product.price+" Ft"+'</p></div>'
      item += '<button onClick="getItem(' + product.id + ')" class="productButton"' + (!product.inStock ? ' disabled' : '') + '>Kosárba</button>';
      item += '</div>'

  })
  document.getElementById("container").innerHTML=item

  

}
fo()

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
  console.log(cart)
  checkCart();
}

function checkCart() {
let item = "";
if (cart.length === 0) {
    item += "<h1>Üres a kosarad</h1>";
} else {
    item += "<h1>A kosarad tartalma</h1>";
    // Kosár tartalmának megjelenítése
    cart.map((product) => {
        item += `<div class="cartItem"> <p> ${product.name} - ${product.price} Ft</p><button onclick="removeItem(${product.id})">Törlés</button></div>`;
    });
  }
document.getElementById("cart").innerHTML = item;

}
// Törlés funkció a kosárból
function removeItem(productId) {
cart = cart.filter((product) => product.id !== productId);
checkCart(); // Frissíti a kosarat, miután eltávolított egy elemet
}


checkCart();

//Ha hozzáadsz a kosaradhoz egy terméket akkor irassa ki az üres a kosarad helyett
// Kosárba helyett törlés gomb ha rámegyek törölje ki az elemből
// Legyen egy reset gomb ami mindent kitorol 
//Legyen egy számlálo ami számlálja mennyibe kerül a rendelés
// Rendelés leadása gomb a termékek alá és akkor kiírja hogy köszi a rendelés 
//Tegnapi menüsort belerakhatod 

function toggleMenu()
{
  
  let container = document.getElementById("menuContainer")
  if(container.classList.contains("extended"))
  {
      container.classList.remove("extended")
      container.classList.add("closed")
  }
  else
  {
      container.classList.remove("closed")
      container.classList.add("extended")
  }
}



