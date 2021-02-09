function addProductPage() {
    // TODO fetch requires http or https which is only provided by spring boot.
    fetch('assets/products.json')
        .then((response) => response.json())
        .then(data => {
            // console.log(data);
            const card = "json";
            let output = "";
            console.log("----------------------------");
            console.log(data);
            const products = JSON.stringify(data);
            var itemsInLocal = localStorage.setItem('products', products);
            var itemsInStore = localStorage.getItem('products');
            var productInStore = JSON.parse(itemsInStore); //resonate products
            
            // alert("hello");
            for (let i = 0; i < data.length; i++) {

                console.log(data[i])
                output += `<div class="col-lg-4 col-sm-6 portfolio-item">
            <div class="card h-100">
                <a href="#"
                ><img
                    class="card-img-top"
                    src="${data[i].img}"
                    height="350"
                /></a>
                <div class="card-body">
                <h4 class="card-title">${data[i].name}</h4>
                <p class="item-price">$${data[i].price}
                </p>
                <a class="add-cart cart1" href="#">Add Cart</a>
                </div>
            </div>
            </div>`

                document.getElementById("card").innerHTML = output;
            }
        })
}

document.onclick = addProductPage()