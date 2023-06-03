import LogoImage from "assets/Logo.svg";
import { styled } from "styled-components";
const StyleLogo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 58px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
export const Logo = () => {
  return (
    <StyleLogo>
      <img src={LogoImage} alt="" />
      <div>
        <span style={{fontWeight:700,fontSize:28}}>MyNFT</span>
        <span style={{fontWeight:700,fontSize:10,color:"#7A797D"}}>NFT Marketplace</span>
      </div>
    </StyleLogo>
  );
};
