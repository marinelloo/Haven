import fakeServerInstance from "./instance";

export const fetchDoctorsList = async (limit = 10,page = 1) => {
    try {
        return await fakeServerInstance.get("/doctors", {
            params: {
                _limit: limit,
                _page: page
            }
        })
    } catch (e) {
        console.log(e)
    }
}

export const fetchDoctorAppointment = async (doctorId) => {
    try {
        return await fakeServerInstance.get(`doctorAppointment/`, {
            params: {
                doctorId_like: doctorId
            }
        })
    } catch (e) {
        console.log(e)
    }
}
