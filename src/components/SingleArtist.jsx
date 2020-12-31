import React from "react";

class SingleArtist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Queen: [],
    };
  }

  componentDidMount() {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=queen", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "1e45b6f96fmshc79e842018c9ea0p1288b9jsn2ba5d9842c9f",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((responseObject) => this.setState({ Queen: responseObject }))
      .then(() => this.setState({ loading: false }))
      .catch((err) => {
        this.setState({ error: true });
        console.log("An error has occurred:", err);
      });
  }

  render() {
    return <div></div>;
  }
}

export default SingleArtist;
