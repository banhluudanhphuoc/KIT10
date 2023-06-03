import styled from "styled-components";
import greenArrow from "assets/greenIcon.png";
import redArrow from "assets/redicon.png";
const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) =>
    props.boderColor ? `1px solid ${props.boderColor}` : "none"};
  border-radius: ${(props) => props.borderRadius};
  background: ${(props) => props.bgColor};
  font-weight: 500;
  line-height: 21px;
  color: ${(props) => props.textColor};
  color: ${(props) => props.fontSize};
  img {
    margin-right: 8px;
  }
`;
export const ButtonStyle = ({
  width,
  height,
  textColor,
  bgColor,
  boderColor,
  percent,
  fontSize,
  borderRadius,
  children,
  alignText,
  ...rest
}) => {
  return (
    <StyledButton
      percent={percent}
      width={width}
      height={height}
      textColor={textColor}
      bgColor={bgColor}
      boderColor={boderColor}
      fontSize={fontSize}
      borderRadius={borderRadius}
      {...rest}
    >
      {percent && <img src={percent < 0 ? redArrow : greenArrow} alt=""></img>}
      {children}
    </StyledButton>
  );
};
ButtonStyle.defaultProps = {
  bgColor: "#FFFFFF",
  textColor: "#5429FF",
  width: "128px",
  height: "46px",
  borderRadius: "40px",
  fontSize: 16,
  alignText: "center",
};
