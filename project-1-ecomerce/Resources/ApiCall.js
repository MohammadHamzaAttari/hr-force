import { base } from '../apiUrlsPath'
export async function GetApi(address){
    try{        
    const response=await fetch(base+address);
            if(!response.ok){
                throw new Error('Network response was not ok')
            }
            const data=await response.json()
            console.log("ApiCalls"+data)
            return data;
        }
        catch(error){
            console.error("Error fetching Data",error)
             throw error;
            }
}