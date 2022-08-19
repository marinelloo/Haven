import styled from "styled-components";

export const QuestionsStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  
  .list__title {
    text-align: center;
    padding: 20px 0;
    
    p {
      color: darkgrey;
    }
  }

  .accordion {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    width: 800px;
    padding-bottom: 30px;
  }

  .item {
    border-bottom: 2px solid #3c374559;
  }

  .item-title {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #483e58;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s ease-out;
  }

  .item-title.not-selected {
    border-bottom: none;
    font-size: 16px;
  }

  .item-content {
    overflow: hidden;
    max-height: 0;
    transition: all 0.5s cubic-bezier(0, 1, 0, 1);
    box-sizing: border-box;
  }

  .item-content.show {
    border-top: 2px solid #3c374559;
    height: auto;
    max-height: max-content;
    padding: 10px 20px;
    transition: all 0.2s ease-in-out;
  }
`;
