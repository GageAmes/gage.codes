import React from 'react';
import { Link } from 'react-router';

class Drawer extends React.Component{

  constructor(props, context) {
    super(props);
  }

  render() {
    return (
      <div className="mdl-layout__drawer mdl-layout--small-screen-only">
        <span className="mdl-layout-title">Title</span>
        <nav className="mdl-navigation">
          <Link to="home" className="mdl-navigation__link">Home</Link>
        </nav>
      </div>
    );
  }

}

Drawer.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default Drawer;
