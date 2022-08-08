import fakeServerInstance from "./instance";

export const fetchDoctorsList = async () => {
    try {
        const response = await fakeServerInstance.get("/doctors");
        return response.data
    } catch (e) {
        console.log(e)
    }
}