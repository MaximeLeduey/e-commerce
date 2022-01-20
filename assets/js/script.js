fetch('assets/json/products.json')
.then(response => response.json())
.then((jsonProducts) => {
  jsonProducts.watches.map((product) => {
    let watcheName = product.name;
    console.log(watcheName);
    let watchDescription = product.description;  
    let watchePrice = product.price;
    console.log(watchePrice);
    let watchImg = product.image;
    console.log(watchImg);


    let watchToInject = `
        <div class="watch">
            <div class="images-small">
                <img src="${watchImg}" class="like">
            </div>
            <p>${watcheName},${watchDescription}<br>${watchePrice}</p>
            <button class="btn-addtocart">Ajouter au panier</button>
        </div>`


    document.querySelector('.wrapper-watches').innerHTML += watchToInject;
  })
})



fetch('assets/json/products.json')
.then(response => response.json())
.then((jsonProducts) => {
  jsonProducts.clothes.map((product) => {
    let clotheName = product.name;
    console.log(clotheName); 
    let clothePrice = product.price;
    console.log(clothePrice);
    let clotheImg = product.image;
    console.log(clotheImg);


    let clotheToInject = `
        <div class="clothe">
        <div class="images-medium">
            <img src="${clotheImg}" class="like">
        </div>
        <p>${clotheName}<br>${clothePrice}</p>
        <button class="btn-addtocart">Ajouter au panier</button>
        </div>`


    document.querySelector('.wrapper-clothes').innerHTML += clotheToInject;
  })
})


fetch('assets/json/products.json')
.then(response => response.json())
.then((jsonProducts) => {
  jsonProducts.shoes.map((product) => {
    let shoeName = product.name;
    console.log(shoeName); 
    let shoePrice = product.price;
    console.log(shoePrice);
    let shoeImg = product.image;
    console.log(shoeImg);


    let shoeToInject = `
        <div class="shoe shoe-one">
        <div class="images-small">
            <img src="/assets/svg/like.svg" class="like">
        </div>
        <p>Costume trois pièces en laine<br> 450$</p>
        <button class="btn-addtocart">Ajouter au panier</button>
        </div>`


    document.querySelector('.wrapper-shoes').innerHTML += shoeToInject;
  })
})