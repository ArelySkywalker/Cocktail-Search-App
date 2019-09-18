import React, { Component } from 'react';
import Header from './Components/Header';
import MainContainer from './Containers/MainContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/App.scss';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './Actions/authActions';


var is_root = window.location.pathname === "/";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

 	render() {
     return (
        <Provider store={store}>
        <div className="App">
          <div className={`Main ${ is_root ? `root` : `` }`}>
            <Header />
            <MainContainer />
          </div>
        </div>
      </Provider>
     );
   }
}

export default App;
