import { styled } from "styled-components";
import UserAvata from "assets/Ellipse 6.png";
const StyleUserInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
  div {
    display: flex;
    flex-direction: column;
  }
  button{
    padding: 10px 20px;
    border-radius: 20px;
    border: 0;
    /* border: 1px solid #747475; */
    color: #5429FF;
    position: relative;
  }
  button:hover::before {
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    position: absolute;
    border-radius: 20px;
    padding: 10px 20px;
    border: 1px solid #5429FF;
    background-color: #5429FF;
    color: white ;
    content: "Following";
  }

`;
export const UserInfo = ({ Stt, UserName, id ,colorBoder,colorText}) => {
  return (
    <StyleUserInfo 
      colorBoder={colorBoder}
      colorText={colorText}
    >
      <span>{Stt}</span>
      <div>
        <img src={UserAvata} alt="" />
      </div>
      <div>
        <span>{UserName}</span>
        <span>{id}</span>
      </div>
    <button>Follow</button>
    </StyleUserInfo>
  );
};
