import React, { useReducer, useContext } from 'react';
import './App.css';
import styled, { keyframes } from 'styled-components'

//css
const slide = keyframes ` 
  from {margin-left: -100px; opacity: 0}
  to { transform: translateX(100); opacity: 1;}
`;
const Shopitemcontainer = styled.div`
position: relative;
border: 1px solid #ccc;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
transition: all 0.3s cubic-bezier(.25,.8,.25,1);
:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
padding: 10px;
margin: 10px;
animation: ${slide} 1s ease-in-out;
border-radius: 2px;
display: flex;
align-contenot: center;
width: 40%;
@media (max-width: 700px) {
  width: 90%;  
}
`;
const StyledButton = styled.button`
margin-left: 5px;
padding: 0 5 0;
overflow: hidden;
border-width: 0;
outline: none;
border-radius: 2px;
box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
color: #fff;  
transition: background-color .3s;
`;
const DeleteButton = styled(StyledButton)`
float: right;
background-color: #ba000d;
:hover, :focus {
  background-color: #630006;
}
`;
const BuyButton = styled(StyledButton)`
float: right;
background-color: #14e715;
:hover, :focus {
  background-color: #27ae60;
}
`;
const ButtonsContainer = styled.div`
flex: "auto"; 
textAlign:"right";
`
const ItemName = styled.div`
border-right: 1px solid grey;
padding-right: 5px;
margin-right: 5px;
text-align: left;
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
    return {...state, shopitems: state.shopitems.filter((shopitem)=>{return shopitem.itemId !== action.payload}), bought: state.bought.filter((shopitem)=>{return shopitem.itemId !== action.payload})}
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
  return <Shopitemcontainer><div style={{
    color: "red",
    display: 'flex',
    flexDirection: "row"
    }}>
    <ItemName>{text}</ItemName><div>Price:{price}</div><ButtonsContainer><DeleteButton onClick={()=>{dispatch({type: "delete", payload: itemId})}}>Delete</DeleteButton></ButtonsContainer></div>
    </Shopitemcontainer>
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
    flexDirection: "row",
    alignItems: "center"
    }}>
    <ItemName>{text}</ItemName><div>Price:{price}</div><ButtonsContainer><DeleteButton onClick={()=>{dispatch({type: "delete", payload: itemId})}}>Delete</DeleteButton><BuyButton onClick={()=>{dispatch({type: "buy", payload: itemId})}}>Buy</BuyButton></ButtonsContainer></div>
    </Shopitemcontainer>
  )
}

export default App;
