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
        price: 0,
        inCart: 0
},
{
        name: "",
        tag: "emelie_tvconsole1.jpg",
        price: 0,
        inCart: 0
},
{
        name: "",
        tag: "grasshoppa_floorlamp1.jpg",
        price: 0,
        inCart: 0
},
{
        name: "",
        tag: "isabella_floorlamp1.jpg",
        price: 0,
        inCart: 0
},
{
        name: "",
        tag: "linate_coffeetable1.jpg",
        price: 0,
        inCart: 0
},
{
        name: "",
        tag: "reagan_bookshelf1.jpg",
        price: 0,
        inCart: 0
},
{
        name: "",
        tag: "",
        price: 0,
        inCart: 0
},
{
        name: "",
        tag: "",
        price: 0,
        inCart: 0
},
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    console.log("The product clicked is", product);
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers  + 1;
    } else {
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.cart span').textContent = 1;
    }
}

onLoadCartNumbers();