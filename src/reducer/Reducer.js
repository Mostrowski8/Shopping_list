export default function reducer (state, action) {
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


