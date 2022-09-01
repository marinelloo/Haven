import { createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice(
    {
        name: "user",
        initialState: {
            user: null
        },

        reducers: {
            login: (state, action) => {
                state.user = action.payload;
            },
            logout: (state) => {
                state.user = null
            },
            userAppointment: (state, action) => {
                console.log(action.payload)
                state.user = {...state, appointments: action.payload}
            }
        }
    }
);

export const {login, logout, userAppointment} = userSlice.actions;
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;