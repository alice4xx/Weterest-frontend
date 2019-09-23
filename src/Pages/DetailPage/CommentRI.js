import React from "react";
import "./Detail.scss";

class CommentRI extends React.Component {
  render() {
    return (
      <div>
        <div className="comment_img_wrap">
          <div className="comment_user_img">
            <div className="user_img">
              <img src="https://images.velog.io/post-images/jingyong91/ad161f20-dc85-11e9-9d0c-9f336e059e9d/f4233ebdaf0cf6e607d177a9e1e90841.jpg" />
            </div>
          </div>
          <div className="commet_input_wrap">
            <div className="comment_user_name_wrap">
              <div className="comment_user_name">jingyong91</div>
              <div className="comment_history">2019-12-30</div>
            </div>
            <div className="user_comment">Who’s she?</div>
          </div>
        </div>
        <div className="comment_icon_wrap">
          <div className="icon1">
            <i class="fas fa-heart"></i>
          </div>
          <div className="icon2">
            <i class="fas fa-comment"></i>
          </div>
          <div className="icon3">
            <i className="fas fa-ellipsis-h"></i>
          </div>
          <div className="like">좋아요1개</div>
        </div>
      </div>
    );
  }
}

export default CommentRI;