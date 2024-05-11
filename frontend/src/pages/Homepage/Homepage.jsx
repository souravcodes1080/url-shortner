import React from "react";
import "./homepage.css";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Banner from "../../components/Banner/Banner";
import Grid from "../../components/Grid/Grid";
import Footer from "../../components/Footer/Footer";
function Homepage() {
  return (
    <>
      <div className="homepage-top">
        <div className="app-container">
          <Header />
          <Main />
        </div>
      </div>
      <div className="app-container">
        <Banner />
        <Grid />
      </div>
      <div className="homepage-top footer">
        <div className="app-container">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Homepage;
