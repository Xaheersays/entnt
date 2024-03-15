import React from "react";
import {LineGraph,Loader,ErrorComponent} from '../index'
import { paymentModeAtom } from "../../store/chart.atom";
import { useRecoilValueLoadable } from "recoil";


const PaymentModeChart = ( )=>{
  const dataLoadable = useRecoilValueLoadable(paymentModeAtom)
  switch(dataLoadable.state){
    
    case 'hasError':
      return (
        <div><ErrorComponent message={'Error........'}/></div>
      )
    case 'loading':
      return(<Loader/>)

    case 'hasValue':
      return (
        <LineGraph props={{height:300,width:500,data:dataLoadable.contents}}/>
      );
  }
  
}


export default PaymentModeChart