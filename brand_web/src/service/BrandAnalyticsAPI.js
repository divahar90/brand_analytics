import axios from 'axios'
import {BrandURL} from '../utils/BrandConstants'

export const getAllBrands = function (){

    //this returns a promise object and the inner function returns
    //the actual values once promise is fullfilled
    return axios.get(BrandURL).then((response) => {
        console.log(response);
        if (response.status === 200 &&
            response.data.status === "success") {
            return response.data;
        } else {
            return false;
        }
    });
}


export const getBrand = function (brand){

    //this returns a promise object and the inner function returns
    //the actual values once promise is fullfilled
    let brandUrl = BrandURL + '/' + brand;
    return axios.get(brandUrl).then((response) => {
        console.log(response);
        if (response.status === 200 &&
            response.data.status === "success") {
            return response.data;
        } else {
            return false;
        }
    });
}

