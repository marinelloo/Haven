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
                state.user = {...state, appointments: action.payload}
            },
            setId:(state, action) => {
                state.user = {...state, userId: action.payload}
            }
        }
    }
);

export const {login, logout, userAppointment, setId} = userSlice.actions;
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;