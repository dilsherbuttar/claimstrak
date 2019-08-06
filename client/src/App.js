import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/AppNavbar';
import ClaimsList from './components/ClaimsList';
import { Provider } from 'react-redux';
import store from './store';
import ItemModal from './components/itemModal'


function App() {
  return (
    <Provider store = {store}>

    <div className="App">
      <AppNavBar/>
      <ItemModal/>
      <ClaimsList/>
    </div>
    </Provider>

  );
}

export default App;
