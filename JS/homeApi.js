import get from "./home.Dom.js";

let API = "http://localhost:3000/data";

//GET DATA
async function getData() {
    try {
        let {data} = await axios.get(API);
        get(data);
    } catch (error) {
        console.error(error);
    }
};

export default getData;