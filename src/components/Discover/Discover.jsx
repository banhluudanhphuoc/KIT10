import { styled } from "styled-components";
import Background from "assets/Rectangle 13.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const StyleDiscover = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .Text {
    position: absolute;
    top: 100px;
    left: 100px;

    font-weight: 700;
    font-size: 30px;
    line-height: 64.8px;
    font-family: "Epilogue", sans-serif;
    border-radius: 12px;
    color: white;
    .ButtonStyleDiscover,
    .ButtonStyleCreate {
      width: 128px;
      height: 46px;
      border-radius: 40px;
    }
    .ButtonStyleDiscover {
      border: 0;
      color: #5429ff;
      font-weight: 700;
      font-size: 16px;
      font-family: "DM Sans", sans-serif;
      line-height: 22px;
      margin-right: 12px;
    }
    .ButtonStyleCreate {
      border: 1px solid white;
      background-color: transparent;
      font-weight: 700;
      font-size: 16px;
      font-family: "DM Sans", sans-serif;
      line-height: 22px;
      color: white;
    }
  }
`;
export const Discover = () => {
  return (
    <StyleDiscover>
      <Carousel showThumbs={false}  autoPlay={true} infiniteLoop={true}>
        <div>
          <img src={Background} />
        </div>
        <div>
          <img src={Background} />
        </div>
        <div>
          <img src={Background} />
        </div>
      </Carousel>
      <div className="Text">
        <h1>Discover, Create and Sell Your Own NFT.</h1>
        <div>
          <button className="ButtonStyleDiscover">Discover</button>
          <button className="ButtonStyleCreate">Create</button>
        </div>
      </div>
    </StyleDiscover>
  );
};
