  import React ,{useState} from 'react'
  import {useParams} from 'react-router-dom'
  import { useRecoilValueLoadable,useRecoilState } from 'recoil'
  import { orderState } from '../../store/orders.atom'
  import Button from '@mui/material/Button';
  import Loader from '../Loader/Loader';  


  const OrderDetail = () => {
    const {id} = useParams()
    const ordersLoadable = useRecoilValueLoadable(orderState)
    let order = {};
    if (ordersLoadable.state==='hasValue'){
      console.log(ordersLoadable)
      const temp = ordersLoadable.contents.filter((ord)=>ord.id === id)
      if(temp.length>0){
        order = temp[0]
      }else{
        order = { quantity:"xyz",price:"xyz",user:"xyz",orderedOn:"xyz",bill:"xyz",dileveryStatus:"xyz",paymentStatus:"xyz",image:'https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg',name:"xyz"}
      }
    }
    switch(ordersLoadable.state){
      case 'hasError':
        return <div>
          wait for some time some error occured
        </div>
      case 'loading':
        return <div><Loader/>
        </div>
      case 'hasValue':
        return (<RenderOrder order={order}/>)
      default:
        return null
    }
  }

  
  

  const RenderOrder = ({order})=>{
  const [ordersList,setOrdersList] = useRecoilState(orderState)
  const [selectedStatus, setSelectedStatus] = useState(order?.dileveryStatus);
  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const onSave = () => {
    
    const idx = ordersList.findIndex((ord) => ord.id === order.id);
    if (idx !== -1) {
      const updatedOrderData = { ...order }; 
      console.log(updatedOrderData)
      updatedOrderData.dileveryStatus = selectedStatus; 
      const updatedOrdersList = [...ordersList]; 
      updatedOrdersList[idx] = updatedOrderData; 
      setOrdersList(updatedOrdersList); 
      setSelectedStatus('')
    }
  };
    
    return(
      
      <>
      <div className='flex flex-col md:flex-row gap-4 bg-slate-200 p-4 rounded-md '>
        {/* first */}
        <div className='md:w-3/4'>
          <img src={order?.image} alt="order image" className='w-full' />
        </div>
        {/* second */}
        <div className='flex flex-col gap-2 md:w-1/4'>
          <div className='transform hover:scale-110 transition-transform duration-300 shadow-2xl text-center  text-2xl text-black uppercase bg-white t p-2 rounded-md w-full '>
            {order?.name}
          </div>
          <div className='flex flex-col gap-2'>
            <div className='transform hover:scale-110 transition-transform duration-300  p-2 rounded-md w-full shadow-2xl text-center bg-white text-black'>Price : ${order?.price} </div>
            <div className='transform hover:scale-110 transition-transform duration-300   bg-white text-black p-2 rounded-md w-full shadow-2xl text-center'>Quantity : {order?.quantity} </div>
            <div className='transform hover:scale-110 transition-transform duration-300   bg-white text-black p-2 rounded-md w-full shadow-2xl text-center '>
              User : {order?.user}user
            </div>
            <div className='transform hover:scale-110 transition-transform duration-300    p-2 rounded-md w-full shadow-2xl text-center bg-white text-black'>Ordered On : {order?.orderedOn}</div>
            <div className='transform hover:scale-110 transition-transform duration-300   p-2 rounded-md w-full shadow-2xl text-center bg-white text-black'>Bill: ${order?.bill}</div>
            <div className='transform hover:scale-110 transition-transform duration-300  bg-white text-black p-2 rounded-md w-full shadow-2xl text-center '>
              <span>Delivery Status</span>
              <select
                className='bg-white  p-2 rounded-md w-full my-2'
                value={selectedStatus}
                onChange={handleStatusChange}
              >
                <option className='bg-white' value='Delivered'>Delivered</option>
                <option className='bg-white' value='Cancelled'>Cancelled</option>
                <option className='bg-white' value='Out for delivery'>Out for delivery</option>
                <option className='bg-white' value='Dispatched'>Dispatched</option>
              </select>
            </div>
            <div className='transform hover:scale-110 transition-transform duration-300  bg-white text-black p-2 rounded-md w-full shadow-2xl text-center '>Payment Status: {order?.paymentStatus} </div>
            <Button 
              onClick={onSave}
              className='border border-black self-center' color='primary' variant='contained'>Save
            </Button>
          </div>
        </div>
      </div>
    </>
    )
  }

  export default OrderDetail

