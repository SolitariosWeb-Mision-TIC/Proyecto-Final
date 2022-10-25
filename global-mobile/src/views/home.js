import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">Global Mobile</a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link">Productos</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div>
          <p className="h1">Welcome</p>
        </div>
      </div>
    );
  }
}
export default Home;
