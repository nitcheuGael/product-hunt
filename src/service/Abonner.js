
import axios from 'axios';
const URL = "http://localhost:8060";
class Abonner {

    connexion () {
        return axios.get(`${URL}/login`);
    }

    update_Abonner (email) {
        return axios.put(`${URL}/update_abonner/`, email);
    }

} export default new Abonner();