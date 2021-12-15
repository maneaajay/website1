import httpClient from "../http-common"

const create = (data) =>{
    return httpClient.post("/save-contact",data);
}

export default {create};