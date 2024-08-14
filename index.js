const products = [
    {
      id: 1,
      name: "Fehér Póló",
      price: 3990,
      description: "Kényelmes és egyszerű fehér póló, 100% pamut.",
      category: "Ruházat",
      inStock: true,
      image: "feher-polo.jpg"
    },
    {
      id: 2,
      name: "Kék Farmer",
      price: 10990,
      description: "Klasszikus kék farmer, egyenes szabású és tartós anyagból.",
      category: "Ruházat",
      inStock: true,
      image: "kek-farmer.jpg"
    },
    {
      id: 3,
      name: "Vezeték Nélküli Fejhallgató",
      price: 18990,
      description: "Zajszűrő vezeték nélküli fejhallgató, 20 órás üzemidővel.",
      category: "Elektronika",
      inStock: false,
      image: "vezeteknelkuli-fejhallgato.jpg"
    },
    {
      id: 4,
      name: "Eszpresszó Gép",
      price: 32990,
      description: "Kompakt eszpresszó gép otthoni használatra, könnyen kezelhető és tisztítható.",
      category: "Háztartási Gépek",
      inStock: true,
      image: "eszpresszo-gep.jpg"
    },
    {
      id: 5,
      name: "Futócipő",
      price: 22990,
      description: "Könnyű és tartós futócipő, kiváló párnázással.",
      category: "Ruházat",
      inStock: true,
      image: "futocipo.jpg"
    },
    {
      id: 6,
      name: "Okostelefon",
      price: 89990,
      description: "Legújabb modell okostelefon, nagy felbontású kijelzővel és gyors processzorral.",
      category: "Elektronika",
      inStock: true,
      image: "okostelefon.jpg"
    },
    {
      id: 7,
      name: "Hátizsák",
      price: 7990,
      description: "Tartós és vízálló hátizsák, ideális kirándulásokhoz és mindennapi használatra.",
      category: "Kiegészítők",
      inStock: true,
      image: "hatizsak.jpg"
    },
    {
      id: 8,
      name: "Kávéfőző",
      price: 19990,
      description: "Automata kávéfőző, egyszerű kezeléssel és ízletes kávéval.",
      category: "Háztartási Gépek",
      inStock: true,
      image: "kavefozo.jpg"
    },
    {
      id: 9,
      name: "Tablet",
      price: 64990,
      description: "Kompakt és könnyű tablet, tökéletes olvasáshoz és szórakozáshoz.",
      category: "Elektronika",
      inStock: false,
      image: "tablet.jpg"
    },
    {
      id: 10,
      name: "Napszemüveg",
      price: 4990,
      description: "Stílusos napszemüveg UV-védelemmel.",
      category: "Kiegészítők",
      inStock: true,
      image: "napszemuveg.jpg"
    }
  ];
  

function fo()
{
    let item = ''
    products.map((product)=>{
        item += '<div class="row">'
        item += '<div class="productName"><p>'+product.name+'</p></div>'
        item += '<div class="productDescription"><p>'+product.description+'</p></div>'
        item += '<div class="productInstock '+(product.inStock === true? "" : "Red")+'"><p>' + (product.inStock === true ? "Raktáron" : "Elfogyott") + '</p></div>';
        item += '<div class="productPrice"><p>'+product.price+" Ft"+'</p></div>'
        item += '</div>'
    })
    document.getElementById("container").innerHTML=item

    
}
fo()