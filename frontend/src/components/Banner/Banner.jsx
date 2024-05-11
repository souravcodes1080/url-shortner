import React from "react";
import "./banner.css";
function Banner() {
  return (
    <>
      <div className="banner-wrapper">
        <div className="banner-left">
            <h3>A Fast and Simple URL Shortener.</h3>
            <p><span>Free URL Shortener</span> for transforming long, ugly links into nice, memorable and trackable short URLs. Use it to shorten links for any social media platforms, blogs, SMS, emails, ads, or pretty much anywhere else you want to share them. Twitter, Facebook, YouTube, Instagram, WhatsApp, emails, SMS, videos. RB.GY is the best free alternative to generic URL shorteners like bitly and tinyurl.</p>
        </div>
        <div className="banner-right">
            <div className="banner-right-content">
                <div className="banner-right-content-right">
                    <p>Experience the benefits of link management for your business</p>
                    <div className="banner-button-wrapper">
                        <button className="banner-button-main">Try Our Api</button>
                        <button>Support</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
