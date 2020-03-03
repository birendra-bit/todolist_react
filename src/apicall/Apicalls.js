import Axios from 'axios'
const GetRequest = (url)=>{
    Axios.get().then(resp=>{
        console.log(resp)
        return resp.data;
    })
    .catch(err=>{
        console.log(err)
        return null;
    })
}
export default {
GetRequest
}