const decreaseCartItem = (id, decBy = 1) => {
  let cartList = JSON.parse(localStorage.getItem('cartList'));
  for (let i = 0; i < cartList.length; i++) {
    if (id === cartList[i].id) {
      if (cartList[i].quantity > decBy) {
        cartList[i].quantity -= decBy;
      }
      break;
    }
  }
  localStorage.setItem('cartList', JSON.stringify(cartList));
};

export default decreaseCartItem;
