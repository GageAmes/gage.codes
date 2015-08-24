import React from 'react';
import Tile from "../components/tile.jsx";

class Home extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    var gageLogo = (<div className="tile-background" style={{backgroundImage: "url('images/ga.svg')"}}></div>);
    var githubLogo = (<div className="tile-background" style={{backgroundImage: "url('images/github.svg')"}}></div>);
    return (
      <div className="page-content">
        <div id="grid">
          <Tile
            size={ Tile.SIZE.LARGE }
            front={ gageLogo }
            back="back" />
          <Tile
            size={ Tile.SIZE.MEDIUN }
            front={ githubLogo }
            back="back" />
          <Tile
            size={ Tile.SIZE.SMALL }
            front={ gageLogo }
            back="back" />
          <Tile
            size={ Tile.SIZE.SMALL }
            front={ gageLogo }
            back="back" />
          <Tile
            size={ Tile.SIZE.SMALL }
            front={ gageLogo }
            back="back" />
          <Tile
            size={ Tile.SIZE.SMALL }
            front={ githubLogo }
            back="back" />
          <Tile
            size={ Tile.SIZE.WIDE }
            front={ gageLogo }
            back="back" />
        </div>
      </div>
    );
  }
}

export default Home;
