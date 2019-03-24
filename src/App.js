import React, { useReducer, useContext } from 'react';
import './App.css';
import styled, { keyframes } from 'styled-components'


const slide = keyframes ` 
  from {margin-left: -100px; opacity: 0}
  to { transform: translateX(100); opacity: 1;}
`

const Shopitemcontainer = styled.div`




animation: ${slide} 1s ease-in-out;




`


const initialState = {shopitems: [], id: Date.now(), bought:[]};

function reducer (state, action) {
  switch (action.type){
    case "add":
    console.log(state)
    return {
      ...state,
      shopitems: [...state.shopitems, {itemId: state.id, text: state.input, price: state.price}],
      id: Date.now()
    }
    case "setinput":
    console.log(action.payload)
    return  {...state, input: action.payload}
    case "setprice":
    console.log(action.payload)
    return {...state, price: action.payload}
    case "delete":
    console.log("delete", action.payload )
    return {...state, shopitems: state.shopitems.filter((shopitem)=>{return shopitem.itemId !== action.payload})}
    case "buy":
    return {...state, shopitems: state.shopitems.filter((shopitem)=>{return shopitem.itemId !== action.payload}), bought: [...state.bought, state.shopitems.find((shopitem)=>{return shopitem.itemId === action.payload})]}
    default:
    throw new Error("wrong action type")
  }
}

const Context = React.createContext();

const App = () => {
let [state, dispatch] = useReducer(reducer, initialState);


    return (
      <div className="App">
      <Context.Provider value={dispatch}>
      <Createitem/>
        
        <ShopitemsList shopitems={state.shopitems}></ShopitemsList>
        <Boughtitems bought={state.bought}></Boughtitems>
      </Context.Provider>
      </div>
    );
}

function Createitem () {
  let dispatch = useContext(Context);
  return (
    <div >
    <div style={{display: "flex", alignContent: "center"}}>
    <div style={{flex: "auto", textAlign:"right", padding: 5}}>
    <div>Product name</div>
    <input type="text" onChange={(e)=>dispatch({type:"setinput", payload: e.target.value})} ></input>
    </div>
    <div style={{flex: "auto", textAlign:"left",  padding: 5}}>
    <div>Product price</div>
    <input type="number" onChange={(e)=>dispatch({type:"setprice", payload: e.target.value})}></input>
    </div>
    </div>
    <button onClick={(e) => dispatch({type:"add"})}>ADD</button>
    </div>
  )
}

function Boughtitems ({bought}) {

  console.log("bought", bought)

  return bought.map((boughtitem) => <Boughtitem key={boughtitem.itemId} {...boughtitem} />)
}

function Boughtitem ({itemId, text, price}) {
const dispatch = useContext(Context);
console.log("boughtitem stats", itemId, text, price)
  return <div style={{
    color: "red",
    display: 'flex',
    flexDirection: "row"
    }}>
    {text} | <div>Price:{price}</div><button onClick={()=>{dispatch({type: "delete", payload: itemId})}}>Delete</button></div>
}


function ShopitemsList ({shopitems}) {

  

  return shopitems.map((shopitem) => <Shopitem key={shopitem.itemId} {...shopitem} />)
}

function Shopitem ({itemId, text, price}) {
const dispatch = useContext(Context);


  return (
  <Shopitemcontainer>
  <div style={{
    display: 'flex',
    flexDirection: "row"
    }}>
    {text} | <div>Price:{price}</div><button onClick={()=>{dispatch({type: "delete", payload: itemId})}}>Delete</button><button onClick={()=>{dispatch({type: "buy", payload: itemId})}}>Buy</button></div>
    </Shopitemcontainer>
  )
}

export default App;
