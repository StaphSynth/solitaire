import React, { Component } from 'react';
import clickDrag from 'react-clickdrag';

class Card extends Component {

  constructor(props) {
    super(props);

    this.state = {
      faceUp: false,
      currentX: 0,
      currentY: 0,
      lastPositionX: 0,
      lastPositionY: 0
    }
  }

  isMoveable() {
    return this.state.faceUp;
  }

  handleMovement(nextProps) {
    if (nextProps.dataDrag.isMoving) {
      this.setState({
        currentX: this.state.lastPositionX + nextProps.dataDrag.moveDeltaX,
        currentY: this.state.lastPositionY + nextProps.dataDrag.moveDeltaY
      });
    } else {
      this.setState({
        lastPositionX: this.state.currentX,
        lastPositionY: this.state.currentY
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.isMoveable()) {
      this.handleMovement(nextProps);
    }
  }

  handleClick() {
    if (this.state.faceUp) return;

    this.setState({ faceUp: true });
  }

  render() {
    const translation = `translate(${this.state.currentX}px, ${this.state.currentY}px)`;

    return (
      <div
        className='card'
        onClick={this.handleClick.bind(this)}
        style={{ transform: translation }}
      >
        {
          this.state.faceUp ?
          this.props.value :
          'Back'
        }
      </div>
    );
  }
}

export default clickDrag(Card);
