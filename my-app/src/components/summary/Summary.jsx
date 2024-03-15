import React from 'react'
import { DownArrow, UpArrow } from '../../assets/Icons/icons'

const SummaryCard = ({Icon ,title , content , progress:{type , text } , captionValue,captionText}) => {
  return (
    <div className='font-mono border-2 flex flex-col  bg-gray-100 p-2 rounded-md my-2 flex-1 gap-4 justify-center items-center w-auto'>
        <div className='font-mono  flex items-center font-bold uppercase gap-2 text-2xl '>
          {<Icon size={30} color={'green'}/>}
          <div>{title}</div>
        </div>
        <div className='flex gap-2 items-center'>
          <span className='font-semibold text-2xl capitalize' >{content}</span>
          <div className={`${type=='down'? 'bg-red-200 text-red-900': 'bg-green-200 text-green-900'} py-2 px-4 rounded-3xl flex gap-2 items-center`} >
          <span>{type==='down' ? <DownArrow/> : <UpArrow/>} 
          </span> 
          <span>{text}</span>
          </div>
        </div>
        <div className='flex gap-2 font-semibold'>
          <p className='text-green-800'>{captionValue}</p>
          <p className='text-gray-600  '>{captionText}</p>
        </div>
    </div>
  )
}

// export default SummaryCard
// import React from 'react'
// import { DownArrow, UpArrow } from '../../assets/Icons/icons'

// const SummaryCard = ({ Icon, title, content, progress: { type, text }, captionValue, captionText }) => {
//   return (
//     <div className='font-mono border-2 flex flex-col bg-gray-100 p-2 rounded-md my-2 flex-1 gap-4 h-72 justify-between'>
//       <div className='font-mono flex items-center font-bold uppercase gap-2 text-2xl '>
//         {<Icon size={30} color={'green'} />}
//         <div>{title}</div>
//       </div>
//       <div className='flex flex-col gap-2 items-center flex-grow'>
//         <div className='flex gap-2 items-center flex-wrap'>
//           <span className='font-semibold text-2xl capitalize'>{content}</span>
//           <div className={`${type == 'down' ? 'bg-red-200 text-red-900' : 'bg-green-200 text-green-900'} py-2 px-4 rounded-3xl flex gap-2 items-center`} >
//             <span>{type === 'down' ? <DownArrow /> : <UpArrow />}</span>
//             <span>{text}</span>
//           </div>
//         </div>
//         <div className='flex gap-2 font-semibold mt-auto'>
//           <p className='text-green-800'>{captionValue}</p>
//           <p className='text-gray-600'>{captionText}</p>
//         </div>
//       </div>
//     </div>
//   )
// }


export default SummaryCard
