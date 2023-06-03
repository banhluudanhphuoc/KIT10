import { styled } from "styled-components";
import SearchIcon from "assets/Icon.png";
import NofiIcon from "assets/nofi.png";
import Ellipse from "assets/Ellipse 5.png";
import Avater from "assets/avatar.png";
const StyleHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 56px;
  width: 100%;
  margin-bottom: 40px;
  .Search {
    padding: 18px 26px 18px 26px;
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 460px;
    width: 100%;
    height: 100%;
    border-radius: 35px;
    background-color: white;
    input{
      border: none;
      width: 100%;
      outline: none;
    }
  
    img{
      width: 19px;
      height: 19px;
      margin-right: 15px;
    }
  }
  .avata{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .nofi{
        position: relative;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background-color: white;
        margin-right: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        .ellipse{
          position: absolute;
          right: 30%;
          top: 40%;
          transform: translate(-50%,-50%);
        }
      }
      .user{
        width: 56px;
        height: 56px;
        border-radius: 50%;
       
      }
  }
`;
export const Header = () => {
  return (
    <StyleHeader>
      <div className="Search">
        <img src={SearchIcon} alt="search" />
        <input
          type="text"
          placeholder="Search Item, Collection and Account.."
          className="Input"
        />
      </div>
      <div className="avata">
          <div  className="nofi">
            <img src={NofiIcon} alt="nofi" />
            <img className="ellipse" src={Ellipse} alt="" />
          </div>
        <img src={Avater} alt="" />
      </div>
    </StyleHeader>
  );
};
