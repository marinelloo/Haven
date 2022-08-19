import LoginPage from "../Scenes/LoginPage/LoginPage";
import MyAccount from "../Scenes/MyAccount/MyAccount";
import Home from "../Scenes/Home/Home";
import Doctors from "../Scenes/Doctors/Doctors";


export const RouteNames = {
    LOGIN: '/login',
    MY_ACCOUNT: '/my-account',
    HOME: '/home',
    DOCTORS: '/doctors'
}

export const loggedInContent = [
    {path: RouteNames.LOGIN, exact: true, component: LoginPage}
]

export const loggedOutContent = [
    {path: RouteNames.MY_ACCOUNT, exact: true, component: MyAccount},
    {path: RouteNames.HOME, exact: false, component: Home},
    {path: RouteNames.DOCTORS, exact: false, component: Doctors}
]