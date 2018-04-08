let ul = document.querySelector("ul")

class Product{
    constructor(name, price, imageUrl){
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}

class Store{
    constructor(){
        this.products = []
    }

    add(product){
        this.products.push(product)
    }
}


axios.get("https://www.redbullshopus.com/products.json")
.then((response) => {


    let data = response.data.products;
    console.log(data);
    let store = new Store()
    data.forEach((item) => {
        let li = document.createElement("li")
        let img = document.createElement("img")
        let name = document.createElement("h2")
        let p2 = document.createElement("p")
    
        store.add(
            new Product(
                item.title,
                item.variants[0].price,
                item.images[0].src
            )
        )

        img.src = item.images[0].src
        name.innerHTML = item.title;
        p2.innerHTML = "$"+item.variants[0].price
        li.appendChild(img)
        li.appendChild(name)
        name.appendChild(p2)
        ul.appendChild(li)
    })
    console.log(store)
})