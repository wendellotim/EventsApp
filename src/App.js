import  { Component, createElement } from 'react';
import './App.css';
import Events from './Events.js';
import {Hike} from './Hike.js';

class App extends Component {
  render() {
    return(
      createElement(Events, null), 
   createElement(Hike, {})
)
};
}


export default App;
