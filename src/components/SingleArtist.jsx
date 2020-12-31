import React from "react";
import { Col, Container, Row } from "react-bootstrap";

class SingleArtist extends React.Component {
  state = {
    album: {},
    tracks: [],
    loading: true,
  };

  fetchArtist = async (id) => {
    try {
      const url = "https://deezerdevs-deezer.p.rapidapi.com/album/";
      const response = await fetch(url + id, {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "1e45b6f96fmshc79e842018c9ea0p1288b9jsn2ba5d9842c9f",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
      });
      const responseObject = await response.json();

      this.setState({
        album: responseObject,
        tracks: responseObject.tracks.data,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
  async componentDidMount() {
    this.fetchArtist(this.props.match.params.id);
  }
  render() {
    const { album, loading, tracks } = this.state;
    return (
      <>
        <div class="">
          <div class="container" id="firstContainer">
            <div class="row">
              <div
                class="col col-sm-12 col-md-12 col-lg-5 d-flex flex-wrap align-items-center justify-content-center text-center"
                id="imageContainer"
              >
                <img class="img-fluid" src={album.cover_big} alt="" />
                <h3 style={{ color: "white" }}>{album.title}</h3>
                {/* <div class="container">
                  <div class="row">
                    <div class="col">
                      <small style={{ color: "gray" }}>Queen</small>
                      <br />
                      <form class="btn btn-success" style={{ padding: "0" }}>
                        <button class="btn" type="submit">
                          Play
                        </button>
                      </form>
                      <br />
                      <small style={{ color: "gray" }}>1974 | 16 SONGS</small>
                    </div>
                    <br />
                    <div class="col d-flex justify-content-center form-inline">
                      <a class="icon" href="#">
                        <i class="fa fa-heart" style={{ color: "white" }}></i>
                      </a>

                      <a class="nav-link" href="#">
                        <i
                          class="fa fa-ellipsis-h"
                          style={{ color: "white" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>

              <div class="col col-sm-12 col-md-12 col-lg-7 justify-content-between form-inline">
                <div class="container">
                  <table class="table borderless">
                    <tbody>
                      <tr>
                        {tracks.map((track) => (
                          <th className="d-flex justify-content-between">
                            {track.title} <td>{track.duration}</td>
                          </th>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SingleArtist;
