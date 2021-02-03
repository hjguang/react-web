import axios from "axios";

const save= async (menu)=>{
  let result = axios.post('/api/menu',menu)
  return await result
}

export{
  save
}