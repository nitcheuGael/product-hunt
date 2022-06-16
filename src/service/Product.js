import axios from 'axios';
const URL = "http://localhost:8060";

class Product {


    add_product (Post) {
        return axios.post(`${URL}/add_product/`, Post);
    }


    update_product (product, id) {
        return axios.put(`${URL}/update_product/${id}`, product);
    }

    list_Product (lienProduct) {
        return axios.get(`${URL}/list_Product/${lienProduct}`);
    }

    existe_2 (lienProduct) {
        return axios.get(`${URL}/existe_2/${lienProduct}`);
    }

    list_Product_all () {
        return axios.get(`${URL}/list_Product_all`);
    }

    lien_exist (lienProduct) {
        return axios.get(`${URL}/lien_exist/${lienProduct}`);
    }
    delete (id) {
        return axios.delete(`${URL}/delete/${id}`);
    }


}
export default new Product();