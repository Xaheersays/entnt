import {  atom } from 'recoil';
export const sliderAtom = atom({
  key:"sliderAtom",
  default:{
    product:false,
    order:false,
  }
})
