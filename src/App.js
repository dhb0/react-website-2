import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import icon1 from "./imgs/icon1.png";
import icon2 from "./imgs/icon2.png";
import icon3 from "./imgs/icon3.png";
import person1 from "./imgs/person1.png";
import iphone from "./imgs/iphone.png";
import person2 from "./imgs/person2.png";
import person3 from "./imgs/person3.png";

const App = () => {
  return (
    <>
      <header className="text-center">
        <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
        <section className="header-main">
          <h1>
            HALYCON <span>DAYS</span>
          </h1>
          <p class="lead">
            An exclusive HTML5/CSS3 freebie by Peter Finian, for
            <span>Codrops</span>
          </p>
          <button class="main-btn">LEARN MORE</button>
        </section>
      </header>
      <section className="text-center" id="portfolio">
        <div className="container">
          <p className="title">A CREATIVE PORTFOLIO TEMPLATE</p>
          <div className="dotted-header">
            <div class="dotted-line"></div>
            <i class="fa fa-chevron-circle-down fa-lg"></i>
            <div class="dotted-line"></div>
          </div>
          <p className="explanation mx-auto">
            Magna commodo amet officia et labore irure id. Occaecat in eu{" "}
            <span>deserunt tempor</span> fugiat sit exercitation esse aliquip.
            Lorem sit esse est reprehenderit nulla adipisicing velit est culpa
            incididunt velit amet qui. Nostrud reprehenderit aliqua irure dolor
            exercitation deserunt nisi proident cillum adipisicing do fugiat
            reprehenderit irure. Deserunt commodo dolor aliqua proident qui
            Lorem sunt occaecat eu eiusmod.
          </p>
        </div>
      </section>
      <section className="activities container-fluid text-center">
        <p className="title">A CREATIVE PORTFOLIO TEMPLATE</p>
        <div className="dotted-header">
          <div class="dotted-line"></div>
          <i class="fa fa-chevron-circle-down fa-lg"></i>
          <div class="dotted-line"></div>
        </div>
        <div className="container-fluid row mx-auto activity-row">
          <div className=" text-center col-sm-12 col-md-4 mt-3">
            <div className=" text-center col-sm-12">
              <img src={icon1} className="activity-icon" />
              <p className="title">DIGITAL DESIGN//</p>
              <div className="line"></div>
              <p className="explanation">
                Labore irure non dolore sunt esse proident tempor cillum elit
                tempor consectetur esse. Aliqua sint dolore nostrud officia in
                occaecat est aute tempor esse velit aliqua officia.
              </p>
            </div>
          </div>
          <div className=" text-center col-sm-12 col-md-4 mt-3">
            <div className=" text-center col-sm-12">
              <img src={icon2} className="activity-icon" />
              <p className="title">WEB DEVELOPMENT//</p>
              <div className="line"></div>
              <p className="explanation">
                Labore irure non dolore sunt esse proident tempor cillum elit
                tempor consectetur esse. Aliqua sint dolore nostrud officia in
                occaecat est aute tempor esse velit aliqua officia.
              </p>
            </div>
          </div>
          <div className=" text-center col-sm-12 col-md-4 mt-3">
            <div className=" text-center col-sm-12">
              <img src={icon3} className="activity-icon" />
              <p className="title">WE LOVE YOU//</p>
              <div className="line"></div>
              <p className="explanation">
                Labore irure non dolore sunt esse proident tempor cillum elit
                tempor consectetur esse. Aliqua sint dolore nostrud officia in
                occaecat est aute tempor esse velit aliqua officia.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid mobile">
        <div className="row container mx-auto">
          <div className="left col-md-6 col-xs-12">
            <img src={iphone} alt="" />
          </div>
          <div className="right col-md-6 col-xs-12">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div class="carousel-inner text-center">
                <div class="carousel-item active">
                  <p className="title">A CREATIVE PORTFOLIO TEMPLATE</p>
                  <div className="dotted-header">
                    <div class="dotted-line"></div>
                    <i class="fa fa-chevron-circle-down fa-lg"></i>
                    <div class="dotted-line"></div>
                  </div>
                  <p className="explanation mx-auto text-justify">
                    Magna commodo amet officia et labore irure id. Occaecat in
                    eu <span>deserunt tempor</span> fugiat sit exercitation esse
                    aliquip. Lorem sit esse est reprehenderit nulla adipisicing
                    velit est culpa incididunt velit amet qui. Nostrud
                    reprehenderit aliqua irure dolor exercitation deserunt nisi
                    proident cillum adipisicing do fugiat reprehenderit irure.
                    Deserunt commodo dolor aliqua proident qui Lorem sunt
                    occaecat eu eiusmod.
                  </p>
                </div>
                <div class="carousel-item">
                  <p className="title">A CREATIVE PORTFOLIO TEMPLATE</p>
                  <div className="dotted-header">
                    <div class="dotted-line"></div>
                    <i class="fa fa-chevron-circle-down fa-lg"></i>
                    <div class="dotted-line"></div>
                  </div>
                  <p className="explanation mx-auto">
                    Magna commodo amet officia et labore irure id. Occaecat in
                    eu <span>deserunt tempor</span> fugiat sit exercitation esse
                    aliquip. Lorem sit esse est reprehenderit nulla adipisicing
                    velit est culpa incididunt velit amet qui. Nostrud
                    reprehenderit aliqua irure dolor exercitation deserunt nisi
                    proident cillum adipisicing do fugiat reprehenderit irure.
                    Deserunt commodo dolor aliqua proident qui Lorem sunt
                    occaecat eu eiusmod.
                  </p>
                </div>
                <div class="carousel-item">
                  <p className="title">A CREATIVE PORTFOLIO TEMPLATE</p>
                  <div className="dotted-header">
                    <div class="dotted-line"></div>
                    <i class="fa fa-chevron-circle-down fa-lg"></i>
                    <div class="dotted-line"></div>
                  </div>
                  <p className="explanation mx-auto">
                    Magna commodo amet officia et labore irure id. Occaecat in
                    eu <span>deserunt tempor</span> fugiat sit exercitation esse
                    aliquip. Lorem sit esse est reprehenderit nulla adipisicing
                    velit est culpa incididunt velit amet qui. Nostrud
                    reprehenderit aliqua irure dolor exercitation deserunt nisi
                    proident cillum adipisicing do fugiat reprehenderit irure.
                    Deserunt commodo dolor aliqua proident qui Lorem sunt
                    occaecat eu eiusmod.
                  </p>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid band text-center">
        <h1>I GOT 99 PROBLEMS</h1>
        <h3>BUT DESIGN 'AINT ONE</h3>
        <i class="fa fa-angle-down fa-lg"></i>
      </section>
      <section className="card-area container row mx-auto">
        <div className="col-xs-12 col-md-4">
          <div className="col-12 text-center">
            <div className="img-bg-1 img-bg">
              <div className="viewmore">
                <i class="fa fa-search fa-lg" aria-hidden="true"></i>
                <p>WIEV MORE</p>
              </div>
            </div>
            <p className="title">THINK ALIVE</p>
            <div className="line"></div>
            <p className="explanation">
              In elit tempor duis duis dolore id. Lorem ut aliquip irure ipsum
              mollit sit ea enim eiusmod reprehenderit ea.
            </p>
          </div>
        </div>
        <div className="col-xs-12 col-md-4">
          <div className="col-12 text-center">
            <div className="img-bg-2 img-bg">
              <div className="viewmore">
                <i class="fa fa-search fa-lg" aria-hidden="true"></i>
                <p>WIEV MORE</p>
              </div>
            </div>
            <p className="title">THINK ALIVE</p>
            <div className="line"></div>
            <p className="explanation">
              In elit tempor duis duis dolore id. Lorem ut aliquip irure ipsum
              mollit sit ea enim eiusmod reprehenderit ea.
            </p>
          </div>
        </div>
        <div className="col-xs-12 col-md-4">
          <div className="col-12 text-center">
            <div className="img-bg-3 img-bg">
              <div className="viewmore">
                <i class="fa fa-search fa-lg" aria-hidden="true"></i>
                <p>WIEV MORE</p>
              </div>
            </div>
            <p className="title">PIXEL PERFECTION</p>
            <div className="line"></div>
            <p className="explanation">
              Quis nisi ea est nostrud voluptate esse laboris sunt duis ad
              dolor.Sit laboris consequat aliquip consectetur quis quis in
              laboris laborum.
            </p>
          </div>
        </div>
      </section>
      <section className="container-fluid passion text-center">
        <button className="mx-auto">IGNITE YOUR PASSION</button>
      </section>
      <section className="team container-fluid text-center">
        <p className="title">WE'RE TEAM THAT WE ADORE WHAT WE DO</p>
        <div className="dotted-header">
          <div class="dotted-line"></div>
          <i class="fa fa-chevron-circle-down fa-lg"></i>
          <div class="dotted-line"></div>
        </div>
        <div className="container row teamdisplay mx-auto">
          <div className="col-md-4 col-xs-12 mb-4">
            <div className="col-12">
              <img src={person1} />
              <p className="title">JON SNOW</p>
              <div className="line"></div>
              <p className="explanation">
                Quis nisi ea est nostrud voluptate esse laboris sunt duis ad
                dolor.Sit laboris consequat aliquip consectetur quis quis in
                laboris laborum.
              </p>
              <div className="social">
                <i class="fa fa-facebook-official" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xs-12 mb-4">
            <div className="col-12">
              <img src={person2} />
              <p className="title">CERSEI LANNISTER</p>
              <div className="line"></div>
              <p className="explanation">
                Quis nisi ea est nostrud voluptate esse laboris sunt duis ad
                dolor.Sit laboris consequat aliquip consectetur quis quis in
                laboris laborum.
              </p>
              <div className="social">
                <i class="fa fa-facebook-official" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xs-12 mb-4">
            <div className="col-12">
              <img src={person3} />
              <p className="title">JAMIE LANNISTER</p>
              <div className="line"></div>
              <p className="explanation">
                Quis nisi ea est nostrud voluptate esse laboris sunt duis ad
                dolor.Sit laboris consequat aliquip consectetur quis quis in
                laboris laborum.
              </p>
              <div className="social">
                <i class="fa fa-facebook-official" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid mailform text-center">
        <i class="fa fa-paper-plane fa-lg" aria-hidden="true"></i>
        <p>SUBSCRIBE TO STAY IN LOOP</p>
        <form>
          <input type="text" required />
          <button>SEND</button>
        </form>
      </section>
      <section className="container-fluid contacts text-center">
        <div className="content">
          <i class="fa fa-angle-up fa-lg mx-auto"></i>
          <p className="title">A CREATIVE PORTFOLIO TEMPLATE</p>
          <div className="dotted-header">
            <div class="dotted-line"></div>
            <i class="fa fa-chevron-circle-down fa-lg"></i>
            <div class="dotted-line"></div>
          </div>
          <div className="contact-card-holder container text-center row">
            <div className="contact-card">
              <i class="fa fa-map-marker fa-lg" aria-hidden="true"></i>
              <p className="contact-title">ADRESS</p>
              <p className="contact-details">Level 6, 23 Pitt, St. Sydney</p>
            </div>
            <div className="contact-card">
              <i class="fa fa-mobile fa-lg" aria-hidden="true"></i>
              <p className="contact-title">PHONE</p>
              <p className="contact-details">+49 123 4 567</p>
            </div>
            <div className="contact-card">
              <i class="fa fa-paper-plane fa-lg" aria-hidden="true"></i>
              <p className="contact-title">EMAIL</p>
              <p className="contact-details contact-mail">dhb@dhb.com</p>
            </div>
          </div>
          <div className="social">
            <i class="fa fa-facebook-official" aria-hidden="true"></i>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-envelope" aria-hidden="true"></i>
          </div>
        </div>
      </section>
      <footer className="container-fluid">
        <div className="container">
          <div className="left">
            <a href="" target="_blank">
              Terms & Conditions
            </a>
            <span>|</span>
            <a href="" target="_blank">
              Legals
            </a>
          </div>
          <div className="right">
            <p>
              Designed & Developed by <span>Peter Finman</span> - PSD to HTML by{" "}
              <span>DHB</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
