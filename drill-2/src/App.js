import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>DevMountain Hackathon</h1>
        <h3>Guest List:</h3>
        <ul>
          {this.props.lists.map( (guest, i) => {
            return (
              <div key={i} className="list-item">
                <li>{guest}</li>
                <button type="" className="">Remove</button>
              </div>}
            )
          })}
        </ul>
        <div className="add-guest">
          Add guest: <input type="" className=""/>
          <button type="" className="">Add</button>
        </div>
      </div>
    );
  }
}

// mapStateToProps
function mapStateToProps(reduxState){
  return {
    list: reduxState.guests
  }
}

//connect
export default connect(mapStateToProps)(App)
