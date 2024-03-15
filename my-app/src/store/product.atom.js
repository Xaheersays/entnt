import { atom, selector } from 'recoil';
import { getProducts } from '../Api/index';

export const productState = atom({
  key: 'productState',
  default: selector({
    key:'selectorproductState',
    get:async()=>{
      const data = await getProducts()
      return data
    }

  })
});

