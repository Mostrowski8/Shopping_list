import React, { useContext } from 'react';
import Context from '../reducer/Context';
//styled components
import Shopitemcontainer from '../styledComponents/Shopitemcontainer';
import DeleteButton from '../styledComponents/DeleteButton';
import ButtonsContainer from '../styledComponents/ButtonsContainer';
import ItemName from '../styledComponents/ItemName';
import PriceContainer from '../styledComponents/PriceContainer';
import BuyButton from '../styledComponents/BuyButton';


export default function Shopitem ({itemId, text, price}) {
    const dispatch = useContext(Context);
      return (
      <Shopitemcontainer>
        <ItemName>{text}</ItemName><PriceContainer><div>Price:{price}</div></PriceContainer><ButtonsContainer><DeleteButton onClick={()=>{dispatch({type: "delete", payload: itemId})}}>Delete</DeleteButton><BuyButton onClick={()=>{dispatch({type: "buy", payload: itemId})}}>Buy</BuyButton></ButtonsContainer>
        </Shopitemcontainer>
      )
    }