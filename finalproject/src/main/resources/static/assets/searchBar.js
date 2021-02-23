function addToCart(element){
    alert("added");
    // console.log(method);
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    
}


const productsList = document.getElementById('productsList');
const searchBar = document.getElementById('searchBar');
let cdfProducts = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredProducts= cdfProducts.filter((product) => {
        return (
            product.name.toLowerCase().includes(searchString) ||
            product.tag.toLowerCase().includes(searchString)
        );
    });
    displayProducts(filteredProducts);
});


const loadCharacters = async () => {
    try {
        const res = await fetch('assets/products.json');
        cdfProducts = await res.json();
        displayProducts(cdfProducts);


let carts = document.querySelectorAll('.add-cart');


// "Add to cart" Function column
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
            cartNumbers(products[i]);
            totalCost(products[i]);
    });
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
            document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product, action) {

    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);
    
    if( action ) {
            localStorage.setItem('cartNumbers', productNumbers - 1);
            document.querySelector('.cart span').textContent = 
            productNumbers - 1;

    } else if (productNumbers) {
            localStorage.setItem('cartNumbers', productNumbers +1)
            document.querySelector('.cart span').textContent = productNumbers + 1;
    } else { 
            localStorage.setItem("cartNumbers", 1);
            document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
            let currentProduct = product.tag;

            if(cartItems[currentProduct] == undefined) {
                    cartItems = {
                            ...cartItems,
                            [currentProduct]: product
                    }
            }
            cartItems[product.tag].inCart += 1;

    } else {
            product.inCart = 1;
            cartItems = {
                    [product.tag]: product
            };
    }

    localStorage.setItem("productInCart", JSON.stringify(cartItems));
}

function totalCost(product,action) {
    let cartCost = localStorage.getItem('totalCost');
    
    // console.log("My cartCost is", cartCost);
    // console.log(typeof cartCost );
   
    if(action) {
            cartCost = parseInt(cartCost)

            localStorage.setItem("totalCost", cartCost - product.price);
    } else if(cartCost != null) {
            
            cartCost = parseInt(cartCost);
            
            localStorage.setItem("totalCost", cartCost + product.price);

    } else {
            localStorage.setItem("totalCost", product.price);
    }
}

// Shopping cart 

function displayCart() {
    let cartItems = localStorage.getItem("productInCart");
    // console.log(cartItems);
    cartItems = JSON.parse(cartItems);

    let cartCost = localStorage.getItem('totalCost');
    cartCost = parseInt(cartCost);

    let productContainer = document.querySelector
            (".productsIncart");
    

if( cartItems && productContainer ) {
            productContainer.innerHTML = '';
            Object.values(cartItems).map(item => {
                    productContainer.innerHTML += `
                    <div class = "cartClass">
                            <div class = "productsCart">
                                    <ion-icon name="close-circle-outline"></ion-icon>
                                    <img src="assets/img/product/${item.pic}.jpeg" class="p3">
                                    <span>${item.name}</span>                      
                            </div>
                            
                            <div class = "priceCart">
                                    $${item.price}
                            </div>

                            <div class = "quantityCart">
                                    <ion-icon class="decrease" name="caret-back-outline"></ion-icon>
                                    <span>${item.inCart}</span>
                                    <ion-icon class="increase " name="caret-forward-outline"></ion-icon>
                            </div>

                            <div class="totalCart">
                                    $${item.inCart * item.price}
                            </div>
                    </div>

                    `
            });
                    productContainer.innerHTML += `
                            <div class="basketTotalContainer">
                                    <h4 class="basketTotalTitle">
                                             Total : 
                                    </h4>
                                    
                                    <h4 class ="basketTotal">
                                             $${cartCost}
                                    </h4>
                            </div>

                    <div class="checkOut">
                            <div class="checkOut btn">
                              <a class="btn btn-md btn-secondary btn-block" href="checkout_success.html">Check Out</a>
                            </div>
                          </div>
                    `
                    
    removeCart();
    manageQuantity();
    }
}

// Button function on Shopping cart
function manageQuantity() {
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let currentQuantity = 0;
    let currentProduct = '';
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);

    for(let i=0; i < increaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            // console.log(cartItems);
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            // console.log(currentQuantity);
            currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            // console.log(currentProduct);

            if( cartItems[currentProduct].inCart > 1 ) {
                cartItems[currentProduct].inCart -= 1;
                cartNumbers(cartItems[currentProduct], "decrease");
                totalCost(cartItems[currentProduct], "decrease");
                localStorage.setItem('productInCart', JSON.stringify(cartItems));
                displayCart();
            }
        });

        increaseButtons[i].addEventListener('click', () => {
            // console.log(cartItems);
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            // console.log(currentQuantity);
            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLocaleLowerCase().replace(/ /g,'').trim();
            // console.log(currentProduct);

            cartItems[currentProduct].inCart += 1;
            cartNumbers(cartItems[currentProduct]);
            totalCost(cartItems[currentProduct]);
            localStorage.setItem('productInCart', JSON.stringify(cartItems));
            displayCart();
        });
    }
}

function removeCart() {
let removeCart = document.querySelectorAll('.productsCart ion-icon');
let productNumbers = localStorage.getItem('cartNumbers');
let cartCost = localStorage.getItem("totalCost");
let cartItems = localStorage.getItem('productInCart');
cartItems = JSON.parse(cartItems);
let productName;
//     console.log(cartItems);

for(let i=0; i < removeCart.length; i++) {
    removeCart[i].addEventListener('click', () => {
        productName = removeCart[i].parentElement.textContent.toLocaleLowerCase().replace(/ /g,'').trim();
    //     console.log(cartItems);
        localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
        localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price * cartItems[productName].inCart));

        delete cartItems[productName];
        localStorage.setItem('productInCart', JSON.stringify(cartItems));
        

    

        displayCart();
        onLoadCartNumbers();
    })
    
}
//     localStorage.clear();
}

onLoadCartNumbers();
displayCart();


function addProductPage() {
    // TODO fetch requires http or https which is only provided by spring boot.
    fetch('assets/products.json')
        .then((response) => response.json())
        .then(products => {
            

            // const card = "json";
            // let output = "";

            // const fetchProducts = JSON.stringify(products);

            // var itemsInLocal = localStorage.setItem('fetchProducts', fetchProducts);
            // var itemsInStore = localStorage.getItem('fetchProducts');
            // var productInStore = JSON.parse(itemsInStore); //resonate products
            
            // // alert("hello");
            // for (let i = 0; i < products.length; i++) {

            //     output += `<div class="col-lg-4 col-sm-6 portfolio-item">
            // <div class="card h-100 border-0">
            //     <img
            //         class="card-img-top"
            //         src="${products[i].img}"
            //         onmouseover="this.src='${products[i].img1}'"
            //         onmouseout="this.src='${products[i].img2}'"
            //         height="350"
            //         alt="${products[i].name}
            //         />
            //     <div class="card-body">
            //     <h4 class="card-title">${products[i].name}</h4>
            //     <p class="item-price">$${products[i].price}
            //     </p>
            //     <button type="submit" class="btn btn-primary add-cart" id="addtocart">
            //     Add to cart
            //     </button>
            //         </div>
            //     </div>
            // </div>`

            // //     document.getElementById("card").innerHTML = output;
                
            // }
        });
}

document.onload = addProductPage()

    } catch (err) {
        console.error(err);
    }
};

const displayProducts= (products) => {
    const htmlString = products
        .map((item => {
            return `
            <div class="col-lg-4 col-sm-6x portfolio-item">
                <div class="card h-100 border-0">
                    <img
                        class="card-img-top"
                        src="${item.img}"
                        onmouseover="this.src='${item.img1}'"
                        onmouseout="this.src='${item.img2}'"
                        height="350"
                        alt="${item.name}
                        />
                    <div class="card-body">
                    <h4 class="card-title">${item.name}</h4>
                    <p class="item-price">$${item.price}
                    </p>
                    <button data-price="${item.price}" onClick="addToCart(this)" type="submit" class="btn btn-primary add-cart" id="addtocart">
                    Add to cart
                    </button>
                </div>
        </div>
</div>
        `;
        }))
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();

function hideIcon(self) {
    self.style.backgroundImage = 'none';
}

