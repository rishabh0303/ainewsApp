import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import wordsToNumbers from "words-to-numbers";
import NewCards from "./components/NewsCards/NewCards";
import useStyles from "./styles.js";
const alanKey =
  "af917a39024dd4cf974840f6ac37c0b42e956eca572e1d8b807a3e2338fdd0dc/stage";
const App = () => {
  const [newsArticles, setNewsArtices] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const classes = useStyles();
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsArtices(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];
          if (parsedNumber > 20) {
            alanBtn().playText("Please try that again.");
          } else if (article) {
            window.open(article[number].url, "_blank");
            alanBtn().playText("Opening...");
          }
        }
      },
    });
  }, []);
  return (
    <div className="App">
      <div className={classes.logoContainer}>
        <img
          src="data:image/png;base64,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"
          className={classes.alanLogo}
          alt="AI Logo"
        />
      </div>
      <NewCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
};

export default App;
