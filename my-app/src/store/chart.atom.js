import {  atom, selector } from 'recoil';
import { getVisitorsData,getPaymentModeData ,getSalesData} from '../Api/index';

export const visitorAtom = atom({
  key:"visitorAtom",
  default : selector({
    key:'selectorvisitorAtom',
    get:async()=>{
      const data = await  getVisitorsData()
      return data
    }
  })
})


export const paymentModeAtom = atom({
  key:"paymentModeAtom",
  default : selector({
    key:'selectorpaymentModeAtom',
    get:async()=>{
      const data = await  getPaymentModeData()
      return data
    }
  })
})

export const pieGraphAtom = atom({
  key:"pieGraphAtom",
  default : selector({
    key:'selectorpieGraphAtom',
    get:async()=>{
      const data = await  getSalesData()
      return data
    }
  })
})