import get from "./products.Dom.js";

let API = "http://localhost:3000/products";

//GET DATA
async function getData() {
    try {
        let { data } = await axios.get(API);
        get(data);
    } catch (error) {
        console.error(error);
    }
};

//SEARCH
async function searchService(user) {
    try {
        let {data} = await axios.get(`${API}?name=${user}`);
        get(data);
    } catch (error) {
        console.error(error);
    }
};

//SEARCH BUTTONS ASYNC
async function seaerches(prod) {
    try {
        let data = await axios.get(`${API}?brand=${prod}`);
        get(data.data);
    } catch (error) {
        console.error(error);
    }
}

//RANGE
async function priceByRange(narx) {
    try {
        let response = await axios.get(API);
        if(narx == 0){
            get(response.data);
        }
        else {
            let filter = response.data.filter(({price}) => {
                return price <= narx
            })
            get(filter);
        }
    } catch (error) {
        console.error(error);
    }
}

export { getData, searchService, seaerches,priceByRange };