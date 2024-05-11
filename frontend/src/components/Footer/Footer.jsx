import React from 'react'
import "./footer.css"
function Footer() {
  return (
    <>
        <footer>
            <div className="footer-list">
                <ul>
                <li>Home</li>
                <li>About</li>
                <li>Support</li>
            </ul>
            <ul>
                <li>Privacy Policy</li>
            </ul>
            </div>
            <div className="footer-bottom">
                <p>Developed by <a href="https://sourav-c-portfolio.netlify.app">Sourav.</a> Copyright @ 2024</p>
            </div>
        </footer>
    </>
  )
}

export default Footer