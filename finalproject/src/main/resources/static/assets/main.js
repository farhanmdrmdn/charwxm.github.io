// let carts = document.querySelectorAll('button#addtocart.btn.btn-primary.add-cart');

let products = [
        {
                name: "Asher Tall Shelf",
                tag: "ashertallshelf",
                pic: "asher_tallshelf1",
                price: 150,
                inCart: 0
        },
        {
                name: "Axel Side Chair",
                tag: "axelsidechair",
                pic: "axel_side_chair1",
                price: 100,
                inCart: 0
        },
        {
                name: "Bruno Dining Table",
                tag: "brunodiningtable",
                pic: "bruno_diningtable1",
                price: 1040,
                inCart: 0
        },
        {
                name: "Reusable Canvas Lunch Bag",
                tag: "reusablecanvaslunchbag",
                pic: "canvas_lunchbag1",
                price: 27,
                inCart: 0
        },
        {
                name: "Dual Tone 3 Seater Sofa",
                tag: "dualtone3seatersofa",
                pic: "dualtone_3seatersofa1",
                price: 399,
                inCart: 0
        },
        {
                name: "Emelie Tv Console",
                tag: "emelietvconsole",
                pic: "emelie_tvconsole1",
                price: 399,
                inCart: 0
        },
        {
                name: "Grasshoppa Floor Lamp",
                tag: "grasshoppafloorlamp",
                pic: "grasshoppa_floorlamp1",
                price: 149,
                inCart: 0
        },
        {
                name: "Cotton Triangle Quilt",
                tag: "cottontrianglequilt",
                pic: "cotton_triangle_quilt1",
                price: 189,
                inCart: 0
        },
        {
                name: "Linate Coffee Table",
                tag: "linatecoffeetable",
                pic: "linate_coffeetable1",
                price: 1279,
                inCart: 0
        },
        {
                name: "Reagan Book Shelf",
                tag: "reaganbookshelf",
                pic: "reagan_bookshelf1",
                price: 899,
                inCart: 0
        },
        {
                name: "Clare Dinner Plates Set",
                tag: "claredinnerplatesset",
                pic: "clare_dinnerplatesset1",
                price: 55,
                inCart: 0
        },
        {
                name: "Isabella Floor Lamp",
                tag: "isabellafloorlamp",
                pic: "isabella_floorlamp1",
                price: 179,
                inCart: 0
        }
];

let carts = document.querySelectorAll('.add-cart');

// "Add to cart" Function column
for (let i = 0; i < carts.length; i++) {
        carts[i].addEventListener('click', () => {
                alert("pressed");
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


// Email subscription

function storesignup() {
     var inputEmail= document.getElementById("emailSubscribe");
     localStorage.setItem("emailSubscribe", "inputEmail");
    }
