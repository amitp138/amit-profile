import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/amitpande1008/"><InstagramIcon /></a>
        <a target="_blank" rel="noreferrer"  href="https://twitter.com/AmitPan1008"><TwitterIcon /></a>
        <a target="_blank" rel="noreferrer" href="https://github.com/amitp138"><GithubIcon /></a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/amit-pandey-006b28240/"><LinkedInIcon /></a>
      </div>
      <p> &copy; 2022 pandey amit</p>
    </div>
  );
}

export default Footer;
