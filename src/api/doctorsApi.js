import fakeServerInstance from "./instance";

export const fetchDoctorsList = async (limit = 20,page = 1) => {
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
        console.log(e)
    }
}

export const filterDoctorsListByLanguage = async (filterValue) => {
    try {
        return await fakeServerInstance.get('/doctors', {
            params: {
                language_like: filterValue
            }
        })
    } catch (e) {
        console.log(e)
    }
}

export const filterDoctorsListBySpec = async (filterValue) => {
    try {
        return await fakeServerInstance.get('doctors', {
            params: {
                specialisation_like: filterValue
            }
        })

    } catch (e) {
        console.log(e)
    }
}


export const justFilter = async (genderFilter, languageFilter, specValue) => {
    try {
        return await fakeServerInstance.get('doctors', {
            params: {
                specialisation_like: specValue,
                language_like: languageFilter,
                gender: genderFilter
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
