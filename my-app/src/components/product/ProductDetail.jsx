import React from 'react'
import {useParams} from 'react-router-dom'
import { productState } from '../../store/product.atom'
import { useRecoilState, useRecoilValueLoadable,useSetRecoilState } from 'recoil'
import Button from '@mui/material/Button';
import {sliderAtom} from '../../store/slider.atom'
import { productInputAtom } from '../../store/productInput.atom';

const ProductDetail = () => {
  const {id} = useParams()
  const productsLoadable =  useRecoilValueLoadable(productState)
  let product = {}
  if (productsLoadable.state==='hasValue'){
    const temp = productsLoadable.contents.filter((prod)=>prod.id === id)
    if(temp.length>0)product=temp[0]
    else {product={status:'xyz', total:'xyz', available:'xyz', sales:'xyz', revenue:'xyz', image:'https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg', price:'xyz',  title:'xyz'}}
  }
  switch(productsLoadable.state){
    case 'hasError':
      return <div>
        wait for some error occured
      </div>
    case 'loading':
      return <div>loading ji 
      </div>
    case 'hasValue':
      return (<>
        <RenderProduct product={product}></RenderProduct>
      </>)
      
    default:
      return <div>sorry</div>
  }
  
}


const RenderProduct = ({product})=>{
  const [showSlider,setShowSlider] = useRecoilState(sliderAtom)
  const setEditRow  = useSetRecoilState(productInputAtom)
  return (
    <>
    <div>
      {/* first div */}
      <div className='flex flex-col md:flex-row gap-4  bg-slate-200 p-4 rounded-md  '>
        <div className='md:w-3/4'>
          <img src={product?.image} className='h-full rounded-md ' alt="product image" />
        </div>
        {/* second */}
        <div className='flex flex-col gap-2 md:w-1/4'>
          <div className='transform hover:scale-110 transition-transform duration-300 shadow-2xl text-center bg-white  text-2xl text-black uppercase   p-2 rounded-md w-full '>{product?.title}</div>
          <div className='flex flex-col gap-2'>
            <div className='transform hover:scale-110 transition-transform duration-300     p-2 rounded-md w-full shadow-2xl text-center bg-white'>Price : ${product?.price}</div>
            <div className='transform hover:scale-110 transition-transform duration-300     p-2 rounded-md w-full shadow-2xl text-center bg-white'>
                    Status : {product?.status}</div>
            <div className='transform hover:scale-110 transition-transform duration-300     p-2 rounded-md w-full shadow-2xl text-center bg-white'>Stocks : {product?.available}/{product?.total}</div>
            <div className='transform hover:scale-110 transition-transform duration-300     p-2 rounded-md w-full shadow-2xl text-center bg-white'>Sales: {product?.sales}</div>
            <div className='transform hover:scale-110 transition-transform duration-300     p-2 rounded-md w-full shadow-2xl text-center bg-white'>Revenue: {product?.revenue}</div>
            <Button onClick={()=>{
              setEditRow(product)
              setShowSlider({product:true,order:false})
              }} className='border  self-center' color='primary' variant='contained'>Edit</Button>
          </div>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default ProductDetail