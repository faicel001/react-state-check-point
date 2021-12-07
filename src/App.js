import './App.css';
import React from "react";
import Welcome from './com/welcome.js';
class App extends React.Component {
  state = {
    person: {
      fullName: 'bendawed faicel', bio: 'major', imgSrc: './imag.jpeg',
      profession: 'develper'
    },
    show: false
  };
  handleClick = () => this.setState({ show: !this.state.show })
  render() {
    return <center><div>{
      this.state.show ? <Welcome pers={this.state.person} /> : " "
    }
      <button onClick={this.handleClick}>show profile info
      </button>
    </div></center>
  }
}
export default App;