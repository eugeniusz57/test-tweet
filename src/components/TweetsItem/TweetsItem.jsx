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

const TweetsItem = ({ tweet, onClick }) => {
  const { tweets, following, followers } = tweet;

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

      <Button onClick={onClick} isFollowing={following}>
        {following ? "Following" : "Follow"}
      </Button>
      <TweetsCount>{followers.toLocaleString("en-US")} FOLLOWERS</TweetsCount>
      <TweetsCount>{tweets} TWEETS</TweetsCount>
    </TweetItem>
  );
};

export default TweetsItem;
