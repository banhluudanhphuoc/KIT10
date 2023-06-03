import { styled } from "styled-components";
import { Logo } from "components/Logo";
import { ButtonStyle } from "components/Button";
import { Link } from "react-router-dom";
import ImageLogin from "assets/ImageLogin.png";
import Git from "assets/Github.png";
import Google from "assets/Google.png";
import Face from "assets/Facebook.png";

const StyleButton = styled(ButtonStyle)`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  a {
    color: #5429ff;
  }
`;
const StyleLogin = styled.div`
  background: linear-gradient(to right, #ffff, #bbaaff);
  display: flex;
  flex-direction: row;
  padding: 0px 260px;
  .DivRight {
    width: 30%;
    height: 100vh;
    padding-top: 260px;
    display: flex;
    flex-direction: column;
    .Input {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      a {
        color: #5429ff;
      }
      input {
        width: 100%;
        padding: 10px;
        background-color: #bbaaff;
        border: 0;
      }
      .pass {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
      }
      .DivEge {
        position: relative;
        img {
          position: absolute;
          top:50%;
          left: 95%;
          transform: translate(-50%,-50%);
        }
      }
      input:focus {
        outline: none;
      }
    }
    p {
      text-align: center;
      a {
        color: #5429ff;
      }
    }
    .ButtonOr {
      display: flex;
      justify-content: space-around;
      flex-direction: row;
    }
  }
  .DivLeft {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      object-fit: contain;
      width: 100%;
      height: auto;
    }
    width: 50%;

    height: 100vh;
  }
`;
const Login = () => {
  return (
    <StyleLogin>
      <div className="DivRight">
        <form>
          <Logo />
          <h1>Log In</h1>
          <div className="Input">
            <label htmlFor="Username">Username</label>
            <input type="text" id="Username" />
          </div>
          <div className="Input">
            <div className="pass">
              <label htmlFor="Password">Password</label>
              <span>
                <Link to={"/"}>Forgot Password ?</Link>
              </span>
            </div>
            <div className="DivEge">
              <input type="password" id="Password" />
              
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <StyleButton bgColor={"#5429FF"} textColor={"white"} >
              Login
            </StyleButton>
          </div>
          <p>or continue with</p>
          <div className="ButtonOr">
            <ButtonStyle boderColor={"#5429FF"} textColor={"black"}>
              <img src={Google} alt="" />
            </ButtonStyle>
            <ButtonStyle boderColor={"#5429FF"} textColor={"black"}>
              <img src={Git} alt="" />
            </ButtonStyle>
            <ButtonStyle boderColor={"#5429FF"} textColor={"black"}>
              <img src={Face} alt="" />
            </ButtonStyle>
          </div>
          <p>
            Don’t have an account yet? <Link>Sign up for free</Link>
          </p>
        </form>
      </div>
      <div className="DivLeft">
        <img src={ImageLogin} alt="" />
      </div>
    </StyleLogin>
  );
};
export default Login;
