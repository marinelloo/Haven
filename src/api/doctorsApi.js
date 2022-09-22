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


export const sortDoctorList = async (sortType, asc) => {
    try {
        return await fakeServerInstance.get('/doctors', {
            params: {
                _sort: sortType,
                _order: asc
            }
        })
    } catch (e) {
        console.log(e)
    }
}

export const searchDoctorsList = async (query) => {
    try {
        return await fakeServerInstance.get('/doctors', {
            params: {
                q: query
            }
        })
    } catch (e) {
        console.log(e)
    }
}

export const filterDoctorsListByGender = async (filterValue) => {
    try {
        return await fakeServerInstance.get('/doctors', {
            params: {
                gender: filterValue
            }
        })

    } catch (e) {

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
