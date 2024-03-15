import React from 'react'
import { Routes,Route } from 'react-router-dom'
import {ProductDetail,OrderDetail} from './components/index'
import DashBoard from './pages/DashBoard'
import ProductPage from './pages/ProductPage'
import InputProduct from './components/product/InputProduct.jsx'
import SlidingPanel from './components/slidingPanel/SlidingPanel.jsx'
import InputOrder from './components/order/InputOrder.jsx'
import {sliderAtom} from './store/slider.atom.js'
import { useRecoilValue } from 'recoil'
import OrderPage from './pages/OrderPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

const Render = () => {
  const slider = useRecoilValue(sliderAtom)

  return (
    <div>
          <Routes>
            <Route path='/' element={<DashBoard/>}/>
            <Route path='/products' element ={<ProductPage/>}/>
            <Route path='/orders' element ={<OrderPage/>}/>

            <Route path='/products/product/:id' element={<ProductDetail/>}/>
            <Route path='/orders/order/:id' element={<OrderDetail/>}/>
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
            {slider.product && <SlidingPanel><InputProduct/></SlidingPanel>}
            {slider.order && <SlidingPanel><InputOrder/></SlidingPanel>}
    </div>
  )
}


export default Render