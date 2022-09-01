import axios from "axios";
import fakeServerInstance from "./instance";

export const fetchUsersList = async () => {
    try {
        return await fakeServerInstance.get("/users")
    } catch (e) {
        console.log(e)
    }
}

export const updateUser = async () => {
    try {
        return await fakeServerInstance.put(`users/${id}`)
    } catch (e) {

    }
}