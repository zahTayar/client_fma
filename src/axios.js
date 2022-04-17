import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost:8041/twins/"
})

export default instance;