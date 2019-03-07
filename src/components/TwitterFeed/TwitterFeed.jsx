import React from "react";
import queryString from "query-string";

function TwitterFeed(props) {
  const originalString = props.location.search;
  const parsed = queryString.parse(originalString);
  console.log(parsed);
  return (
    <div>
      {" "}
      <h1> This is your twitterfeed </h1>
      <h2>{parsed.searchTerm} </h2>
      <h2>{parsed.year} </h2>
      <h2>{parsed.topic} </h2>
    </div>
  );
}

export default TwitterFeed;
