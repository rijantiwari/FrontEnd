import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://image.lexica.art/full_jpg/7d32e286-ed86-49e1-bd6d-cebf77d29cce" />
          <input type="text" placeholder="What's happening?" />
        </div>
        <input
          className="tweetBox__imageInput"
          type="text"
          placeholder="Optional: Enter Image URL"
        />
        <Button className="tweetBox__tweetButton"> Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
