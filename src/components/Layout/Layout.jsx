import { Header } from "components/Header";
import { styled } from "styled-components";
import { SideBar } from "components/SideBar";

const StyleLayout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  .Contener {
    padding: 32px;
    width: 90%;
    background-color: #CAEAE6;
  
  }
`;
export const Layout = ({ children }) => {
  return (
    <StyleLayout>
      <SideBar></SideBar>
      <div className="Contener">
        <Header />
          {children}
      </div>
    </StyleLayout>
  );
};
