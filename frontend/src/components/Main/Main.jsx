import React, { useEffect, useState } from "react";
import "./main.css";
import cross_icon from "../../assets/cross_icon.png";
import url_icon from "../../assets/url_icon.png";
import axios from "axios";
import { BACKEND_DOMAIN } from "../../config";
function Main() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    if(localStorage.getItem("shortUrl")){
      setShowResult(true)
    }
  }, [])
  const onChangeHandler = (e) => {
    setLongUrl(e.target.value);
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    localStorage.setItem("longUrl", longUrl);
    setShowResult(true);
    setLoading(true);
    const response = await axios.post(`${BACKEND_DOMAIN}/api/shorten`, {
      longUrl: longUrl,
    });
    console.log(response.data);
    if (response.data.success) {
      setLoading(false);
      setShortUrl(response.data.shortUrl);
      localStorage.setItem("shortUrl", response.data.shortUrl);
    } else {
      setLoading(false);
      setShowResult(false);
      alert(response.data.message);
    }
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl).then(() => {
      alert("copied to clipboard!!");
    });
  };

  return (
    <>
      <main>
        <h1>Free URL Shortener</h1>
        <p>Create free short urls within seconds powered by our own api.</p>
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            value={longUrl || localStorage.getItem("longUrl")}
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
                  {shortUrl || localStorage.getItem("shortUrl")} <img src={url_icon} alt="url" width={"18px"} />
                </a>
                <span onClick={() => {setShowResult(false); localStorage.setItem("longUrl", "")}}>
                  <img src={cross_icon} alt="cross" width={"16px"} />
                </span>
              </div>
            )}
          </>
        ) : (
          <></>
        )}
        <p className="policy">By clicking Shorten URL, you agree to our Terms of Use, Privacy Policy and Cookie Policy</p>
      </main>
    </>
  );
}

export default Main;
