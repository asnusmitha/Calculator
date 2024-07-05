import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./button";
import nav from "./nav.css"
import CreateProd from "./createProd";
import SearchProd from "./searchProd";
class Nav extends Component {
  state = {};
  
  render() {
    return (
      <>
        <div>
          <nav class="navbar navbar-expand-lg bg-info">
            <div class="container-fluid">
              <a class="text">Shopping</a>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link to="/">
                      <a class="nav-link" aria-current="page" href="">
                        Login
                      </a>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/products">
                      <a class="nav-link" href="#">
                        Products
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
}

export default Nav;
