import { useDispatch } from 'react-redux';
import {
  productAddSuccess,
  reload,
} from '../features/localStorage/localStorage';

export default function useCartHandler() {
  const dispatch = useDispatch();
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
    //reload

    dispatch(reload());
    dispatch(productAddSuccess(true));
  };

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
    dispatch(reload());
  };

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
    dispatch(reload());
  };

  const increaseCartItem = (id, incBy = 1) => {
    let cartList = JSON.parse(localStorage.getItem('cartList'));
    for (let i = 0; i < cartList.length; i++) {
      if (id === cartList[i].id) {
        cartList[i].quantity += incBy;
        break;
      }
    }
    localStorage.setItem('cartList', JSON.stringify(cartList));
    dispatch(reload());
  };

  return [addToCart, deleteCartItem, decreaseCartItem, increaseCartItem];
}
