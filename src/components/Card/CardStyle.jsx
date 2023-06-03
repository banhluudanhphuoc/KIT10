import styled from "styled-components";
import ethIconBlue from "assets/Group 8.png";
import { ButtonStyle } from "components/Button";
const StyledCard = styled.div`
  padding: 24px;
  background-color: white;
  border-radius: 20px;
  font-size: 12px;
  line-height: 16px;
  width: 200px;
  height: 200px;
  color: #747475;
  span {
    font-weight: 500;
    font-size: 24px;
    color: #27262e;
    margin-bottom: 12px;
  }
  .title {
    color: #747475;
    text-align: left;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 12px;
  }
  .amount {
    font-size: 24px;
    line-height: 31px;

    /* Text/color1 */

    color: #27262e;
  }
  .ammount-wrapper {
    margin-bottom: 12px;
  }
  .eth {
    margin-right: 4px;
  }
  .Content{
    margin-bottom: 12px;
  }
`;
export const CardStyle = ({ title, amount, content, percent }) => {
  return (
    <StyledCard>
      <div className="title">{title}</div>
      {amount ? (
        <div className="ammount-wrapper">
          <img className="eth" src={ethIconBlue} alt="eth-icon"></img>
          <span className="amount">{amount}</span> ETH
        </div>
      ) : (
        <div className="Content">
          <span>{content}</span> %
        </div>
      )}
      <ButtonStyle
        width="100%"
        height="46px"
        borderRadius="12px"
        percent={percent}
        boderColor="#E9E9E9"
      >
        {percent}%
      </ButtonStyle>
    </StyledCard>
  );
};
