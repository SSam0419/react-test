import React from "react";
import logo from "./Design/logo.png";

const Footer = () => {
  return (
    <div className="Footer">
      <img src={logo} alt="logo" />
      <h1>海宝店</h1>
      <div className="footer-text">
        <div>产品</div>
        <div>我的收藏表</div>
        <div>我的设置</div>
        <div> </div>
      </div>
    </div>
  );
};

export default Footer;
