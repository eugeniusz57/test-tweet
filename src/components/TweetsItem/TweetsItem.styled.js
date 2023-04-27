import styled from "styled-components";

export const TweetItem = styled.li`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  position: relative;
  width: 380px;
  height: 460px;
  padding-top: 20px;
  padding-bottom: 36px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const TweetList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const DymkaImg = styled.div`
  position: absolute;
  top: 28px;
  left: 36px;
`;

export const BoyImg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Line = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  width: 100%;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const LogoImg = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const TweetsCount = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  margin-top: 16px;
  color: #ebd8ff;
`;
