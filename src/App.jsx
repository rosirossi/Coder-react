import React, {Component} from 'react';
import './App.css';

// importar componentes
import NavBar from './components/NavBar/NavBar'
import CardWidget from './components/CardWidget/CardWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

class App extends Component {
  render(){
    return(
      <div className="App">
        <NavBar />
        <div>
          <ItemListContainer greeting="Bienvenidxs"/>
        </div>
      </div>

    );
  }
}

export default App;
