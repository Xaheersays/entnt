const getPaymentModeData = ()=>{
  const data = [
    {
      name: "January",
      COD: 4000,
      Online: 2400,
    },
    {
      name: "February",
      COD: 3000,
      Online: 1398,
    },
    {
      name: "March",
      COD: 2000,
      Online: 9800,
    },
    {
      name: "April",
      COD: 2780,
      Online: 3908,
    },
    {
      name: "May",
      COD: 1890,
      Online: 4800,
    },
    {
      name: "June",
      COD: 2390,
      Online: 3800,
    },
    {
      name: "July",
      COD: 3490,
      Online: 4300,
    }
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 100); 
  });
}
export default getPaymentModeData