import axios from "axios"

const request = axios.create({
    baseURL : "http:///52.78.24.35/api"
})

export const api = {
    cartdata : {
        findUser:(id) => request.get(`/user/all/${id}`),
        getItembyId:(itemid) => request.get(`/product/searchbyseq/${itemid}`),
        getCompbyId:(compid) => request.get(`/company/${compid}`),
        getList:(id) => request.get(`/cartlist/${id}`)
    }
}