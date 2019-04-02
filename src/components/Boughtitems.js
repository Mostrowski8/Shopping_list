import React from 'react';
import Boughtitem from './Boughtitem';

export default function Boughtitems ({bought}) {

    console.log("bought", bought)
  
    return bought.map((boughtitem) => <Boughtitem key={boughtitem.itemId} {...boughtitem} />)
  }