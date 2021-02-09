let loadOnPage = document.querySelectorAll('.load-more');
let json = "";

for (let i = 0; i < json.length; i++) {
  data[i].addEventListener('click', () => {
      moreProducts(products[i]);
      // console.log("hello");
  });
}

function moreProducts(products) {
    
    fetch('assets/products.json')
        .then((response) => response.json())
        .then(data => {
            // console.log(data);
            const card = "data";
            let output = "";
            console.log(data);
            const products = JSON.stringify(data);
            var itemsInLocal = localStorage.setItem('products', products);
            var itemsInStore = localStorage.getItem('products');
            var productInStore = JSON.parse(itemsInStore); //resonate products
            
            alert("hello");
            for (let i = 0; i < data.length; i++) {

                addProductPage.addEventListener('click', () => {


                 output += `

                  <div class="col-lg-4 col-sm-6 portfolio-item">
                    <div class="card h-100 border-0">
                      <img class="card-img-top" src="${data.img}"
                        onmouseover="this.src='${data[i].img}'
                        onmouseout="this.src='${data[i].img}'" height="350" alt="Reusable Canvas Lunch Bag" />
                      <div class="card-body">
                        <h4 class="card-title">${data[i].name}</h4>
                        <p class="item-price">
                          $${data[i].price}
                        </p>
                        <button type="submit" class="add-cart" id="addtocart">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>

                  `;

                document.getElementById("row").innerHTML = output;
                });
          
    };

})
}
