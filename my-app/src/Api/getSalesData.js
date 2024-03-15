const getSalesData = ()=>{
  const data = [
    { name: 'Product A', value: 900 },
    { name: 'Product B', value: 300 },
    { name: 'Product C', value: 300 },
    { name: 'Product D', value: 200 },
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 100); 
  });
}

export default getSalesData