fetch("/products.json", {
   method: "POST",
   headers: {"Content-Type": "products/json"}, 
   body: JSON.stringify({filename: "", title: "", type: "", description: "", height: "", width: "", price:""})
})
   .then(respond => respond.json()) 
   .then(data => console.log(data))
