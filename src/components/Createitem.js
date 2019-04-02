import React, { useContext } from 'react';
import Context from '../reducer/Context';

export default function Createitem () {
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

