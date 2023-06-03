import { styled } from "styled-components";
const StyleButton = styled.button`
  width: 100%;
  font-weight: 700;
  font-size: 14px;
  font-family: "DM Sans", sans-serif;
  height: 50px;
  display: flex;
  border-radius: 12px;
  flex-direction: row;
  padding: 14.5px 16px 14.5px 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 0;
`;

export const Button = ({ Title, IconFist, IconFlast }) => {
  return (
    <StyleButton>
      <img src={IconFist} alt="icon" />
      {Title}
      <img src={IconFlast} alt="icon" />
    </StyleButton>
  );
};
