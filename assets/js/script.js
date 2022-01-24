// -------------------------------------------------------------------------------------------------------------------
// section où on va aller chercher les informations sur les différents articles pour créer les articles sur la page.
// à noter que ayant 3 types d'articles différents sur la page, j'ai du faire 3 fetchs différents
// -------------------------------------------------------------------------------------------------------------------



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
        <div class="images-medium" style="background-image: url('${clotheImg}')">
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

 


// -------------------------------------------------------------------------------------------------------------------
// section où on va s'occuper de l'ajout et de la suppression des articles au panier, encore une fois, mes 3 types d'articles m'obligent 
// à faire 3 fonctions distinctes
// -------------------------------------------------------------------------------------------------------------------


// on ajoute une montre au panier au clic sur le bouton en allant chercher ses informations afin de creer un
// élement dans le panier


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


// on ajoute un costume au panier au clic sur le bouton en allant chercher ses informations pour créer un 
// élement dans le panier


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



// on ajoute une chaussure au panier au clic sur le bouton en allant chercher ses informations pour créer un 
// élement dans le panier


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


// au clic sur supprimer, on supprime l'élement en question du panier


function removeToCart() {
  let items  = document.querySelectorAll('.cart-item');
  for ( item of items) {
    let remove = item.querySelector('.remove');
    remove.addEventListener('click', function() {
      this.closest('.cart-item').remove();
      finalPrice();
      numberInCart();
    })
  } 
}



// -------------------------------------------------------------------------------------------------------------------
//  section dans laquelle on va s'occuper de la quantité des articles dans le panier ainsi que de la variation du prix
//  en fonction de la quantité
// -------------------------------------------------------------------------------------------------------------------


// au clic sur le moins ou le plus, on va ajouter ou soustraire une occurence d'article,
// puis calculer le prix de la somme des occurences de cet article ( le même article en plusieurs fois encore ) en 
// fonction de la quantité


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



// Cette fonction calcule la somme des prix de tous les articles présents dans le panier (avec les articles en plusieurs exemplaires 
// aussi). Elle s'actualise à l'ajout d'un article au panier, à la suppression d'un article au panier, et aux variations de quantité
// d'un même article



function finalPrice() {
  let prices = document.querySelectorAll('.item-current-price');
  let sum = 0;
  for ( currentP of prices ) {
    sum += parseFloat(currentP.textContent);
  }
  document.querySelector('.final-price').textContent = `prix total : ${sum} €`;
}



// cette fonction indique le nombre d'articles différents dans le panier, elle s'actualise à l'ajout et à
// la suppression d'un article au panier



function numberInCart() {
  let articles = document.querySelectorAll('.cart-item');
  articles = articles.length;
  document.querySelector('.cart-container h2 span').textContent = articles;
}