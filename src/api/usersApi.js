import axios from "axios";
import fakeServerInstance from "./instance";

export const fetchUsersList = async () => {
    try {
        return await fakeServerInstance.get("/users")
    } catch (e) {
        console.log(e)
    }
}

export const fetchUserAppointment = async (userId) => {
    try {
        return await fakeServerInstance.get(`appointments/`, {
            params: {
                userId_like: userId
            }
        })
    } catch (e) {
        console.log(e)
    }
}