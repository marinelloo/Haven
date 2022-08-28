import axios from "axios";
import fakeServerInstance from "./instance";

export const fetchUsersList = async () => {
    try {
        return await fakeServerInstance.get("/doctors")
    } catch (e) {
        console.log(e)
    }
}