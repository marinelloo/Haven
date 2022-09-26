import React from 'react';
import {Button, Form, Image, Input, Upload} from "antd";
import NoAvatar from "../../assets/images/NoAvatar.jpeg";


const AccountProfile = ({handleSubmit, initialValues, handlePreview, user, previewImage}) => {
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

    const uploadButton = (
        <div>
            <Button>
                Upload Avatar
            </Button>
        </div>
    );

    return (
        <>
            <h4>Personal Information</h4>
            <hr className={"divider"}/>
            <Form className={"account-form"} {...layout} name="nest-messages" onFinish={handleSubmit} initialValues={initialValues} validateMessages={validateMessages}>
                <Form.Item
                    name={"userAvatar"}
                >
                    <div className={"upload-section"}>
                        <Image fallback={NoAvatar} src={initialValues.userAvatar ? initialValues.userAvatar : NoAvatar} alt={"userAvatar"}  className={"avatar-preview"}/>
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
        </>
    );
};

export default AccountProfile;