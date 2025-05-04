import { searchService, seaerches,priceByRange } from "./produtsApi.js";

let box = document.querySelector(".box");
let inpSaerch = document.querySelector(".inpSaerch");
let homePage = document.querySelector(".homePage");
let productsPage = document.querySelector(".productsPage");
let aboutPage = document.querySelector(".aboutPage");
let all = document.querySelector(".all");
let ikea = document.querySelector(".ikea");
let marcos = document.querySelector(".marcos");
let caressa = document.querySelector(".caressa");
let liddy = document.querySelector(".liddy");
let inpSaerchPrice = document.querySelector(".inpSaerchPrice");
let rangePrice = document.querySelector(".rangePrice");

homePage.onclick = () => {
    window.location.href = "../HTML/home.html";
};

productsPage.onclick = () => {
    window.location.href = "../HTML/products.html";
};

aboutPage.onclick = () => {
    window.location.href = "../HTML/about.html";
};

inpSaerchPrice.oninput = () => {
    rangePrice.innerHTML = `Value: $${inpSaerchPrice.value}`
    priceByRange(+inpSaerchPrice.value);
};


//SEARCH
inpSaerch.oninput = () => {
    searchService(inpSaerch.value.trim())
};

//SEARCH BUTTONS ASYNC
all.onclick = () => {
    seaerches("");
}
ikea.onclick = () =>{
    seaerches("Ikea");
}
marcos.onclick = () =>{
    seaerches("Marcos");
}
caressa.onclick = () =>{
    seaerches("Caressa");
}
liddy.onclick = () =>{
    seaerches("Liddy");
}


//GET
function get(data) {
    box.innerHTML = "";
    data.forEach((element) => {
        let container = document.createElement("div");
        container.classList.add("container");

        let image = document.createElement("img");
        image.src = element.image;
        image.classList.add("image");
        image.onclick = () => {
            localStorage.setItem("infoProduct", JSON.stringify(element.id));
            window.location.href = "../HTML/info.html";
        };

        let name = document.createElement("p");
        name.innerHTML = element.name;
        name.classList.add("name");

        let brand = document.createElement("p");
        brand.innerHTML = element.brand;
        brand.classList.add("brand");

        let price = document.createElement("p");
        price.innerHTML = `$${element.price}`;
        price.classList.add("price");

        let btnAdd = document.createElement("button");
        btnAdd.innerHTML = "ADD TO CARD";
        btnAdd.classList.add("btnAdd");

        let cont = document.createElement("div");
        cont.append(name, brand);
        cont.classList.add("cont");

        container.append(image, cont, price, btnAdd);
        box.appendChild(container);
    });
};

export default get;