import { atom, selector } from 'recoil';
import { getOrders } from '../Api/index';

export const orderState = atom({
  key: 'orderState',
  default: selector({
    key:'selectororderState',
    get:async()=>{
      const data = await getOrders()
      return data
    }

  })
});