import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { productInputAtom } from '../../store/productInput.atom';
import {productState} from '../../store/product.atom'
import { v4 as uuidv4 } from 'uuid';

const InputProduct = () => {
  const [productInput, setProductInput] = useRecoilState(productInputAtom)
  const [productList,setProductList] = useRecoilState(productState)
  const { register, handleSubmit, formState: { errors },reset } = useForm();
  
  
  const updateProduct = (data) => {
    const index = productList.findIndex(product => product.id === productInput.id);
    if (index !== -1) {
      const updatedProductList = [...productList];
      const updatedProduct = { ...updatedProductList[index] };
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          if (key === 'status') {
            console.log('statis is ',data[key],typeof data[key])
            updatedProduct.status = data[key] ? 'active' : 'inactive';
          } else if (typeof data[key] === 'string' && data[key].trim() !== '') {
            updatedProduct[key] = data[key];
          }
        }
      }
      updatedProductList[index] = updatedProduct;
      setProductList(updatedProductList);
      return 'Update has been done'
      
  }  else {
      const newProduct = {
        id: uuidv4(),
        title: data.title,
        price: data.price,
        available: data.available,
        total: data.total,
        image: data.image,
        status: data.status
      };
      setProductList(prevState => [...prevState, newProduct]);
      return 'Added New Product'
    }
  };
  
  const onSubmit = data => {
      const msg = updateProduct(data)
      setProductInput({})
      reset()
  }
  
  const renderValueDivs = (value, label) => {
    if (value) {
      return (
        <div className='bg-green-100 font-mono p-2 rounded-md border border-black'>
          previous value: {label}
        </div>
      );
    }
    return null;
  };

  return (
    <>
     
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 px-3  py-4 w-full  overflow-y-auto'>
        <div className="flex flex-col">
          <label htmlFor="outlined-basic" className="text-gray-700 font-bold text-lg">Title</label>
          <input 
            className="block w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
            type="text" placeholder={'Title'} {...register("title",{})} />
        </div>
        {renderValueDivs(productInput.title, productInput.title)}

        <div className="flex flex-col">
          <label htmlFor="Price-basic" className="text-gray-700 font-bold text-lg">Price</label>
          <input 
            className="block w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
            type="number" placeholder={'price'} {...register("price", {})} />
        </div>
        {renderValueDivs(productInput.price, productInput.price)}

        <div className="flex flex-col">
          <label htmlFor="Available-basic" className="text-gray-700 font-bold text-lg">Available in stock</label>
          <input 
            className="block w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
            type="number" placeholder={'available'} {...register("available", {})} />
        </div>
        {renderValueDivs(productInput.available, productInput.available)}

        <div className="flex flex-col">
          <label htmlFor="Total-basic" className="text-gray-700 font-bold text-lg">Total count</label>
          <input
            className="block w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
            type="number" placeholder={'total'} {...register("total", {})} />
        </div>
        {renderValueDivs(productInput.total, productInput.total)}

        <div className="flex flex-col">
          <label htmlFor="Image-basic" className="text-gray-700 font-bold text-lg">Image url</label>
          <input 
            className="block w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
            type="url" placeholder={'image url'} {...register("image", {})} />
        </div>
        {renderValueDivs(productInput.image, productInput.image)}

        <div className="flex flex-col">
          <label htmlFor="Status-basic" className="text-gray-700 font-bold text-lg">Status</label>
          <div className="flex items-center">
            <input
              className=" px-3 py-2 placeholder-gray-400 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
              type="checkbox" id="Status-basic" {...register("status", {})} />
          </div>
        </div>

        <div className='flex justify-center'>
          <input 
            className=" w-1/2 bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white font-bold py-2 px-4 rounded transform transition-transform hover:scale-105 focus:scale-105"
            type="submit" />
        </div>
        <div className='bg-red-200 p-2 rounded-md flex gap-2'>
          <p className='text-red-800 font-bold '>Note</p>: to modify enter the value with respect to input field
        </div>
      </form>
    </>
  );
}





export default InputProduct;
