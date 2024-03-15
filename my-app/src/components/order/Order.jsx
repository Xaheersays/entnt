import React ,{useCallback}from 'react'
import { ordersHeadCells } from '../../Api/static/ordersTableHeader'
import { orderState } from '../../store/orders.atom'
import {Table} from '../index'
import {useNavigate} from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { orderInputAtom } from '../../store/orderInput.atom'
const Order = () => {
  const navigate = useNavigate()
  const setEditRow = useSetRecoilState(orderInputAtom)
  const onView = useCallback((id)=>{
    navigate('order/'+id)
  },[])
  const  rowKeys = ['quantity','price','user','orderedOn','bill','dileveryStatus','paymentStatus']
  return (
    <div>
      <Table rowKeys={rowKeys} rowState = {orderState} headCells={ordersHeadCells} tableName ='Orders' onView={onView} editRow={setEditRow}/>
    </div>
  )
}

export default Order