let carts = document.querySelectorAll('.add-cart');

let products = [
        {
                name: "Asher Tall Shelf",
                tag: "asher_tallshelf1.jpg",
                price: 150,
                inCart: 0
        },
        {
                name: "Axel Side Chair",
                tag: "axel_seide_chair1.jpg",
                price: 100,
                inCart: 0
        },
        {
                name: "Bruno Dining Table",
                tag: "bruno_diningtable1.jpg",
                price: 1040,
                inCart: 0
        },
        {
                name: "Claire Dinner Plates Set",
                tag: "clare_dinnerplateset1.jpg",
                price: 54.8,
                inCart: 0
        },
        {
                name: "Dual Tone 3 Seater Sofa",
                tag: "dualtone_3seatersofa1.jpg",
                price: 399,
                inCart: 0
        },
        {
                name: "Emelie Tv Console",
                tag: "emelie_tvconsole1.jpg",
                price: 399,
                inCart: 0
        },
        {
                name: "Grasshoppa Floor Lamp",
                tag: "grasshoppa_floorlamp1.jpg",
                price: 149,
                inCart: 0
        },
        {
                name: "Isabella Floor Lamp",
                tag: "isabella_floorlamp1.jpg",
                price: 179,
                inCart: 0
        },
        {
                name: "Linate Cofee Table",
                tag: "linate_coffeetable1.jpg",
                price: 1279,
                inCart: 0
        },
        {
                name: "Reagan Book Shelf",
                tag: "reagan_bookshelf1.jpg",
                price: 899,
                inCart: 0
        },
        {
                name: "Isabella Floor Lamp",
                tag: "isabella_floorlamp1.jpg",
                price: 179,
                inCart: 0
        },
        {
                name: "Linate Cofee Table",
                tag: "linate_coffeetable1.jpg",
                price: 1279,
                inCart: 0
        },
]

for (let i = 0; i < carts.length; i++) {
        carts[i].addEventListener('click', () => {
                cartNumbers(products[i]);
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

onLoadCartNumbers();