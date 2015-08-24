import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component{

  constructor(props, context) {
    super(props);
  }

  render() {
    return (
      <header className="mdl-layout__header is-casting-shadow">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">Gage.codes</span>
          <nav className="mdl-navigation mdl-layout--large-screen-only">
            <Link to="home" className="mdl-navigation__link">Home</Link>
          </nav>
        </div>
      </header>
    );
  }

}

Header.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default Header;
