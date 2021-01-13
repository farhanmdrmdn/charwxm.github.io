let carts = document.querySelectorAll('.add-cart');

let products = [
        {
                name: "Asher Tall Shelf",
                tag: "asher_tallshelf1",
                price: 150,
                inCart: 0
        },
        {
                name: "Axel Side Chair",
                tag: "axel_side_chair1",
                price: 100,
                inCart: 0
        },
        {
                name: "Bruno Dining Table",
                tag: "bruno_diningtable1",
                price: 1040,
                inCart: 0
        },
        {
                name: "Clare Dinner Plates Set",
                tag: "clare_dinnerplateset1",
                price: 54.8,
                inCart: 0
        },
        {
                name: "Dual Tone 3 Seater Sofa",
                tag: "dualtone_3seatersofa1",
                price: 399,
                inCart: 0
        },
        {
                name: "Emelie Tv Console",
                tag: "emelie_tvconsole1",
                price: 399,
                inCart: 0
        },
        {
                name: "Grasshoppa Floor Lamp",
                tag: "grasshoppa_floorlamp1",
                price: 149,
                inCart: 0
        },
        {
                name: "Isabella Floor Lamp",
                tag: "isabella_floorlamp1",
                price: 179,
                inCart: 0
        },
        {
                name: "Linate Cofee Table",
                tag: "linate_coffeetable1",
                price: 1279,
                inCart: 0
        },
        {
                name: "Reagan Book Shelf",
                tag: "reagan_bookshelf1",
                price: 899,
                inCart: 0
        },
        {
                name: "Isabella Floor Lamp",
                tag: "isabella_floorlamp1",
                price: 179,
                inCart: 0
        },
        {
                name: "Linate Cofee Table",
                tag: "linate_coffeetable1",
                price: 1279,
                inCart: 0
        },
]

// "Add to cart" Function column

for (let i = 0; i < carts.length; i++) {
        carts[i].addEventListener('click', () => {
                cartNumbers(products[i]);
                totalCost(products[i]);
        })
}

function onLoadCartNumbers() {
        let productNumbers = localStorage.getItem
        ('cartNumbers');

        if (productNumbers) {
                document.querySelector('.cart span').textContent = productNumbers;
        }
}

function cartNumbers(product) {

        let productNumbers = localStorage.getItem
        ('cartNumbers');

        productNumbers = parseInt(productNumbers);

        if( productNumbers ) {
                localStorage.setItem('cartNumbers', productNumbers 
                + 1);
                document.querySelector('.cart span').textContent = 
                productNumbers + 1;
        } else {
                localStorage.setItem('cartNumbers', 1)
                document.querySelector('.cart span').textContent = 
                1;
        }
        setItems(product);
}

function setItems(product) {
        let cartItems = localStorage.getItem('productInCart');
        cartItems = JSON.parse(cartItems);

        if (cartItems != null) {

                if(cartItems[product.tag] == undefined) {
                        cartItems = {
                                ...cartItems,
                                [product.tag]: product
                        }
                }
                cartItems[product.tag].inCart += 1;
        } else {
                product.inCart = 1;
                cartItems = {
                        [product.tag]: product
                }
        }
        localStorage.setItem("productInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
        // console.log("The price is ", product.price);
        let cartCost = localStorage.getItem('totalCost');
        
        console.log("My cartCost is", cartCost);
        console.log(typeof cartCost );

        if(cartCost != null) {
                cartCost = parseInt(cartCost)
                localStorage.setItem('totalCost', cartCost + product.price);
        } else {
                localStorage.setItem("totalCost", product.price);
        }
}

// Shopping cart display

function displayCart() {
        let cartItems = localStorage.getItem("productInCart");
        cartItems = JSON.parse(cartItems);
        let productContainer = document.querySelector
                (".products");
        
        console.log(cartItems);
        if( cartItems && productContainer ) {
                productContainer.innerHTML = '';
                Object.values(cartItems).map(item => {
                        productContainer.innerHTML += `

                                <div class = "productsCart">
                                        <ion-icon name="close-circle-outline"></ion-icon>
                                        <img src="assets/img/product/${item.tag}.jpeg" class="p3">
                                        <span>${item.name}</span>                      
                                </div>
                                
                                <div class = "priceCart">
                                        $${item.price}
                                </div>

                                <div class = "quantityCart">
                                        <ion-icon name="caret-back-outline"></ion-icon>
                                        <span>${item.inCart}</span>
                                        <ion-icon name="caret-forward-outline"></ion-icon>
                                </div>

                                <div class="totalCart">
                                        $${item.inCart * item.price}
                                </div>
                                <br> 

                        `
                });
        }
}

onLoadCartNumbers();
displayCart();

// fetch data function

function fetchUserData() {
        fetch('product.json')
        .then(response => response.json())
        .then(users => {
            let output = '<h2>List of Users</h2>';
            output += '<ul>';
                users.forEach(function(user) {
                    output += `
                  <div class="col-lg-4 col-sm-6 portfolio-item">
                    <div class="card h-100">
                      <a href="#"><img
                          class="card-img-top"
                          src="assets/img/product/linate_coffeetable1.jpeg"
                          height="350"
                          alt=""
                      /></a>
                      <div class="card-body">
                        <h4 class="card-title">Linate Coffee Table</h4>
                        <p class="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                        <a class="add-cart cart12" href="#">Add Cart</a>
                      </div>
                    </div>
                  </div>
                `;
                });
                output +='</ul>';
                document.getElementById("response").innerHTML = output;
        });
    }