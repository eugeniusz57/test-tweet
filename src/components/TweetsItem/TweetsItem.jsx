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
import { useState } from "react";

const TweetsItem = ({ tweet }) => {
  const { tweets, followers } = tweet;
  // const formattedFollowerCount = (followerCount + 100500).toLocaleString();
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(followers);

  const handleClickFollow = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowerCount(followerCount - 1);
    } else {
      setIsFollowing(true);
      setFollowerCount(followerCount + 1);
    }
  };

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

      <Button onClick={handleClickFollow} isFollowing={isFollowing}>
        {isFollowing ? "Following" : "Follow"}
      </Button>
      <TweetsCount>
        {followerCount.toLocaleString("en-US")} FOLLOWERS
      </TweetsCount>
      <TweetsCount>{tweets} TWEETS</TweetsCount>
    </TweetItem>
  );
};

export default TweetsItem;
