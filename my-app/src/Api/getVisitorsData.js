//here data fetching will be done
const getVisitorsData = ()=>{
   const data = [
    {
      name: "January",
      visitors: 200,
    },
    {
      name: "February",
      visitors: 1000,
    },
    {
      name: "March",
      visitors: 800,
    },
    {
      name: "April",
      visitors: 1100,
    },
    {
      name: "May",
      visitors: 1500,
    },
    {
      name: "June",
      visitors: 1900,
    },
    {
      name: "July",
      visitors: 1000,
    },
    {
      name: "August",
      visitors: 2000,
    },
    {
      name: "October",
      visitors: 1800,
    },
    {
      name: "November",
      visitors: 3000,
    }
    ];
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 100); 
    });
}
export default getVisitorsData;