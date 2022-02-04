import axios from "axios";
import md5 from "md5";

const publicKey = "94a7a99e87565c295c21c82d0f5fead4"
const privateKey = "111ab2e40b6f823e0cc9b2543235e3f66cb0fe3c"

const ts = Number(new Date());

const hash = md5(ts+ privateKey+ publicKey) 

const api = axios.create({
    baseURL:'http://gateway.marvel.com/v1/public/',
    params:{
        ts,
        apikey:publicKey,
        hash,
    },  
});
export default api