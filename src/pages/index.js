import React, { useState } from "react"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import Carousel from '../components/slider/carousel';
import { Button } from 'react-bootstrap';
import "../components/header/header.css";

const IndexPage = () => {

  const [state, setText] = useState({
    text: 'We have a great Mission',
    text1: '“To be Recognized as the “Preferred Technology Partner of Choice” by all Customers”'
  })
 
  const onClickButton1 = () => {
    setText({
      text: 'We have a great Mission',
      text1: '“To be Recognized as the “Preferred Technology Partner of Choice” by all Customers”'
    });
  }
  const onClickButton2 = () => {
    setText({
      text: 'We have a one focused Vision',
      text1: '“To become long term partners-in progress of our customers to enable their Business Transformation by providing a range of Services &amp; Solutions that deliver Value-For-Money and enhance competitiveness and provides them a opportunity to position themselves best price-performers of choice in their industries”'
    });
  };
  return (
    <Layout>
      <div><SEO title="Home" /></div>
      <div>
        <Carousel />
        <div class="container">
          <br /><br />
          <section class="round-tabs text-center Massive7ec9b024b38365f303ca5a88a3301fa0">
            <ul class="nav nav-pills nav-normal">
              <li class="active">
                <Button variant="light" size="lg" type="submit" onClick={() => onClickButton1()} >Our Mission</Button>
              </li>
              <li class="">
                <Button variant="light" size="lg" type="submit" onClick={() => onClickButton2()} >Our Vission</Button>
              </li>
            </ul>
            <div class="panel-body text-center">
              <div class="tab-content">
                <article id="Massiveb89708bf8cd0504b481f18814645b64b" >
                  <h3>{state.text}</h3>
                  <p>{state.text1}</p>
                </article>
                {/* <article id="Massive7c6ca134a5bc163a5e791e5553ed28c9" class="tab-pane">
                <h3>We have a one focused Vision</h3>
                <p>“To become long term partners-in progress of our customers to enable their Business Transformation by providing a range of Services &amp; Solutions that deliver Value-For-Money and enhance competitiveness and provides them a opportunity to position themselves best price-performers of choice in their industries”</p>
              </article> */}
              </div>
            </div>
          </section>
        </div>
        <br /><br />

        <div id="feedback">
          <div className="feedback-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <section>
                    <h2 className="section-title">
                      <span></span>OUR STATISTICS
                  </h2>
                  </section>
                </div>
              </div>

              <div className="row facts-items">
                <div className="col-sm-3 col-xs-6 text-center">
                  <div className="facts">
                    <div className="facts-icon">
                      <i className="fa fa-flag"></i>
                    </div>
                    <p className="facts-text">Projects Completed</p>
                    <h4>100+</h4>
                  </div>
                </div>
                <div class="col-sm-3 col-xs-6 text-center">
                  <div class="facts">
                    <div class="facts-icon">
                      <i class="fa fa-smile-o"></i>
                    </div>
                    <p class="facts-text">Happy Clients</p>
                    <h4>50+</h4>
                  </div>
                </div>
                <div class="col-sm-3 col-xs-6 text-center">
                  <div class="facts">
                    <div class="facts-icon">
                      <i class="fas fa-building"></i>
                    </div>
                    <p class="facts-text">Overall Offices</p>
                    <h4>4</h4>
                  </div>
                </div>
                <div class="col-sm-3 col-xs-6 text-center">
                  <div class="facts last-child">
                    <div class="facts-icon">
                      <i class="fas fa-award"></i>
                    </div>
                    <p class="facts-text">Anniversary</p>
                    <h4>11</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="subscribe">
          <div className="container">
            <div className="row">
              <div class="col-sm-7">
                <section>
                  <h2>WISH TO MAKE A CAREER WITH US?</h2>
                </section>
              </div>
              <div class="col-sm-5">
                <div data-form-validation="true">
                  <Button className="join_us" variant="light" size="lg" type="submit" href="/career">JOIN US</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>

  );

}

export default IndexPage
