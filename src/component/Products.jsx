import React, { useEffect, useState } from 'react';
import Product from './Product';
import { addToLS, getStoreData} from '../utilities/LS';
import Cart from './Cart';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        fetch('../public/data/data.json')
            .then(resp=> resp.json())
            .then(data=> setProducts(data))    
    }, [])

    useEffect(()=>{
        if (products.length>0) {
            const storedCart = getStoreData();
            let savedCart = []
            for(const id of storedCart){
                const product = products.find(product=> product.id===id)
                if (product) {
                    savedCart.push(product)
                }
            }
            console.log('saved cart' , savedCart)
            setCart(savedCart)
        }
    }, [products])

    const addToClickHandler = (product) => {
        setCart(prev=>{
            if(prev.some(prev=> prev.id === product.id)) return prev;
            addToLS(product.id);
            return [...prev, product];
        })
    }

    return (
        <div className='w-100 container-fluid bg-danger py-1 d-grid'>
            <div className='row gap-5 justify-content-center'>
                {cart && ( <Cart cart={cart} /> )}
                <div className='col-8  d-flex flex-wrap align-items-center justify-content-around gap-2'>
                    {products && (products.map((product, index)=>(
                        <Product key={product.id}
                         index={index} 
                         product={product}
                         clickHandle ={()=>addToClickHandler(product)}
                         cancelHandle={``}
                          />
                    )))}
                </div>
                <div className='col-3 border'>

                </div>
            </div>
        </div>
    );
};

export default Products;