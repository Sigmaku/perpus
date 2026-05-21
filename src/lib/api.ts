import axios from "axios";

const api = axios.create({
  baseURL: "https://gutendex.com",
  timeout: 0,
  headers:{
      "Content-Type":"application/json"
  }
})

export default api;