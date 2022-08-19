import axios from "axios";

const fakeServerInstance = axios.create(
    {
        baseURL: "http://localhost:3004/",
        timeout: 3000,
    }
)

// let refreshed = false;
//
//
// fakeServerInstance.interceptors.response.use((response) => {
//     if (refreshed === true) {
//         setIsUserLoggedIn(response.headers.acess, response.headers.refresh)
//     }
// }, () => {
//     if (error.code === 403) logOutUser(); isUserLoggedIn = false, wipeUserData, reload page
//     }
// )
//
// fakeServerInstance.interceptors.request.use((request) => {
//     request.headers.token = data.acess;
// }, (request) => {
//     if (error.code === 403) logOutUser(); isUserLoggedIn = false, wipeUserData, reload page
//     if (error.code === 403) {
//         request.headers.token = data.refresh;
//         refreshed = true;
//         return axios(request)
//     }
// })

export default fakeServerInstance