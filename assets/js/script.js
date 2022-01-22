




// on va chercher les informations sur les montres dans le fichier json, puis on crée les éléments montres

fetch('assets/json/products.json')
.then(response => response.json())
.then((jsonProducts) => {
  jsonProducts.watches.map((product) => {
    let watcheName = product.name;
    // console.log(watcheName);
    let watchDescription = product.description;  
    let watchePrice = product.price;
    // console.log(watchePrice);
    let watchImg = product.image;
    // console.log(watchImg);


    let watchToInject = `
        <div class="watch">
            <div class="images-small">
                <img src="/assets/svg/like.svg" class="like">
            </div>
            <p>${watcheName},${watchDescription}<br>  ${watchePrice}</p>
            <button class="btn-addtocart">Ajouter au panier</button>
        </div>`


    document.querySelector('.wrapper-watches').innerHTML += watchToInject;
    addWatchesToCart();
  })
})

// on va chercher les informations sur les vêtements dans le fichier json, puis on crée les éléments vêtements

fetch('assets/json/products.json')
.then(response => response.json())
.then((jsonProducts) => {
  jsonProducts.clothes.map((product) => {
    let clotheName = product.name;
    // console.log(clotheName); 
    let clothePrice = product.price;
    // console.log(clothePrice);
    let clotheImg = product.image;
    // console.log(clotheImg);


    let clotheToInject = `
        <div class="clothe">
          <div class="images-medium">
            <img src="/assets/svg/like.svg" class="like">
          </div>
        <p>${clotheName}<br>  ${clothePrice}</p>
        <button class="btn-addtocart">Ajouter au panier</button>
        </div>`


    document.querySelector('.wrapper-clothes').innerHTML += clotheToInject;
    addClothesToCart();
  })
})

// on va chercher les informations sur les chaussures dans le fichier json, puis on crée les éléments chaussures

fetch('assets/json/products.json')
.then(response => response.json())
.then((jsonProducts) => {
  jsonProducts.shoes.map((product) => {
    let shoeName = product.name;
    // console.log(shoeName); 
    let shoePrice = product.price;
    // console.log(shoePrice);
    let shoeImg = product.image;
    // console.log(shoeImg);


    let shoeToInject = `
        <div class="shoe">
        <div class="images-small">
            <img src="/assets/svg/like.svg" class="like">
        </div>
        <p>${shoeName}<br>  ${shoePrice}</p>
        <button class="btn-addtocart">Ajouter au panier</button>
        </div>`


    document.querySelector('.wrapper-shoes').innerHTML += shoeToInject;
    addShoesToCart();
  })
})


// on fait apparaitre le panier au clic sur l'icone panier

document.querySelector('.cart').addEventListener('click', function(){
  document.querySelector('.cart-container').style.visibility = "visible";
})


// on fait disparaitre le panier au clic sur l'icone panier

document.querySelector('.cross').addEventListener('click', function(){
  document.querySelector('.cart-container').style.visibility = "hidden";
})

 






function addWatchesToCart() {
  let buttons = document.querySelectorAll('.wrapper-watches button');
  for ( btn of buttons ){
    btn.addEventListener('click', function(){
        let allText = this.previousElementSibling.textContent;
        let words = allText.split("  ");
        let nameAndDescription = words[0];
        console.log(nameAndDescription);
        let price = words[1];
        console.log(price);
        let cartItem = ` <div class="cart-item">
                          <img class="img-cart">
                          <p>${nameAndDescription}</p>
                          <p>${price}</p>
                          <img class="minus" src="assets/svg/moins.svg">
                          <p class="quantity">quantité</p>
                          <img class="plus" src="assets/svg/plus.svg">
                          <p>1</p>
                          <p class="remove">supprimer</p>
                        </div>`;
        document.querySelector('.cart-wrapper').innerHTML += cartItem;
        removeToCart();
        quantity();
    })
  }
}


function addClothesToCart() {
  let buttons = document.querySelectorAll('.wrapper-clothes button');
  for ( btn of buttons ){
    btn.addEventListener('click', function(){
      let allText = this.previousElementSibling.textContent;
      let words = allText.split("  ");
      let nameAndDescription = words[0];
      console.log(nameAndDescription);
      let price = words[1];
      console.log(price);
      let cartItem = ` <div class="cart-item">
                          <img class="img-cart">
                          <p>${nameAndDescription}</p>
                          <p>${price}</p>
                          <img class="minus" src="assets/svg/moins.svg">
                          <p class="quantity">quantité</p>
                          <img class="plus" src="assets/svg/plus.svg">
                          <p>1</p>
                          <p class="remove">supprimer</p>
                        </div>`;
        document.querySelector('.cart-wrapper').innerHTML += cartItem;
        removeToCart();
        quantity();
    })
  }
}

function addShoesToCart() {
  let buttons = document.querySelectorAll('.wrapper-shoes button');
  for ( btn of buttons ){
    btn.addEventListener('click', function(){
      let allText = this.previousElementSibling.textContent;
      let words = allText.split("  ");
      let nameAndDescription = words[0];
      console.log(nameAndDescription);
      let price = words[1];
      console.log(price);
      let cartItem = ` <div class="cart-item">
                        <img class="img-cart">
                        <p>${nameAndDescription}</p>
                        <p>${price}</p>
                        <img class="minus" src="assets/svg/moins.svg">
                        <p class="quantity">quantité</p>
                        <img class="plus" src="assets/svg/plus.svg">
                        <p>1</p>
                        <p class="remove">supprimer</p>
                      </div>`;
        document.querySelector('.cart-wrapper').innerHTML += cartItem;
        removeToCart();
        quantity();
    })
  }
}


function removeToCart() {
  let items  = document.querySelectorAll('.cart-item');
  for ( item of items) {
    let remove = item.querySelector('.remove');
    remove.addEventListener('click', function() {
      this.closest('.cart-item').remove();
    })
  } 
}


function quantity() {
  let plus = document.querySelectorAll('.plus');
  for ( p of plus) {
    p.addEventListener('click', function(){
      console.log('plus');
    })
  }
}


