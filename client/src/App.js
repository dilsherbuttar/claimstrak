import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/AppNavbar';
import ClaimsList from './components/ClaimsList';
import { Provider } from 'react-redux';
import store from './store'


function App() {
  return (
    <Provider store = {store}>

    <div className="App">
      <AppNavBar/>
      <ClaimsList/>
    </div>
    </Provider>

  );
}

export default App;
