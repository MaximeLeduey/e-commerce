
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
        <div class="images-small" style="background-image: url('${watchImg}')">
                <img src="/assets/svg/like.svg" class="like">
            </div>
            <p>${watcheName},${watchDescription}<br>  ${watchePrice}  €</p>
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
        <div class="images-small" style="background-image: url('${clotheImg}')">
            <img src="/assets/svg/like.svg" class="like">
          </div>
        <p>${clotheName}<br>  ${clothePrice}  €</p>
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
        <div class="images-small" style="background-image: url('${shoeImg}')">
            <img src="/assets/svg/like.svg" class="like">
        </div>
        <p>${shoeName}<br>  ${shoePrice}  €</p>
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
        // console.log(nameAndDescription);
        let price = words[1] + words[2];
        let itemImg = this.previousElementSibling.previousElementSibling.getAttribute('style');
        // console.log(price);
        let cartItem = ` <div class="cart-item">
                          <img class="img-cart" style="${itemImg}">
                          <p class="name-description">${nameAndDescription}</p>
                          <p class="item-current-price">${price}</p>
                          <img class="q minus" src="assets/svg/moins.svg">
                          <p class="quantity">quantité :</p>
                          <p>1</p>
                          <img class="q plus" src="assets/svg/plus.svg">
                          <p class="remove">supprimer</p>
                        </div>`;
        document.querySelector('.cart-wrapper').innerHTML += cartItem;
        removeToCart();
        quantity();
        finalPrice();
        numberInCart();
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
      // console.log(nameAndDescription);
      let price = words[1] + words[2];
      let itemImg = this.previousElementSibling.previousElementSibling.getAttribute('style');
      // console.log(price);
      let cartItem = ` <div class="cart-item">
                          <img class="img-cart" style="${itemImg}">
                          <p class="name-description">${nameAndDescription}</p>
                          <p class="item-current-price">${price}</p>
                          <img class="q minus" src="assets/svg/moins.svg">
                          <p class="quantity">quantité :</p>
                          <p>1</p>
                          <img class="q plus" src="assets/svg/plus.svg">
                          <p class="remove">supprimer</p>
                        </div>`;
        document.querySelector('.cart-wrapper').innerHTML += cartItem;
        removeToCart();
        quantity();
        finalPrice();
        numberInCart();
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
      // console.log(nameAndDescription);
      let price = words[1] + words[2];
      let itemImg = this.previousElementSibling.previousElementSibling.getAttribute('style');
      // console.log(price);
      let cartItem = ` <div class="cart-item">
                        <img class="img-cart" style="${itemImg}">
                        <p class="name-description">${nameAndDescription}</p>
                        <p class="item-current-price">${price}</p>
                        <img class="q minus" src="assets/svg/moins.svg">
                        <p class="quantity">quantité :</p>
                        <p>1</p>
                        <img class="q plus" src="assets/svg/plus.svg">
                        <p class="remove">supprimer</p>
                      </div>`;
        document.querySelector('.cart-wrapper').innerHTML += cartItem;
        removeToCart();
        quantity();
        finalPrice();
        numberInCart();
    })
  }
}


function removeToCart() {
  let items  = document.querySelectorAll('.cart-item');
  for ( item of items) {
    let remove = item.querySelector('.remove');
    remove.addEventListener('click', function() {
      this.closest('.cart-item').remove();
      finalPrice();
    })
  } 
}


function quantity() {
  let qButtons = document.querySelectorAll('.q');
  for ( q of qButtons) {
    q.addEventListener('click', function(){
      if ( this.className == "q plus") {
        let currentPrice = this.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
        currentPrice = currentPrice.split("  ");
        currentPrice = currentPrice[0];
        let quantity = this.previousElementSibling.textContent;
        quantity = parseInt(quantity);
        currentPrice = parseFloat(currentPrice);
        initialPrice = currentPrice / quantity;
        quantity += 1;
        this.previousElementSibling.textContent = quantity;
        let newPrice = initialPrice * quantity;
        this.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent = `${newPrice}  €`;
      }
      else {
        let currentPrice = this.previousElementSibling.textContent;
        currentPrice = currentPrice.split("  ");
        currentPrice = currentPrice[0];
        let quantity = this.nextElementSibling.nextElementSibling.textContent;
        currentPrice = parseFloat(currentPrice)
        quantity = parseInt(quantity);
        if ( quantity > 1) {
          initialPrice = currentPrice / quantity;
          quantity -= 1;
          this.nextElementSibling.nextElementSibling.textContent = quantity;
          let newPrice = initialPrice * quantity;
          this.previousElementSibling.textContent = `${newPrice}  €`;
        }
        else {
          console.log("erreur");
        }
      }
      finalPrice();
    })
  }
}



function finalPrice() {
  let prices = document.querySelectorAll('.item-current-price');
  let sum = 0;
  for ( currentP of prices ) {
    sum += parseFloat(currentP.textContent);
  }
  document.querySelector('.final-price').textContent = `prix total : ${sum} €`;
}


function numberInCart() {
  let numberInCart = document.querySelector('.cart container h2 span').textContent;
  let articles = document.querySelectorAll('.cart-item');
  articles = articles.length;
  numberInCart.textContent = articles;
}