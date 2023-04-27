import Button from "../Button/Button";
import {
  BoyImg,
  DymkaImg,
  Line,
  LogoImg,
  TweetItem,
  TweetsCount,
} from "./TweetsItem.styled";
import Logo from "../../images/Logo.png";
import Dymka from "../../images/dymka.png";
import Boy from "../../images/Boy.png";

const TweetsItem = ({ tweet }) => {
  const { tweets, followers } = tweet;
  return (
    <TweetItem>
      <LogoImg src={Logo} alt="GO-IT" />
      <DymkaImg>
        <img src={Dymka} alt="Foto" />
      </DymkaImg>
      <Line />
      <BoyImg>
        <img src={Boy} alt="Boy image" />
      </BoyImg>

      <Button>Follow</Button>
      <TweetsCount>{followers} FOLLOWERS</TweetsCount>
      <TweetsCount>{tweets} TWEETS</TweetsCount>
    </TweetItem>
  );
};

export default TweetsItem;
