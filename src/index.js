import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        avatar={faker.image.avatar()}
        timeAgo="Today at 4:55PM"
        author={faker.name.firstName()}
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        timeAgo="Today at 4:30"
        author={faker.name.firstName()}
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        timeAgo="Today at 5:00PM"
        author={faker.name.firstName()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
