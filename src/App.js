import React,{Component} from 'react';
import {Provider} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import configureStore from './store'
const store = configureStore();
class App extends Component {
  render(){
    return (
      <Provider store={store}>
        jhfhdgs
      </Provider>
    );
  }
  
}

export default App;
