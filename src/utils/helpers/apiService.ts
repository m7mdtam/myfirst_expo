import axios from "axios";

const baseUrl = 'https://newsapi.org/v2'
const apiKey='7f2f26fdae944aa3967653a82df978bb'
export function get(url:string){
    const myUrl= `${baseUrl}${url}&apiKey=${apiKey}`;
    return axios.get(myUrl);
}