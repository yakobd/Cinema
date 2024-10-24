import React from "react";
import "./Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <div className="footer_outer_container">
      <div className="footer_container">
        <div className="footer_icons">
          <FacebookOutlinedIcon className="pointer" />
          <InstagramIcon className="pointer" />
          <YouTubeIcon className="pointer" />
          <TelegramIcon className="pointer" />
          <GitHubIcon className="pointer" />
        </div>
        <div className="footer_data">
          <div>
            <ul>
              <li>About Us</li>
              <li>List Of Cinema</li>
              <li>+251961008600</li>
            </ul>
          </div>
        </div>
        <div className="copy_write">&copy; 2024 Ethio Cinema, Inc.</div>
      </div>
    </div>
  );
}

export default Footer;
