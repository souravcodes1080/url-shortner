import React, { useEffect, useState } from "react";
import "./main.css";
import cross_icon from "../../assets/cross_icon.png";
import url_icon from "../../assets/url_icon.png";
import hero from "../../assets/hero.png";
import axios from "axios";
import { BACKEND_DOMAIN } from "../../config";
import { Slide, toast } from "react-toastify";

function Main() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("shortUrl")) {
      setShowResult(true);
    }
  }, []);
  const onChangeHandler = (e) => {
    setLongUrl(e.target.value);
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setShowResult(true);
    setLoading(true);
    const response = await axios.post(`${BACKEND_DOMAIN}api/shorten`, {
      longUrl: longUrl,
    });
    if (response.data.success) {
      setLoading(false);
      setShortUrl(response.data.shortUrl);
      localStorage.setItem("shortUrl", response.data.shortUrl);
    } else {
      setLoading(false);
      setShowResult(false);
      toast.error(response.data.message, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl).then(() => {
      toast.success("Copied to clipboard!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    });
  };

  return (
    <>
      <main>
        <div className="main-hero-img">
          <img src={hero} alt="hero_image" loading="lazy" />
        </div>
        <h1>Free URL Shortener</h1>
        <p>Create free short urls within seconds powered by our own api.</p>
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            value={longUrl}
            onChange={onChangeHandler}
            placeholder="Enter link here"
          />
          <button type="submit">Shorten URL</button>
        </form>
        {showResult ? (
          <>
            {loading ? (
              <p>Generating ...</p>
            ) : (
              <div className="short-url-result">
                <button className="copy-btn" onClick={copyToClipboard}>
                  Copy
                </button>
                <a href={shortUrl} target="_blank">
                  {shortUrl || localStorage.getItem("shortUrl")}{" "}
                  <img src={url_icon} alt="url" width={"18px"} />
                </a>
                <span
                  onClick={() => {
                    setShowResult(false);
                  }}
                >
                  <img src={cross_icon} alt="cross" width={"16px"} />
                </span>
              </div>
            )}
          </>
        ) : (
          <></>
        )}
        <p className="policy">
          By clicking Shorten URL, you agree to our <span>Terms of Use</span>,
          Privacy Policy and <span>Cookie Policy</span>
        </p>
      </main>
    </>
  );
}

export default Main;
