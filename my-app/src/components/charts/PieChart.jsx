import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { pieGraphAtom } from '../../store/chart.atom';
import { useRecoilValueLoadable } from 'recoil';
import {Loader} from '../index'


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieGraph = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const dataLoadable =useRecoilValueLoadable(pieGraphAtom)
  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };
  
  const renderTooltipContent = (props) => {
    const { payload } = props;

    if (!payload || payload.length === 0) {
      return null;
    }

    const dataItem = payload[0].payload;

    return (
      <div style={{ backgroundColor: 'white', padding: '10px', border: '1px solid #ccc' }}>
        <p>{dataItem.name}</p>
        <p>{`Value: ${dataItem.value}`}</p>
      </div>
    );
  };


  switch(dataLoadable.state){
    case 'hasError':
      return (
        <div>Error........</div>
      )
    case 'loading':
      return(<Loader/>)
    case 'hasValue':
      const data = dataLoadable.contents
      let total = data.reduce((accum,item)=>(accum+item.value),0)
      return (
        <div className='flex flex-col items-center'>
          <div className='text-xl text-blue-700 font-semibold font-mono '>Comparison of sales of Product A,B,C,D</div>
          <div className='font-semibold text-md'>Total : {total}</div>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={120}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                onMouseEnter={onPieEnter}
                className = 'outline-none'
              >
                {data.map((entry, index) => {
                  return <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                })}
              </Pie>
              <Tooltip content={renderTooltipContent} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      );
  }

 
};

export default PieGraph;
