import { v4 as uuidv4 } from 'uuid';

function generateDummyUserName() {
  const adjectives = ['Happy', 'Silly', 'Brave', 'Funny', 'Clever', 'Kind', 'Wise', 'Gentle', 'Bold', 'Lively'];
  const nouns = ['Cat', 'Dog', 'Fox', 'Bear', 'Bird', 'Fish', 'Rabbit', 'Tiger', 'Lion', 'Elephant'];
  
  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  
  return `${randomAdjective} ${randomNoun}`;
}

function generateRandomDate() {
  const start = new Date(2020, 0, 1);
  const end = new Date(); 
  const randomTimestamp = start.getTime() + Math.random() * (end.getTime() - start.getTime());
  const randomDate = new Date(randomTimestamp);
  return randomDate.toISOString().split('T')[0];
}

function pickRandomDeliveryStatus() {
  const deliveryStatusOptions = ['Delivered', 'Cancelled', 'Out for delivery', 'Dispatched'];
  const randomIndex = Math.floor(Math.random() * deliveryStatusOptions.length);
  return deliveryStatusOptions[randomIndex];
}
function generateRandomPaymentOption() {
  const paymentOptions = ['Crypto', 'Cash on Delivery (COD)', 'Digital Payment'];
  const randomIndex = Math.floor(Math.random() * paymentOptions.length);
  return paymentOptions[randomIndex];
}




const getOrders = async () => {
    const resp = await fetch('https://dummyjson.com/products');
    const temp = await resp.json() 
    const tempOrders = await temp.products;
    const orders = [];

    for (let i = 0; i < 200; i++) {
        const tIdx = Math.floor(Math.random() * tempOrders.length);
        const quantity = Math.floor(Math.random() * 5000);
        const user = generateDummyUserName()
        const orderedOn = generateRandomDate();
        const price = Math.floor(Math.random() * 10000);
        const bill = (price*quantity).toFixed(3)
        const dileveryStatus = pickRandomDeliveryStatus()
        const paymentStatus = generateRandomPaymentOption()
        const image = tempOrders[tIdx].images[0];        
        const id = uuidv4();
        const name =  tempOrders[tIdx].title;   
        const OrdObj = {title:id, quantity,price,user,orderedOn,bill,dileveryStatus,paymentStatus,id,image,name};
        orders.push(OrdObj);
    }
    return orders
    
};

export default getOrders;
