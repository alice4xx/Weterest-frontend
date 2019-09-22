import React, { Component } from "react";
import "./Header.scss";

class HeaderCompo extends Component {
  render() {
    return (
      <>
        <div className="listToSearch">
          <div className="list_First">
            <div>최근 검색 기록</div>
            <i className="fas fa-times-circle"></i>
          </div>
          <div className="latestSearchList">
            <div className="result_Tag">로그인 ui </div>
            <div className="result_Tag">로그인</div>
            <div className="result_Tag">패션 </div>
          </div>
          <div className="list_Second">
            <div className="recommendIdea">추천 아이디어</div>
            <div className="result_Idea">
              <div className="will_Update">
                <p>사진사진</p>
              </div>
              <div className="will_Update">
                <p>사진사진</p>
              </div>
              <div className="will_Update">
                <p>사진사진</p>
              </div>
              <div className="will_Update">
                <p>사진사진</p>
              </div>
            </div>
          </div>
          <div className="list_Second">
            <div className="recommendIdea">인기 아이디어</div>
            <div className="result_Idea">
              <div className="will_Update">
                <p>사진사진</p>
              </div>
              <div className="will_Update">
                <p>사진사진</p>
              </div>
              <div className="will_Update">
                <p>사진사진</p>
              </div>
              <div className="will_Update">
                <p>사진사진</p>
              </div>
            </div>
            <div className="result_Idea 2">
              <div className="will_Update">
                <p>사진사진</p>
              </div>
              <div className="will_Update">
                <p>사진사진</p>
              </div>
              <div className="will_Update">
                <p>사진사진</p>
              </div>
              <div className="will_Update">
                <p>사진사진</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HeaderCompo;
