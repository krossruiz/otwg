import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { slideInLeft } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  fade: {
    animation: 'x 0.76s',
    animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <StyleRoot>
        <div style={[styles.fade, {
          display: "flex",
          justifyContent: "center"
        }]}>
          <div style={{
            width: '50%',
            margin: '5%',
            padding: '5%',
            backgroundColor: '#111111',
            borderRadius: '20px'
          }
          }>
            <div style={{
              
              }}>
              <img style={{
                width: '80%',
                padding: '10px',
                backgroundColor: 'white',
                borderRadius: '20px'
              }}
                src={'OTWG.org-horizontal.png'}
              ></img>
            </div>
          </div>
        </div>
      </StyleRoot>
      </div>
    );
  }
}

export default App;
