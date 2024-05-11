import React from "react";
import icon_like from "../../assets/icon_like.png";
import icon_responsive from "../../assets/icon_responsive.png";
import icon_secure from "../../assets/icon_secure.png";
import icon_statistics from "../../assets/icon_statistics.png";
import icon_unique from "../../assets/icon_unique.png";
import icon_url from "../../assets/icon_url.png";
import "./grid.css";
function Grid() {
  return (
    <>
      <div className="grid-wrapper">
        <ul>
          <li>
            <img src={icon_like} alt="" />
            <p className="title">Easy</p>
            <p className="desc">
              ShortURL is easy and fast, enter the long link to get your
              shortened link
            </p>
          </li>
          <li>
            <img src={icon_secure} alt="" />
            <p className="title">Secured</p>
            <p className="desc">
              It is fast and secure, our service has HTTPS protocol and data
              encryption
            </p>
          </li>
          <li>
            <img src={icon_unique} alt="" />
            <p className="title">Reliable</p>
            <p className="desc">
              All links that try to disseminate spam, viruses and malware are
              deleted
            </p>
          </li>
          <li>
            <img src={icon_url} alt="" />
            <p className="title">Shortened</p>
            <p className="desc">
              Use any link, no matter what size, ShortURL always shortens
            </p>
          </li>

          <li>
            <img src={icon_statistics} alt="" />
            <p className="title">Statistics</p>
            <p className="desc">
              Check the number of clicks that your shortened URL received
            </p>
          </li>

          <li>
            <img src={icon_responsive} alt="" />
            <p className="title">Devices</p>
            <p className="desc">
              Compatible with smartphones, tablets and desktop
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Grid;
