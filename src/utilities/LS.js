/* 
const getStoreData = () => {
    const storedData = localStorage.getItem('cart');
    if (storedData) {
        return JSON.parse(storedData);
    }
    return [];
}

const saveToLS = cart =>{
    const savedItems = JSON.stringify(cart);
    localStorage.setItem('cart', savedItems);
}

const addToLS = id =>{
    const cart = getStoreData();
    cart.push(id);
    saveToLS(cart)
}

export {addToLS , getStoreData , saveToLS} */

// get local storage ====>
const getStoreData = ()=>{
    const storedData = localStorage.getItem('cart');
    return storedData ? JSON.parse(storedData) : [];
}

const saveToLS = cart => {
    const savedData = JSON.stringify(cart);
    localStorage.setItem('cart',savedData);
}
const addToLS = id=>{
    const cart = getStoreData();
    if (!cart.includes(id)) {
        cart.push(id);
        saveToLS(cart);
    } 
}

const removeFromLS = id =>{
    const cart = getStoreData();
    const remainedData= cart.filter(c=> c !== id);
    saveToLS(remainedData);

} 

export {getStoreData, addToLS, removeFromLS}