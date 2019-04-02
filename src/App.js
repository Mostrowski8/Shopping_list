import React, { useReducer } from 'react';
import './App.css';
//context and reducer
import Context from './reducer/Context'
import reducer from './reducer/Reducer'
//styled components
import Listcontainer from './styledComponents/Listcontainer';
//components
import Createitem from './components/Createitem';
import Boughtitems from './components/Boughtitems';
import ShopitemsList from './components/ShopitemsList';

//initial state
const initialState = {shopitems: [], id: Date.now(), bought:[]};
//App
const App = () => {
// reducer hook
let [state, dispatch] = useReducer(reducer, initialState);
    return (
      <div className="App">
      <Context.Provider value={dispatch}>
      <Createitem/>
      <h3>To Buy</h3>
      <Listcontainer>
      <ShopitemsList shopitems={state.shopitems}></ShopitemsList>
      </Listcontainer>
      <h3>Bought</h3> 
      <Listcontainer>
      <Boughtitems bought={state.bought}></Boughtitems>
      </Listcontainer>
      </Context.Provider>
      </div>
    );
}

export default App;
