import React, { useContext } from 'react';
import Context from '../reducer/Context';

//styled components
import Shopitemcontainer from '../styledComponents/Shopitemcontainer';
import DeleteButton from '../styledComponents/DeleteButton';
import ButtonsContainer from '../styledComponents/ButtonsContainer';
import ItemName from '../styledComponents/ItemName';
import PriceContainer from '../styledComponents/PriceContainer';






export default function Boughtitem ({itemId, text, price}) {
    let dispatch = useContext(Context);
    console.log("boughtitem stats", itemId, text, price)
      return <Shopitemcontainer>
        <ItemName>{text}</ItemName><PriceContainer><div>Price:{price}</div></PriceContainer><ButtonsContainer><DeleteButton onClick={()=>{dispatch({type: "delete", payload: itemId})}}>Delete</DeleteButton></ButtonsContainer>
        </Shopitemcontainer>
    }