import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import Dashboard from "assets/Dashboard.png";
import Shop from "assets/shop.png";
import Judge from "assets/judge.svg";
import Buy from "assets/buy-crypto.png";
import Wallet from "assets/wallet-3.png";
import Lovely from "assets/lovely.png";
import Clock from "assets/clock.png";
import Setting from "assets/setting.png";
import Light from "assets/Light.png";
import { Card } from "components/Card";
import { Logo } from "components/Logo";

const StyleSideBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  background-color: white;
  height: 100vh;
  padding: 32px;
  .TitleSideBar {
    width: 58px;
    height: 16px;
    font-weight: 700;
    font-size: 12px;
    line-height: 15.62px;
    letter-spacing: 3px;
    margin-bottom: 26px;
  }
  .Toggle {
    display: flex;
    justify-content: space-between;
    .switch {
      position: relative;
      display: inline-block;
      width: 50px;
      height: 30px;
      margin: 0 10px;
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: 0.4s;
        border-radius: 34px;
      }
      input {
        display: none;
      }
      .slider::before {
        position: absolute;
        content: "";
        height: 25px;
        width: 25px;
        top: 2px;
        left: 5px;
        right: 5px;
        background-color: white;
        transition: 0.4s;
        border-radius: 50px;
      }
      input:checked + .slider {
        background-color: #5429ff;
      }
      input:checked + .slider::before {
        transform: translateX(17px);
      }
    }
  }
`;
const StyleNavItem = styled.div`
  display: flex;
  margin-bottom: 26px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20.83px;
  font-family: "DM Sans", sans-serif;
  img {
    margin-right: 16px;
    object-fit: contain;
  }
  .testColor {
    color: #7a797d;
    text-decoration: none;
  }
  .active {
    svg {
      path {
        stroke: #f30ee4;
      }
    }
    color: #f30ee4;
  }
`;
const NavItem = ({ path, text, image }) => {
  return (
    <StyleNavItem>
      <img src={image} alt="" />
      <NavLink to={path} className="testColor">
        {text}{" "}
      </NavLink>
    </StyleNavItem>
  );
};
export const SideBar = () => {
  return (
    <StyleSideBar>
      <Logo />
      <NavItem text="Dashboard" path="/" image={Dashboard}></NavItem>
      <NavItem text="Market" path="/s" image={Shop}></NavItem>
      <NavItem text="Login" path="/login" image={Judge}></NavItem>
      <div className="TitleSideBar">Profile</div>
      <NavItem text="My Portfolio" path="/q" image={Buy}></NavItem>
      <NavItem text="Wallet" path="/v" image={Wallet}></NavItem>
      <NavItem text="Favourites" path="/b" image={Lovely}></NavItem>
      <NavItem text="History" path="/k" image={Clock}></NavItem>
      <NavItem text="Settings" path="/l" image={Setting}></NavItem>
      <div className="TitleSideBar">Other</div>
      <div className="Toggle">
        <NavItem text="Light Mode" path="/login" image={Light}></NavItem>
        {/* <i class="fa-regular fa-sun"></i>
          <i class="fa-solid fa-moon"></i> */}
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
      <Card />
    </StyleSideBar>
  );
};
