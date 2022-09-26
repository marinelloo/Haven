import React, {useState} from 'react';
import UserLayout from "../../Layout/UserLayout";
import {useDispatch, useSelector} from "react-redux";
import {login, selectUser, userUpdate} from "../../store/features/user/userSlice";
import {MyAccountStyled} from "./MyAccount.styled";
import axios from "axios";
import 'antd/dist/antd.css';
import AccountProfile from "../../components/AccountProfile/AccountProfile";
import {getBase64} from "../../scripts/ImageConvert";



const MyAccount = () => {
    const user = useSelector(selectUser);
    const userId = user.userId;
    const [currentUser, setCurrentUser] = useState({})
    const [selectedImage, setSelectedImage] = useState([]);
    const [previewOpen, setPreviewOpen] = useState(true);
    const [previewTitle, setPreviewTitle] = useState('');
    const dispatch = useDispatch();


    const initialValues = {
        name: user.name,
        email: user.email,
        lastName: user.lastName,
        password: user.password,
        userAvatar: user.userAvatar
    }

    const [previewImage, setPreviewImage] = useState(initialValues.userAvatar);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };


    const handleSubmit = (values) => {
        dispatch(userUpdate({
            name: values.name,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            userAvatar: previewImage,
            userId: userId,
            loggedIn: true
        }))
        axios.patch(
            `http://localhost:3004/users/${userId}`,
            {
                name: values.name,
                email: values.email,
                password: values.password,
                lastName: values.lastName,
                userAvatar: previewImage,
                userAppointment: {},
            })
    }

    return (
        <UserLayout>
            <MyAccountStyled>
                <AccountProfile handleSubmit={handleSubmit} initialValues={initialValues} handlePreview={handlePreview} user={user}/>
            </MyAccountStyled>
        </UserLayout>
    );
};

export default MyAccount;