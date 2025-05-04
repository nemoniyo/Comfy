let box = document.querySelector(".box");
let homePage = document.querySelector(".homePage");
let productsPage = document.querySelector(".productsPage");
let aboutPage = document.querySelector(".aboutPage");
let btnShownow = document.querySelector(".btnShownow");
let btnAllProducts = document.querySelector(".btnAllProducts");

homePage.onclick = () => {
    window.location.href = "../HTML/home.html"
}
productsPage.onclick = () => {
    window.location.href = "../HTML/products.html"
}
btnShownow.onclick = () => {
    window.location.href = "../HTML/products.html"
}
btnAllProducts.onclick = () => {
    window.location.href = "../HTML/products.html"
}
aboutPage.onclick = () => {
    window.location.href = "../HTML/about.html"
}


//GET
function get(data) {
    data.forEach((element) => {
        let container = document.createElement("div");
        container.classList.add("container");

        let image = document.createElement("img");
        image.src = element.image;
        image.classList.add("image");

        let nameProd = document.createElement("h2");
        nameProd.classList.add("nameProd");
        nameProd.innerHTML = element.product;

        let price = document.createElement("p");
        price.classList.add("price");
        price.innerHTML = element.price;

        container.append(image, nameProd, price);
        box.appendChild(container);
    });
};

export default get;