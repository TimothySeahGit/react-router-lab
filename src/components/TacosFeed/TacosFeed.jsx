import React from "react";
import { Redirect } from "react-router-dom";

function TacosFeed({ match, history }) {
  const onClickForward = () => {
    history.goForward();
  };
  const onClickBack = () => {
    history.replace("/twitter");
  };
  return (
    <div>
      <h1> This is your tacosfeed</h1>
      <h2> The value of match.params.id is {match.params.id}</h2>
      <h2> The value of match.params.user is {match.params.user}</h2>
      <button onClick={onClickBack}>Back</button>
      <button onClick={onClickForward}>Forward</button>
    </div>
  );
}

export default TacosFeed;
