import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0,
    isOn: false,
    x: null,
    y: null
  };

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  toggleLight = () => {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }));
  };

  componentDidMount() {
    document.title = `You have been clicked ${this.state.count} times`;
    window.addEventListener('mousemove', this.handleMouseMove);
  }
  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
  }

  componentDidUpdate() {
    document.title = `You have been clicked ${this.state.count} times`;
  }
  handleMouseMove = event => {
    this.setState({
      x: event.pageX,
      y: event.pageY
    });
  };
  render() {
    return (
      <>
        <h2>Counter</h2>
        <button onClick={this.incrementCount}>
          I was clicked {this.state.count} times{' '}
        </button>
        <h2>Toggle Light</h2>
        <div
          onClick={this.toggleLight}
          style={{
            width: '50px',
            height: '50px',
            background: this.state.isOn ? 'yellow' : 'gray'
          }}
        />
        <h2>Mouse Position</h2>
        <p>X position: {this.state.x}</p>
        <p>Y position: {this.state.y}</p>
      </>
    );
  }
}

export default App;
