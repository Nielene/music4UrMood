import React, { Component } from "react";
import "../css/singleSong.css";

class SingleSong extends Component {
  render() {
    return (
      <div className="main">
        <h4>Single Song will get going </h4>
        <div class="vertical-menu">
          <ul>
            <li>
              {" "}
              <button>Happy</button>
            </li>
            <li>
              {" "}
              <button>Sad</button>
            </li>
            <li>
              {" "}
              <button>Romantic</button>
            </li>
            <li>
              <button>Judy</button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SingleSong;
