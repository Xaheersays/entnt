import React from 'react'
import { VerifiedIcon } from '../../assets/Icons/icons';

const users = [
  { name: "John Smith", email: "john.smith@example.com" },
  { name: "Emily Johnson", email: "emily.johnson@example.com" },
  { name: "Michael Williams", email: "michael.williams@example.com" },
  { name: "Sarah Brown", email: "sarah.brown@example.com" },
  { name: "James Taylor", email: "james.taylor@example.com" },
  { name: "Emma Davis", email: "emma.davis@example.com" },
  { name: "Daniel Martinez", email: "daniel.martinez@example.com" },
  { name: "Olivia Garcia", email: "olivia.garcia@example.com" },
  { name: "William Rodriguez", email: "william.rodriguez@example.com" },
  { name: "Sophia Martinez", email: "sophia.martinez@example.com" }
];

const TopCustomers = () => {
  
  return (
    <div>
      <div className='font-bold font-mono text-xl'>Top Customers</div>
      <div>
        {users.map((user,id)=>(
          <UserDisplay key={id} name={user.name} email={user.email}/>
        ))}
      </div>
    </div>
  )
}

const UserDisplay= ({name,email})=>{
  return (
    <div className='bg-white text-black transform hover:scale-110 transition-transform duration-300 flex flex-col border border-black my-2 p-2  rounded-md'>

        <div className='py-2 flex items-center gap-2'>
          <span className='h-10 w-10 rounded-md bg-slate-800 text-white p-2 text-center'>{name[0]}</span>
          <span><VerifiedIcon color='blue' size={15}/></span>
        </div>
        <div className=''>
          <div className='font-semibold '>{name}</div>
          <div className='text-gray-500 overflow-hidden whitespace-nowrap overflow-ellipsis'>{email}</div>
        </div>
      
    </div>
  );
  
  

  

  
  
}

export default TopCustomers