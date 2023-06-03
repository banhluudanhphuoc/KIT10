import { styled } from "styled-components";
import { Button } from "components/Button";
import ETH from "assets/Ethereum (ETH).png";
import Frame from "assets/Frame 14.svg";
import Arrowright from "assets/arrowright.svg";
import Ethereum from "assets/Ethereum (ETH).svg";
const StyleButton = styled.button`
  /* width: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px 16px 16px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  color: #ffff;
  font-family: "DM Sans", sans-serif;
  background-image: linear-gradient(to right, #5429ff, #bbaaff); */
  border: 0;
  position: relative;
  .imageETH {
    position: absolute;
    left: 10px;
    top: 50px;
  }
  .divCard {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 32px 16px 16px 16px;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    color: #ffff;
    font-family: "DM Sans", sans-serif;
    background-image: linear-gradient(to right, #5429ff, #bbaaff);
    border: 0;
    div {
      display: flex;
      justify-content: center;
      width: 100%;
      align-items: center;

      .ETH {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 8px;
      }
    }
  }
`;
export const Card = ({ Title, IconFist, IconFlast }) => {
  return (
    <StyleButton>
      <img src={Ethereum}  className="imageETH"/>
      <div className="divCard">
        <p>Your Balance</p>
        <h1>1,034.02</h1>
        <div>
          <div className="ETH">
            <img src={ETH} />
          </div>
          <p>ETH</p>
        </div>
        <Button
          IconFist={Frame}
          IconFlast={Arrowright}
          Title="Top Up Balance"
        />
      </div>
    </StyleButton>
  );
};
