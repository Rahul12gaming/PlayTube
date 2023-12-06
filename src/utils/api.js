import axios from 'axios';
const BASE_URL= 'https://youtube138.p.rapidapi.com';
const options = {
 
  params: {hl: 'en', gl: 'US'},
  headers: {
    'X-RapidAPI-Key': '9828e2587bmsh2f37a5daa7c19f7p173d67jsn045cebdffbb0',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchDataFromApi=async(url)=>{
   
        try
        {
            const {data} = await axios.get(`${BASE_URL}/${url}`,options);
            return data;
        }
        catch(err){
            console.log(err.message);
        }
    
}