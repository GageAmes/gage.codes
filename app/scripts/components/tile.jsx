import React from 'react/addons';
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class Tile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        isFront: true
    };
    this.defaultFlipInterval = 5000 + (Math.random() * 55000);
  }

  flipTile() {
    if (Math.random() < 0.5) {
      this.setState({
        isFront: !this.state.isFront
      });
    }
  }

  updateTileInterval() {
    this.clearTileInterval();
    if (this.props.shouldFlip && this.props.flipInterval !== 0) {
      this.tileInterval = setInterval(function() {
        this.flipTile();
      }.bind(this),
      this.props.flipInterval !== undefined ? this.props.flipInterval : this.defaultFlipInterval);
    }
  }

  clearTileInterval() {
    if (this.tileInterval !== undefined) {
      clearInterval(this.tileInterval);
      this.tileInterval = undefined;
    }
  }

  componentDidMount() {
    this.updateTileInterval();
  }

  componentDidUpdate(prevProps) {
    if (this.props.tileInterval !== prevProps.tileInterval) {
      this.updateTileInterval();
    }
  }

  componentWillUnmount() {
    this.clearTileInterval();
  }

  render() {
    var content = this.state.isFront ? this.props.front : this.props.back;
    var key = this.state.isFront ? "front" : "back";
    var className = "tile tile-" + this.props.size;
    return (
      <ReactCSSTransitionGroup transitionName="tileTransition" component="div" className={ className }>
        <div key={ key } className="tile-content">{ content }</div>
      </ReactCSSTransitionGroup>
    );
  }
}

Tile.SIZE = Object.freeze({
  SMALL: "small",
  MEDIUM: "medium",
  WIDE: "wide",
  LARGE: "large"
});

Tile.defaultProps = {
  size: Tile.SIZE.MEDIUM,
  shouldFlip: true,
  flipInterval: undefined
};

Tile.propTypes = {
  size: React.PropTypes.oneOf([Tile.SIZE.SMALL, Tile.SIZE.MEDIUM, Tile.SIZE.WIDE, Tile.SIZE.LARGE]),
  shouldFlip: React.PropTypes.bool,
  flipInterval: React.PropTypes.number
};

export default Tile;
