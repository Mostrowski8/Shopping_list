
import React from 'react';
import Shopitem from './Shopitem';

export default function ShopitemsList ({shopitems}) {
    return shopitems.map((shopitem) => <Shopitem key={shopitem.itemId} {...shopitem} />)
  }
