const appendToStorage = (name, data) => {
  let prevItems = localStorage.getItem(name);
  try {
    prevItems = JSON.parse(prevItems);
  } catch (e) {
    prevItems = [];
  }
  //setItem what ever it is.
  localStorage.setItem(name, JSON.stringify(prevItems.concat(data)));
};

const addToCart = (product) => {
  let cartList = JSON.parse(localStorage.getItem('cartList'));

  if (!localStorage.getItem('cartList')) {
    //there is no cartList in localStorage
    localStorage.setItem('cartList', JSON.stringify([product]));
  } else {
    let productAlreadyExist = cartList.find((item) => item.id === product.id);

    if (productAlreadyExist !== undefined) {
      //already exist
      for (let i = 0; i < cartList.length; i++) {
        if (product.id === cartList[i].id) {
          cartList[i].quantity += product.quantity;
          break;
        }
      }
      localStorage.setItem('cartList', JSON.stringify(cartList));
    } else {
      //not exist
      appendToStorage('cartList', product);
    }
  }
};

export default addToCart;
