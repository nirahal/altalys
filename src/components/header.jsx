import React, { Component } from "react";

/*my imports*/
import Logo from "../assets/Logo.png";

export class Header extends Component {
  render() {
    return (
      <div className="mt-3">
        <img src={Logo} alt="logo" />
      </div>
    );
  }
}

export default Header;
