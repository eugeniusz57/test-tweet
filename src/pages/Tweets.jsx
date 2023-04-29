import { useState } from "react";
import { Section } from "../components/Section/Section.styled";
import TweetsItem from "../components/TweetsItem/TweetsItem";
import { TweetList } from "../components/TweetsItem/TweetsItem.styled";
import { useEffect } from "react";
import { useTweets } from "../hooks/useTweets";
import { GoHome } from "./Tweets.styled";

const Tweets = () => {
  const tweet = [
    {
      createdAt: "2023-04-27T02:16:05.365Z",
      name: "Fannie Marvin",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/40.jpg",
      tweets: 37420,
      followers: 56489,
      id: "1",
    },
    {
      createdAt: "2023-04-27T11:30:54.864Z",
      name: "Dixie Hauck",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/927.jpg",
      tweets: 77386,
      followers: 48699,
      id: "2",
    },
    {
      createdAt: "2023-04-27T12:27:48.149Z",
      name: "Linda Spinka IV",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/920.jpg",
      tweets: 21773,
      followers: 27808,
      id: "3",
    },
    {
      createdAt: "2023-04-26T23:37:39.934Z",
      name: "Marco Emmerich",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/797.jpg",
      tweets: 56606,
      followers: 65563,
      id: "4",
    },
    {
      createdAt: "2023-04-27T08:30:15.604Z",
      name: "Mindy Wiegand",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1204.jpg",
      tweets: 93406,
      followers: 23556,
      id: "5",
    },
    {
      createdAt: "2023-04-27T02:08:46.524Z",
      name: "Kristy Pollich",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/474.jpg",
      tweets: 53061,
      followers: 69329,
      id: "6",
    },
    {
      createdAt: "2023-04-27T08:16:48.703Z",
      name: "Allison Schimmel",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/596.jpg",
      tweets: 26825,
      followers: 41686,
      id: "7",
    },
    {
      createdAt: "2023-04-26T17:06:59.713Z",
      name: "Beverly Carter",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/929.jpg",
      tweets: 42138,
      followers: 63101,
      id: "8",
    },
  ];

  const { tweetItems, loading, error } = useTweets();

  const tweetFolow = tweet.map((item) => {
    return { ...item, following: false };
  });

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("tweets"));
    setTweetsArray(storedUsers);
  }, []);

  const [tweetsArray, setTweetsArray] = useState(tweetFolow);
  console.log("tweetsArray=", tweetsArray);

  const handleClickFollow = (name) => {
    const updatedTweets = tweetsArray.map((item) => {
      if (item.following) {
        if (item.name === name) {
          return {
            ...item,
            following: false,
            followers: item.followers - 1,
          };
        } else {
          return item;
        }
      } else {
        if (item.name === name) {
          return { ...item, following: true, followers: item.followers + 1 };
        } else {
          return item;
        }
      }
    });

    setTweetsArray(updatedTweets);
    localStorage.setItem("tweets", JSON.stringify(updatedTweets));
  };

  return (
    <>
      <Section>
        <GoHome to={"/"}>Go Home</GoHome>
        <TweetList>
          {tweetsArray.length > 0 &&
            tweetsArray.map((item) => (
              <TweetsItem
                key={item.id}
                tweet={item}
                onClick={() => handleClickFollow(item.name)}
              />
            ))}
        </TweetList>
      </Section>
    </>
  );
};

export default Tweets;
