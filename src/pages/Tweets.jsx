import { Section } from "../components/Section/Section.styled";
import TweetsItem from "../components/TweetsItem/TweetsItem";
import { TweetList } from "../components/TweetsItem/TweetsItem.styled";
import { useTweets } from "../hooks/useTweets";

const Tweets = () => {
  const { tweets, loading, error } = useTweets();
  console.log(tweets);

  return (
    <>
      <Section>
        <TweetList>
          {tweets.length > 0 &&
            tweets.map((tweet) => <TweetsItem key={tweet.id} tweet={tweet} />)}
        </TweetList>
      </Section>
    </>
  );
};

export default Tweets;
