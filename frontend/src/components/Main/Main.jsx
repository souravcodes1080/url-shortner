import React, { useState } from "react";
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

  const onChangeHandler = (e) => {
    setLongUrl(e.target.value);
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setShowResult(true);
    setLoading(true)
    const response = await axios.post(`${BACKEND_DOMAIN}/api/shorten`, {
      longUrl: longUrl,
    });
    console.log(response.data)
    if (response.data.success) {
        setLoading(false)
      setShortUrl(response.data.shortUrl);
    }else{
        setLoading(false)
        setShowResult(false);
        alert(response.data.message)
    }
  };
  const copyToClipboard = () =>{
    navigator.clipboard.writeText(shortUrl)
    .then(()=>{
        alert("copied to clipboard!!")
    })
  }

  return (
    <>
      <main>
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
           {loading ? <p>Generating ...</p>:  <div className="short-url-result">
              <button className="copy-btn" onClick={copyToClipboard}>Copy</button>
              <a href={shortUrl} target="_blank">
                {shortUrl} <img src={url_icon} alt="url" width={"18px"} />
              </a>
              <span onClick={() => setShowResult(false)}>
                <img src={cross_icon} alt="cross" width={"16px"} />
              </span>
            </div>}
          </>
        ) : (
          <></>
        )}
      </main>
    </>
  );
}

export default Main;
