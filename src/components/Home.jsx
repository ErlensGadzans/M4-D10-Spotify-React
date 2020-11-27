import React from "react";
import "./Home.css"
import firstImg from "../assets/01.png"
import secondImg from "../assets/02.png"
import thirdImg from "../assets/03.png"
import fourImg from "../assets/04.png"
import fiveImg from "../assets/05.png"
import sixImg from "../assets/06.png"
import sevenImg from "../assets/07.png"
import eightImg from "../assets/08.png"
import nineImg from "../assets/09.png"
import tenImg from "../assets/10.png"
import queen from "../assets/queen.jpg"



class Home extends React.Component{
    render(){
        return(

           
<main class="col-10 container">
    
      <header>
        <ul class="header">
          <li><a href="#">Trensding</a></li>
          <li><a href="#">Podcast</a></li>
          <li><a href="#">Moods and Genres</a></li>
          <li><a href="#">New Releases</a></li>
          <li><a href="#">Discover</a></li>
        </ul>
      </header>

     
      <section>
        <h2>#THROWBACKTHURSDAY</h2>
        <div class="row m-0">
          <div class="col col-sm-12 col-md-6 col-lg-2 pl-0">
            <div class="composition">
              <div class="img">
                <img src={queen} alt="" onClick={() => this.props.history.push("/artist/")}/>

              </div>
              <figcaption>QUEEN II (Deluxe edition 2011 Remaster)</figcaption>
            </div>
          </div>
          <div class="col col-sm-12 col-md-6 col-lg-2 ">
            <div class="composition">
              <div class="img">
                <img src={secondImg} alt=""/>

              </div>
              <figcaption>Lyricists</figcaption>
            </div>
          </div>
          <div class="col col-sm-12 col-md-6 col-lg-2">
            <div class="composition">
              <div class="img">
                <img src={thirdImg} alt=""/>

              </div>
              <figcaption>Italy's Frequent Rotation</figcaption>
            </div>
          </div>
          <div class="col col-sm-12 col-md-6 col-lg-2 ">
            <div class="composition">
              <div class="img">
                <img src={fourImg} alt=""/>

              </div>
              <figcaption>OOs Italy</figcaption>
            </div>
          </div>
          <div class="col col-sm-12 col-md-6 col-lg-2">
            <div class="composition">
              <div class="img">
                <img src={fiveImg} alt=""/>

              </div>
              <figcaption>Cocktail Hour</figcaption>
            </div>
          </div>
          <div class="col col-sm-12 col-md-6 col-lg-2 pr-0">
            <div class="composition">
              <div class="img">
                <img src={sixImg} alt=""/>

              </div>
              <figcaption>I Love My '90s Hip-Hop</figcaption>
            </div>
          </div>

        </div>
      </section>

    
      <section>
        <h2>Classifiche</h2>
        <div class="row m-0">
          <div class="col col-sm-12 col-md-6 col-lg-2 pl-0">
            <div class="composition">
              <div class="img">
                <img src={sevenImg} alt=""/>
              </div>

              <figcaption>Top 50 - Italy</figcaption>
            </div>
          </div>
          <div class="col col-sm-12 col-md-6 col-lg-2 ">
            <div class="composition">
              <div class="img">
                <img src={eightImg} alt=""/>

              </div>
              <figcaption>Top 50 - Global</figcaption>
            </div>
          </div>
          <div class="col col-sm-12 col-md-6 col-lg-2">
            <div class="composition">
              <div class="img"> <img src={nineImg} alt=""/>
              </div>
              <figcaption>Viral 50 - Global</figcaption>
            </div>
          </div>
          <div class="col col-sm-12 col-md-6 col-lg-2 ">
            <div class="composition">
              <div class="img">
                <img src={tenImg} alt=""/>

              </div>
              <figcaption>Viral 50 - Italy</figcaption>
            </div>
          </div>

        </div>
      </section>
    </main>
  



            )
        }
    }
    
    export default Home