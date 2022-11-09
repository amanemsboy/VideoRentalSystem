import axios from 'axios'; 

const Rental_API_BASE_URL = "http://localhost:8080/customers/";

class RentalService {

    getCustomers() {
        return axios.get(Rental_API_BASE_URL)
    }

    creatCustomer(rental) {
        return axios.post(Rental_API_BASE_URL, rental)
    }


    getCustomersById(rentalId){
        return axios.get(Rental_API_BASE_URL + '+' + rentalId);
    }
    
    updateCustomer(rental, rentalId) {
        return axios.put(Rental_API_BASE_URL + '/' + rentalId, rental)
    }

    deleteCustomer(rental, rentalId) {
        return axios.delete(Rental_API_BASE_URL + '/' + rentalId, rental)
    }
}


export default new RentalService(); 