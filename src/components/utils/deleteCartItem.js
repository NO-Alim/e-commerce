//Delete item form cart
const deleteCartItem = (id) => {
  let cartList = JSON.parse(localStorage.getItem('cartList'));
  for (let i = 0; i < cartList.length; i++) {
    if (cartList[i].id === id) {
      cartList.splice(i, 1);
      break;
    }
  }
  localStorage.setItem('cartList', JSON.stringify(cartList));
};

export default deleteCartItem;
