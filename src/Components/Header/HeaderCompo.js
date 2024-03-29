import React, { Component } from "react";
import IdeaCompo from "./IdeaCompo";
import "./Header.scss";

class HeaderCompo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("이거다", this.props.tagList);
    console.log(this.props, "프롭스");
    return (
      <>
        <div className="listToSearch">
          <div className="list_First">
            <div>최근 검색 기록</div>
            <i className="fas fa-times-circle"></i>
          </div>
          <div className="latestSearchList">
            {/* <ul>
              {this.props.tagList.map((el, i) => (
                <li key={i}>{el}</li>
              ))} */}

            {/* <div className="result_Tag">로그인 ui </div>
            <div className="result_Tag">로그인</div>
            <div className="result_Tag">패션 </div> */}
            {/* </ul> */}
          </div>
          <div className="list_Second">
            <div className="recommendIdea">추천 아이디어</div>
            <IdeaCompo />
          </div>
          <div className="list_Second">
            <div className="recommendIdea">인기 아이디어</div>
            <IdeaCompo />
            <IdeaCompo />
          </div>
        </div>
      </>
    );
  }
}

export default HeaderCompo;
