import React, {useState} from 'react';
import UserLayout from "../../Layout/UserLayout";
import {useDispatch, useSelector} from "react-redux";
import {login, selectUser, userUpdate} from "../../store/features/user/userSlice";
import {MyAccountStyled} from "./MyAccount.styled";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import 'antd/dist/antd.css';
import { PlusOutlined } from '@ant-design/icons';
import {Button, Input, InputNumber, Form, Modal, Upload, Image} from "antd";
import NoAvatar from '../../assets/images/NoAvatar.jpeg'


const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => resolve(reader.result);

        reader.onerror = (error) => reject(error);
    });

const MyAccount = () => {
    const user = useSelector(selectUser);
    const userId = user.userId;
    const [currentUser, setCurrentUser] = useState({})
    const [selectedImage, setSelectedImage] = useState([]);
    const [previewOpen, setPreviewOpen] = useState(true);
    const [previewTitle, setPreviewTitle] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const initialValues = {
        name: user.name,
        email: user.email,
        lastName: user.lastName,
        password: user.password,
        userAvatar: user.userAvatar
    }

    const [previewImage, setPreviewImage] = useState(initialValues.userAvatar);


    const layout = {
        labelCol: {
            span: 2,
        },
        wrapperCol: {
            span: 18,
        },
    };

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };

    const uploadButton = (
        <div>
            <Button>
                Upload Avatar
            </Button>
            {/*<div*/}
            {/*    style={{*/}
            {/*        marginTop: 8,*/}
            {/*    }}*/}
            {/*>*/}
            {/*    */}
            {/*</div>*/}
        </div>
    );


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
                <h4>Personal Information</h4>
                <hr className={"divider"}/>
                <Form className={"account-form"} {...layout} name="nest-messages" onFinish={handleSubmit} initialValues={initialValues} validateMessages={validateMessages}>
                    <Form.Item
                        name={"userAvatar"}
                    >
                        <div className={"upload-section"}>
                            {/*<Modal open={true} title={previewTitle}>*/}
                                <Image fallback={NoAvatar} src={initialValues.userAvatar ? initialValues.userAvatar : previewImage} alt={"userAvatar"}  className={"avatar-preview"}/>
                            {/*</Modal>*/}
                            <Upload
                                method={"patch"}
                                maxCount={1}
                                action={`http://localhost:3004/users/${user.userId}`}
                                className={"avatar-upload"}
                                onPreview={handlePreview}
                                showUploadList={{showPreviewIcon: false, showRemoveIcon: false}}
                                accept="image/*"
                            >
                                <Button>Click to Upload</Button>
                                {/*{previewImage >= 1 ? null : uploadButton}*/}
                            </Upload>
                        </div>
                    </Form.Item>
                    <Form.Item
                        name={"name"}
                        label="Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={"lastName"}
                        label="Last Name"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={"password"}
                        label="Password"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name={"email"}
                        label="Email"
                        rules={[
                            {
                                type: 'email',
                                required: true
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                            Edit Profile
                        </Button>
                    </Form.Item>
                </Form>
            </MyAccountStyled>
        </UserLayout>
    );
};

export default MyAccount;