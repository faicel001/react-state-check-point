import React from 'react'
import '../App.css';
import Coun from './Coun.js';
const Welcome = (props) => {
  return (
    <div>

      <div class="z">
        <h1>hello this is {props.pers.fullName} he is {props.pers.bio} and
          working as a {props.pers.profession}  </h1>
        <div class="container">
          <img src="./imag.jpeg" alt="c" style={{ width: "200px" }} />
        </div>
      </div>
      <Coun />
    </div>
  )
}

export default Welcome


