import React from "react";
import {
  FaPlayCircle,
  FaFastForward,
  FaFastBackward,
  FaRandom,
  FaRedoAlt,
  FaVolumeUp,
} from "react-icons/fa";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div class="container-fluid">
          <div class="player gradient">
            <div class="row">
              <div class="col d-flex justify-content-left form-inline">
                <img
                  class="song-info-cover"
                  style={{
                    width: "70px",
                    paddingbottom: "5px",
                    paddingtop: "5px",
                  }}
                  src={
                    "https://static.stereogum.com/uploads/2017/10/queen-1507300904-640x596.jpg"
                  }
                  alt=""
                />
                <div
                  class="song-info-text"
                  style={{
                    fontsize: "10pt",
                    color: "white",
                    marginleft: "7px",
                  }}
                >
                  <div class="song-info-title" style={{ color: "white" }}>
                    We will rock you
                  </div>
                  <div class="song-info-title">
                    <small>Queen</small>
                  </div>
                </div>
              </div>

              <div
                class="col d-flex justify-content-center form-inline"
                id="playerButtons"
              >
                <a class="button gradient" id="random" href="" title="">
                  <FaRandom className="footer-icons ml-5" size="2rem" />
                </a>
                <a
                  class="button gradient"
                  id="backward"
                  href=""
                  title=""
                  style={{ marginleft: "30px" }}
                >
                  <FaFastBackward className="footer-icons mx-5" size="2rem" />
                </a>
                <button
                  onclick="playAudio()"
                  type="button"
                  id="play"
                  href=""
                  title=""
                  style={{ marginleft: "30px" }}
                >
                  <FaPlayCircle className="footer-icons" size="2rem" />
                </button>
                <a
                  class="button gradient"
                  id="forward"
                  href=""
                  title=""
                  style={{ marginleft: "30px" }}
                >
                  <FaFastForward className="footer-icons ml-5" size="2rem" />
                </a>
                <a
                  class="button gradient"
                  id="repeat"
                  href=""
                  title=""
                  style={{ marginleft: "30px" }}
                >
                  <FaRedoAlt className="footer-icons ml-5" size="2rem" />
                </a>

                <div class="progress-container w-100">
                  <div class="progress-time" id="current-time"></div>
                  <input
                    type="range"
                    id="progress"
                    value="0"
                    class="progress-range"
                  />
                  <div class="progress-time" id="duration"></div>
                </div>
              </div>

              <div class="col v-controls-wrapper">
                <div class="float-right volume-controls">
                  <FaVolumeUp className="footer-icons ml-5" size="3rem" />
                  <i class="fa fa-tasks"></i>
                  <i class="fa fa-laptop ml-3"></i>
                  <i class="fa fa-volume-up mx-3"></i>
                  <input
                    type="range"
                    id="seek"
                    value="0"
                    min="0"
                    max="1"
                    step="0.01"
                    onchange="changevolume(this.value)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
