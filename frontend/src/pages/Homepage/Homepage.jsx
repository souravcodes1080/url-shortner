import React from "react";
import "./homepage.css";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
function Homepage() {
  return (
    <>
      <div className="homepage-top">
        <div className="app-container">
          <Header />
          <Main />
        </div>
      </div>
    </>
  );
}

export default Homepage;
