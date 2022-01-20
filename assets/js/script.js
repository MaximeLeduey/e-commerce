fetch('assets/json/products.json')
.then(response => response.json())
.then((jsonProducts) => {
  jsonProducts.watches.map((product) => {
    let title = product.price;
    console.log(title);  
  })
})


fetch('assets/json/products.json')
.then(response => response.json())
.then((jsonProducts) => {
  jsonProducts.clothes.map((product) => {
    let title = product.price;
    console.log(title);   
  })
})


fetch('assets/json/products.json')
.then(response => response.json())
.then((jsonProducts) => {
  jsonProducts.shoes.map((product) => {
    let title = product.price;
    console.log(title);   
  })
})