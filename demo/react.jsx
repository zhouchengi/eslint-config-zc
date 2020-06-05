import React, { Component } from 'react'

class App extends Component {
  handleClick = () => {
    console.log(1)
  }

  render() {
    return <div onClick={this.handleClick}>Hello World</div>
  }
}

export default App
