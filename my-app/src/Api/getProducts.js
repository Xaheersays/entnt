import { v4 as uuidv4 } from 'uuid';

const getProducts = async () => {
    const resp = await fetch('https://fakestoreapi.com/products');
    const tempProducts = await resp.json() || [];
    const products = [];

    const titleCounts = {}; 
    for (let i = 0; i < 200; i++) {
        const tIdx = Math.floor(Math.random() * tempProducts.length);
        const total = Math.floor(Math.random() * 5000);
        const available = Math.floor(Math.random() * total);
        const sales = Math.floor(Math.random() * 2000);
        const revenue = (tempProducts[tIdx].price * sales).toFixed(2);
        const status = tIdx % 2 ? 'active' : 'inactive';
        const image = tempProducts[tIdx].image || 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg';
        const price = Math.floor(Math.random() * 10000);
        

        let title = tempProducts[tIdx].title.split(' ').slice(0, 3).join(' ');
        titleCounts[title] = (titleCounts[title] || 0) + 1;
        if (titleCounts[title] > 1) {
            title = `${title} ${titleCounts[title]}`;
        }

        const id = uuidv4();
        const pObj = { status, total, available, sales, revenue, image, price, id, title };
        products.push(pObj);
    }
    return products
    
};

export default getProducts;
