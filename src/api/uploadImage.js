import axios from "axios";
import fakeServerInstance from "./instance";

// export const uploadFile = (url, file) => {
//     let formData = new FormData();
//     formData.append("file", file);
//     axios.post(url, formData, {
//         headers: {
//             "Content-Type": "multipart/form-data",
//         },
//     }).then((response) => {
//         fnSuccess(response);
//     }).catch((error) => {
//         fnFail(error);
//     });
// };

export const uploadImage = async (url, file) => {
    let formData = new FormData();
    formData.append('file', file);

    try {
        return await fakeServerInstance.patch(url, formData,
            {
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        })
    } catch (e) {
        console.log(e)
    }

}