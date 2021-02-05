function addProductPage(){

        // TODO fetch requires http or https which is only provided by spring boot.

        fetch('file:///Users/charwan/Desktop/charwxm.github.io/finalproject/assets/products.json')
        .then(response => response.json())
        .then(data => alert(data));

//         fetch('assets/products.json')
//         .then((response) => response.json())
//         .then((json) => 
//             alert("hello")
//             const cards = json;
//             let output = "";
//             const products = JSON.stringify(json);
//             var itemsInLocal= localStorage.setItem('products', products);
//             var itemsInStore = localStorage.getItem('products');
//             var productInStore = JSON.parse(itemsInStore); //resonate products
//             for (let i = 0; i < json.length; i++) {
//                 output += `<div class="col-lg-4 col-sm-6 portfolio-item">
//             <div class="card h-100">
//                 <a href="#"
//                 ><img
//                     class="card-img-top"
//                     src="${json[i].image}"
//                     height="350"
//                 /></a>
//                 <div class="card-body">
//                 <h4 class="card-title">${json[i].name}</h4>
//                 <p class="card-text">
//                 ${json[i].description}
//                 </p>
//                 <p class="item-price">$${json[i].price}
//                 </p>
//                 <a class="add-cart cart2" href="#">Add Cart</a>
//                 </div>
//             </div>
//             </div>`

//             document.getElementById("cards").innerHTML = output;
//         }
// )



}

document.onload = addProductPage()


        // `<div class="col-sm-3"><div class="card p-1">
        //     <img class="card-img-top animate__animated animate__fadeIn" src="${json[i].image}" alt="">
        //     <div class="card-body">
        //         <h5 class="card-title">${json[i].name}</h5>
        //         <p class="card-text">$${json[i].price}</p>
        //         <button id="addToCart" type="button" class="btn btn-warning">Add to cart</button>
        //     </div>
        // </div></div>`