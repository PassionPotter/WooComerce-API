import Cookies from 'js-cookie';
import { CART_COOKIE_NAME } from '../../config';
import { Dispatch } from 'redux';
import { CartTypes } from '../types';
import {
  AddToCart,
  RemoveFromCart,
  UpdateCartItemCount
} from './cart_interfaces';

export const CART_ITEMS = Cookies.get(CART_COOKIE_NAME) || '';
export const CART_ITEMS_DELIMETER = ',';

export const addToCart = (id: string, price: string, count = 1) => {
  return (dispatch: Dispatch) => {
    dispatch<AddToCart>({
      type: CartTypes.addToCart,
      payload: { id, price, count }
    });
  };
};

export const removeFromCart = (id: string) => {
  return (dispatch: Dispatch) => {
    dispatch<RemoveFromCart>({
      type: CartTypes.removeFromCart,
      payload: id
    });
  };
};

export const updateCartItemCount = (
  id: string,
  price: string,
  count: number
) => {
  return (dispatch: Dispatch) => {
    dispatch<UpdateCartItemCount>({
      type: CartTypes.updateCartItemCount,
      payload: { id, price, count }
    });
  };
};
