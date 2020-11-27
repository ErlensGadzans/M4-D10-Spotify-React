import React from "react";
import { Link, withRouter } from "react-router-dom"


class NavBar extends React.Component{
    render(){
        return(
<div class="container-fluid">
  <div class="row-4">
    <div class="col" id="navbarColumn">
      <ul class="nav flex-column justify-content-left">
        <li class="nav-item">
          <a class="nav-link active" href="#">
          <img src={"https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"} alt = {''}style={{objectfit : "cover", width:"150px"}}></img>
          </a>
        </li>
        <li
          class="nav-item d-flex justify-content-left form-inline mt-3 ml-4"
        >
          <a class="nav-link" href="/">
            <i class="fa fa-home mr-2"></i> Home</a
          >
        </li>
        <li class="nav-item d-flex justify-content-left form-inline ml-4">
          <a class="nav-link" href="#"
            ><i class="fa fa-search mr-2"></i>Search</a
          >
        </li>
        <li class="nav-item d-flex justify-content-left form-inline ml-4">
          <a class="nav-link" href="#">
            <i class="fa fa-book mr-2"></i>Your Library</a
          >
        </li>
        <li
          class="nav-item d-flex justify-content-left form-inline"
          id="smallItems"
        >
          <a class="nav-link" href="#"
            ><i class="fa fa-arrow-circle-down mr-2"></i
            ><small>Install App</small></a
          >
        </li>
        <li
          class="nav-item d-flex justify-content-left form-inline"
          id="smallItems2"
        >
          <a class="nav-link" href="#"
            ><i class="fa fa-user mr-2"></i><small>User Name</small></a
          >
        </li>
      </ul>
    </div>
  </div>
</div>
)
    }
}

export default withRouter(NavBar)