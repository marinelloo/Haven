import axios from "axios";

const fakeServerInstance = axios.create(
    {
        baseURL: "http://localhost:3004/",
        timeout: 3000,
    }
)

export default fakeServerInstance