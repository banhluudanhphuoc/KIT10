import { styled } from "styled-components";
import Avata from "assets/Ellipse 6.png";
import Group from "assets/Group 8.svg";
const StyleDiv = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  width: 48%;
  background-color: white;

  .TitleName {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0px 24px;
    margin-bottom: 12px;
  }
  .Avata {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0px 24px;
    img {
      margin-right: 8px;
    }
  }
  .CurrentBid {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0px 24px;
    div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
  }
`;
export const CardETH = ({image}) => {
  return (
    <StyleDiv>
      <img src={image} alt="" />
      <div className="TitleName">
        <span>Ape In Love</span>
        <span>21,5K Likes</span>
      </div>
      <div className="Avata">
        <img src={Avata} alt="" />
        <p>@johnti60</p>
      </div>
      <div className="CurrentBid">
        <span>Current Bid</span>
        <div>
          <img src={Group} alt="" />
          9.10 ETH
        </div>
      </div>
    </StyleDiv>
  );
};
