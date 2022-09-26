import styled from "styled-components";

export const MyAccountStyled = styled.div`
  background-color: white;
  padding: 30px;
  .account-form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .divider {
    border-top: 1px solid #f7f7f7;
  }

  .avatar-upload {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    .ant-upload-span {
      width: 150px;
    }
  }
  
  .account-title {
    padding-bottom: 30px;
  }
  
  .avatar-preview {
    display: flex;
    justify-content: center;
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
  
  .upload-section {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    justify-content: center;
  }
  
  .ant-upload-span {
    border: none;
    img {
      border-radius: 50%;
      object-fit: contain;
    }
    
  }
  
  .account-form {
    padding: 10px;
    width: 100%;
  }
  
  .profile-image {
    height: 100px;
    width: 100px;
    border: 1px dashed black;
    border-radius: 50%;
  }
  
  .photo-image {
    height: 100px;
    width: 100px;
    
  }
`