import AxiosInstance from "../../constants/AxiosInstance";

export async function getSongs(){
    const {data} = await AxiosInstance.get('/abcd');
    let dataArr = [];
    for(let key in data){
        if(key != 'success'){
            dataArr.push(data[key]);          
        }
    }
    return Promise.resolve(dataArr);
}