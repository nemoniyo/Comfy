// import get from "./products.Dom";

let API = "http://localhost:3000/products";
let Id = JSON.parse(localStorage.getItem("infoProduct"));
let PageAndNameProd = document.querySelector(".PageAndNameProd");
let imageProd = document.querySelector(".imageProd");
let nameProduct = document.querySelector(".nameProduct");
let nameBrand = document.querySelector(".nameBrand");
let priceProd = document.querySelector(".priceProd");
let descrip = document.querySelector(".descrip");
let btnAdd = document.querySelector(".btnAdd");

let homePage = document.querySelector(".homePage");
let productsPage = document.querySelector(".productsPage");
let aboutPage = document.querySelector(".aboutPage");

homePage.onclick = () => {
    window.location.href = "../HTML/home.html";
};

productsPage.onclick = () => {
    window.location.href = "../HTML/products.html";
};

aboutPage.onclick = () => {
    window.location.href = "../HTML/about.html";
};

//ASYNC FUNTIONS
async function getData() {
    try {
        let {data} = await axios.get(`${API}?id=${Id}`);
        bot(data);
    } catch (error) {
        console.error(error);
    }
};
getData();

function bot(data) {
    data.forEach((element) => {
        PageAndNameProd.innerHTML = `Home  /  ${element.name}`;
        imageProd.src = element.image;
        nameProduct.innerHTML = element.name;
        nameBrand.innerHTML = `By ${element.brand}`;
        priceProd.innerHTML = `${element.price},`;
        descrip.innerHTML = element.description;
    });
};