import { useMemo, useState } from "react";
import { Section } from "../../components/Section/Section.styled";
import TweetsItem from "../../components/TweetsItem/TweetsItem";
import { TweetList } from "../../components/TweetsItem/TweetsItem.styled";
import { useEffect } from "react";
import {
  ArrowGoHome,
  ContainerLoadMore,
  GoHome,
  SpanGoHome,
} from "./Tweets.styled";
import Button from "../../components/Button/Button";
import { getTweets } from "../../APIService/getTweets";
import { Loader } from "../../components/Loader/Loader";
import Filter from "../../components/Filter/Filter";

const Tweets = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(
    JSON.parse(localStorage.getItem("page")) || 1
  );
  const [prevPage, setPrevPage] = useState(
    JSON.parse(localStorage.getItem("prevPage")) || 1
  );
  const [tweetItems, setTweetItems] = useState(
    JSON.parse(localStorage.getItem("tweets")) || []
  );
  const [filter, setFilter] = useState("show all");

  useEffect(() => {
    const renderTwetsItem = async () => {
      try {
        setIsLoading(true);

        const storedUsers = await JSON.parse(localStorage.getItem("tweets"));

        if (storedUsers && page === prevPage) {
          localStorage.setItem("page", JSON.stringify(page));
          localStorage.setItem("prevPage", JSON.stringify(prevPage));
          return;
        }

        const data = await getTweets(page);

        const tweetFolow = await data.map((item) => {
          return { ...item, following: false };
        });

        setTweetItems((prev) => {
          return page === 1 ? [...tweetFolow] : [...prev, ...tweetFolow];
        });

        setPrevPage(page);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
        localStorage.setItem("page", JSON.stringify(page));
        localStorage.setItem("prevPage", JSON.stringify(prevPage));
      }
    };

    renderTwetsItem();
  }, [page, prevPage]);

  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(tweetItems));
  }, [tweetItems]);

  const handleClickFollow = (name) => {
    const updatedTweets = tweetItems.map((item) => {
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

    setTweetItems(updatedTweets);
  };

  const handleIncrementPage = () => {
    setPage((prevState) => prevState + 1);
    localStorage.setItem("page", JSON.stringify(page));
  };

  const FilterTweets = useMemo(() => {
    switch (filter) {
      case "follow":
        return tweetItems.filter((item) => item.following === false);
      case "following":
        return tweetItems.filter((item) => item.following === true);
      default:
        return tweetItems;
    }
  }, [tweetItems, filter]);

  return (
    <Section>
      <GoHome to={"/"}>
        <ArrowGoHome />
        <SpanGoHome> Go Home</SpanGoHome>
      </GoHome>
      {error && <p>Somthing was wrong, try again later...</p>}
      <Filter
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
      <TweetList>
        {FilterTweets.length > 0 ? (
          FilterTweets.map((item) => (
            <TweetsItem
              key={item.id}
              tweet={item}
              onClick={() => handleClickFollow(item.name)}
            />
          ))
        ) : (
          <p> You do not have ani tweets </p>
        )}
      </TweetList>

      {tweetItems.length > 0 && (
        <ContainerLoadMore>
          <Button onClick={handleIncrementPage}>
            {isLoading ? (
              <>
                <Loader />
              </>
            ) : (
              "Load More"
            )}
          </Button>
        </ContainerLoadMore>
      )}
    </Section>
  );
};

export default Tweets;
