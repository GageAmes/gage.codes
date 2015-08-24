import React from 'react';
import { RouteHandler } from 'react-router';
import Header from '../components/header.jsx';
import Drawer from '../components/drawer.jsx';

class App extends React.Component {
  
  render() {
    return (
      <RouteHandler />
    );
  }
  
}

export default App;
