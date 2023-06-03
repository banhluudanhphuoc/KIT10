import { Layout } from "components/Layout";
import { styled } from "styled-components";
import { CardETH } from "components/Card";
import { Discover } from "components/Discover";
import { Trending } from "components/Trending";
import { CardStyle } from "components/Card";
import { UserInfo } from "components/UserInfo";
import Rectangle1 from "assets/Rectangle 8.png";
import Rectangle2 from "assets/Rectangle 9.png";
const StyleContener = styled.div`
  display: flex;
  flex-direction: row;

  .divright {
    width: 70%;
    margin-right: 20px;
    .ETH {
      width: 100%;
      height: 294px;
      overflow: auto;
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: space-around;
    }
  }
  .divleft {
    width: 50%;
    display: flex;
    flex-direction: column;
    .wrapDiv {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 30px;
      justify-content: center;
    }
    .TopCreator {
      width: 100%;
      border-radius: 20px;
      padding: 20px 100px;
      div {
        .SeeAll {
          display: flex;
          justify-content: space-between;
          padding: 10px;
          .Top {
            font-weight: 700;
            font-size: 24px;
            font-family: "DM Sans", sans-serif;
            color: black;
          }
          span {
            font-weight: 500;
            font-size: 16px;
            color: #747475;
          }
        }
      }
    }
  }
`;

const Home = () => {
  return (
    <Layout>
      <StyleContener>
        <div className="divright">
          <Discover />
          <Trending />
          <div className="ETH">
            <CardETH image={Rectangle1}></CardETH>
            <CardETH image={Rectangle2}></CardETH>
            <CardETH image={Rectangle1}></CardETH>
            <CardETH image={Rectangle2}></CardETH>
          </div>
        </div>
        <div className="divleft">
          <div className="wrapDiv">
            <CardStyle
              title={"Revenue"}
              amount="5.00"
              percent={12.3}
            ></CardStyle>
            <CardStyle
              title={"Spending"}
              amount="5.00"
              percent={-12.3}
            ></CardStyle>
            <CardStyle
              title={"ROI"}
              content="+14.02"
              percent={12.3}
            ></CardStyle>
            <CardStyle
              title={"Estimated"}
              amount="5.00"
              percent={12.3}
            ></CardStyle>
          </div>
          <div className="TopCreator">
            <div style={{ backgroundColor: "white", borderRadius: 20 }}>
              <div className="SeeAll">
                <span className="Top">Top Creator</span>
                <span>See All</span>
              </div>
              <UserInfo Stt={"1."} UserName="DavidBanhLuu" id="@DavidBanhLuu" />
              <UserInfo Stt={"2."} UserName="DavidBanhLuu" id="@DavidBanhLuu" />
              <UserInfo Stt={"3."} UserName="DavidBanhLuu" id="@DavidBanhLuu" />
              <UserInfo Stt={"4."} UserName="DavidBanhLuu" id="@DavidBanhLuu" />
              <UserInfo Stt={"5."} UserName="DavidBanhLuu" id="@DavidBanhLuu" />
              <UserInfo Stt={"6."} UserName="DavidBanhLuu" id="@DavidBanhLuu" />
            </div>
          </div>
        </div>
      </StyleContener>
    </Layout>
  );
};
export default Home;
