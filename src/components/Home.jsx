import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, Container } from "react-bootstrap";
import "./Home.css";

class Home extends React.Component {
  state = {
    albums: [],
    loading: true,
  };

  async componentDidMount() {
    const getAlbums = await fetch(
      "https://deezerdevs-deezer.p.rapidapi.com/search?q=queen",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "1e45b6f96fmshc79e842018c9ea0p1288b9jsn2ba5d9842c9f",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }
    );
    const data = await getAlbums.json();
    console.log(data);
    this.setState({ albums: data, loading: false });
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="HomePage">
        <div className="main-page row mt-5">
          {loading ? (
            <h4>{loading}</h4>
          ) : (
            <>
              {this.state.albums.data.map((album, key) => (
                <Container className="container-wrapper col-sm-1 ">
                  <Row className="albums-wrapper my-3 " key={key}>
                    <Col className="singleAlbum ">
                      <Link
                        to={`/artist/${album.album.id}`}
                        style={{
                          textDecoration: "none",
                          color: "lightgrey",
                        }}
                      >
                        <Image
                          className="album-cover"
                          src={album.album.cover}
                        />
                        <h4 className="d-flex justify-content-center mt-2 album-title">
                          {album.album.title}{" "}
                        </h4>
                      </Link>
                    </Col>
                  </Row>
                </Container>
              ))}
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
