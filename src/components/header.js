import React, { Component } from "react";
import { SideNav, SideNavItem, Button } from "react-materialize";
import { Link } from "react-router-dom";
import img from "../img/background1.jpg";

class Header extends Component {
  render() {
    return (
      <nav className="white" role="navigation">
        <div className="nav-wrapper container">
          <a id="logo-container" href="/" className="brand-logo">MoviesDB</a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li><Link to="/posts">Posts</Link></li>
          </ul>

          <SideNav id="nav-mobile" className="sidenav" trigger={<Button className="sidenav-btn"><i className="material-icons">menu</i></Button>} options={{ closeOnClick: true }}>
            <SideNavItem userView
              user={{
                background: img,
                image: img,
                name: 'Matias',
                email: 'matias.punx@gmail.com'
              }}
            />
            <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
            <SideNavItem href='#!second'>Second Link</SideNavItem>
            <SideNavItem divider />
            <SideNavItem subheader>Subheader</SideNavItem>
            <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
          </SideNav>
        </div>
      </nav>
    );
  }
}

export default Header;