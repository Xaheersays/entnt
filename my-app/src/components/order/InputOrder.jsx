import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { orderInputAtom } from '../../store/orderInput.atom';
import Button from '@mui/material/Button';
import { orderState } from '../../store/orders.atom';

const InputOrder = () => {
  const orderData = useRecoilValue(orderInputAtom);
  const [selectedStatus, setSelectedStatus] = useState(orderData?.dileveryStatus);
  const [ordersList, setOrdersList] = useRecoilState(orderState);

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const onSave = () => {
    const idx = ordersList.findIndex((ord) => ord.id === orderData.id);
    if (idx !== -1) {
      const updatedOrderData = { ...orderData };
      updatedOrderData.dileveryStatus = selectedStatus;
      const updatedOrdersList = [...ordersList];
      updatedOrdersList[idx] = updatedOrderData;
      setOrdersList(updatedOrdersList);
    }
  };

  return (
    <div>
      <div className='font-bold font-mono p-3 bg-slate-800 text-white'>Order Id : {orderData.id}</div>
      <div className='flex flex-col p-6 my-6 bg-gray-100 rounded-md shadow-md'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='flex flex-col'>
            <div className='font-bold text-xl'>Title</div>
            <div className='bg-green-200 border border-black p-2 rounded-md'>{orderData?.name}</div>
          </div>
          <div className='flex flex-col'>
            <div className='font-bold text-xl'>Price</div>
            <div className='bg-green-200 border border-black p-2 rounded-md'>${orderData?.price}</div>
          </div>
          <div className='flex flex-col'>
            <div className='font-bold text-xl'>Quantity</div>
            <div className='bg-green-200 border border-black p-2 rounded-md'>{orderData?.quantity}</div>
          </div>
          <div className='flex flex-col'>
            <div className='font-bold text-xl'>User</div>
            <div className='bg-green-200 border border-black p-2 rounded-md'>{orderData?.user}</div>
          </div>
          <div className='flex flex-col'>
            <div className='font-bold text-xl'>Ordered On</div>
            <div className='bg-green-200 border border-black p-2 rounded-md'>{orderData?.orderedOn}</div>
          </div>
          <div className='flex flex-col'>
            <div className='font-bold text-xl'>Bill</div>
            <div className='bg-green-200 border border-black p-2 rounded-md'>${orderData?.bill}</div>
          </div>
        </div>
        <div>
          <div className='font-bold text-xl'>Delivery Status</div>
          <select
            className='bg-green-200 border border-black p-2 rounded-md my-2'
            value={selectedStatus}
            onChange={handleStatusChange}
          >
            <option value='Delivered'>Delivered</option>
            <option value='Cancelled'>Cancelled</option>
            <option value='Out for delivery'>Out for delivery</option>
            <option value='Dispatched'>Dispatched</option>
          </select>
        </div>
        <div className='flex justify-end'>
          <Button onClick={onSave} variant='contained'>Save</Button>
        </div>
      </div>
    </div>
  );
};

export default InputOrder;
