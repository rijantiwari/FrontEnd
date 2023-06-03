import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import { VerifiedUserRounded } from "@mui/icons-material";
function Post({ displayName, username, verfied, avatar, image }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://image.lexica.art/full_jpg/7d32e286-ed86-49e1-bd6d-cebf77d29cce" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Rijan Tiwari{" "}
              <span>
                <VerifiedUserRounded className="post__badge" />{" "}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>I built Twitter Clone </p>
          </div>
          <img
            src="https://gfycat.com/dismalsilverhalibut-excited"
            alt="Post-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Post;
