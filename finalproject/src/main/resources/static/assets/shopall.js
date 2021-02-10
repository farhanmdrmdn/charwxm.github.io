function addProductPage() {
    // TODO fetch requires http or https which is only provided by spring boot.
    fetch('assets/products.json')
        .then((response) => response.json())
        .then(data => {
            // console.log(data);
            const card = "json";
            let output = "";
            // console.log("----------------------------");
            console.log(data);
            const products = JSON.stringify(data);
            var itemsInLocal = localStorage.setItem('products', products);
            var itemsInStore = localStorage.getItem('products');
            var productInStore = JSON.parse(itemsInStore); //resonate products
            
            // alert("hello");
            for (let i = 0; i < data.length; i++) {

                console.log(data[i])
                output += `<div class="col-lg-4 col-sm-6 portfolio-item">
            <div class="card h-100 border-0">
                <img
                    class="card-img-top"
                    src="${data[i].img}"
                    onmouseover="this.src='${data[i].img1}'"
                    onmouseout="this.src='${data[i].img2}'"
                    height="350"
                    alt="${data[i].name}
                    />
                <div class="card-body">
                <h4 class="card-title">${data[i].name}</h4>
                <p class="item-price">$${data[i].price}
                </p>
                <button type="submit" class="btn btn-primary add-cart" id="addtocart">
                Add to cart
                </button>
                    </div>
                </div>
            </div>`

                document.getElementById("card").innerHTML = output;
            }
        })
}

document.onclick = addProductPage()