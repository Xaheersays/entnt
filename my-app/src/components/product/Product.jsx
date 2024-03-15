import React,{useCallback, useState} from 'react'
import { productState } from '../../store/product.atom'
import {productHeadCells} from '../../Api/static/productTableHeader'
import {Table} from '../index'
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'
import {sliderAtom} from '../../store/slider.atom'
import { useSetRecoilState } from 'recoil';
import { productInputAtom } from '../../store/productInput.atom';

const Product = () => {
  const navigate = useNavigate()
  const setShowSlider = useSetRecoilState(sliderAtom)
  const setEditRow = useSetRecoilState(productInputAtom)

  const onView = useCallback((id)=>{
    navigate('product/'+id)
  },[])
  const rowKeys = ['price','status','available','total','revenue']
  return (
    <div className=''>
      <Button onClick={()=>{
        setEditRow({})
        setShowSlider({product:true , order:false })
        }} variant="contained">Add New Product</Button>
      <Table  rowState={productState} headCells= {productHeadCells} tableName={'Products'} rowKeys={rowKeys} onView={onView} editRow = {setEditRow}/>
    </div>
  )
}

export default Product