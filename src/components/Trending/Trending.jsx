import { Link } from "react-router-dom";
import { styled } from "styled-components";
const StyleTrending = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .TextTrending {
    font-weight: 700;
    font-size: 24px;
    line-height: 31.25px;
    font-family: "DM Sans", sans-serif;
  }
  ul {
    width: 276px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    li {
      list-style: none;
      color: red;
      a {
        line-height: 18.23px;
        color: #7a797d;
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        font-family: "DM Sans", sans-serif;
      }
    }
  }
`;
export const Trending = () => {
  return (
    <StyleTrending>
      <div className="TextTrending">Trending Auctions</div>
      <div>
        <ul>
          <li>
            <Link to="/login">Art</Link>
          </li>
          <li>
            <Link to="/login">Music</Link>
          </li>
          <li>
            <Link to="/login">Collectibles</Link>
          </li>
          <li>
            <Link to="/login">Utility</Link>
          </li>
        </ul>
      </div>
    </StyleTrending>
  );
};
