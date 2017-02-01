var React = require('react');
var ReactDOM = require('react-dom');

class Spaceship extends React.Component{
  render(){
    return (
      <div className="spacship">
        <h2>{this.props.name}</h2>
          <ul>
            <li>{this.props.speed}</li>
            <li>{this.props.hasRockets}</li>
            <li>{this.props.colors}</li>
          </ul>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}


module.exports = Spaceship;