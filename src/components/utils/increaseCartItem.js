const increaseCartItem = (id, incBy = 1) => {
  let cartList = JSON.parse(localStorage.getItem('cartList'));
  for (let i = 0; i < cartList.length; i++) {
    if (id === cartList[i].id) {
      cartList[i].quantity += incBy;
      break;
    }
  }
  localStorage.setItem('cartList', JSON.stringify(cartList));
};

export default increaseCartItem;
