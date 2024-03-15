import {LineGraph,ErrorComponent} from '../index.js'
import {useRecoilValueLoadable} from 'recoil'
import {visitorAtom} from '../../store/chart.atom.js'
import Loader from '../Loader/Loader.jsx';


const  Visitors= ()=>{
  const dataLoadable = useRecoilValueLoadable(visitorAtom);
  
  switch(dataLoadable.state){
    
    case 'hasError':
      return (
        <div><ErrorComponent message={'Error........'}/></div>
      )
    case 'loading':
      return(<Loader/>)

    case 'hasValue':
      return (
        <div className='border'>
          <div className='text-xl text-blue-700 font-semibold px-4'>
            Number of Visitors visited in the current year (2024)
          </div>
          <LineGraph props = {{height:300,width:500,data:dataLoadable.contents} }></LineGraph>
          
          </div>
      );
  }
  

  
}





export default Visitors

