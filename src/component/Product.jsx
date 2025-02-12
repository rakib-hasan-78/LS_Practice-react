import PropTypes from 'prop-types';
import React from 'react';



const Product = ({product, clickHandle, cancelHandle}) => {
    const {name, image, price, id } = product;

    return (
        <div className='col-4 bg-white rounded-2'>
            {/*** image ***/}
            <div className='w-100 card-image-h'>
                <img className='w-100 h-100 object-fit-cover p-2 rounded-top-2' src={image} alt="" />
            </div>
            <div className='w-100 d-flex flex-column align-items-center justify-content-center shadow-lg'>
                <h4 className='fs-5 text-success text-uppercase fw-bolder'>{name}</h4>
                <p className='text-info fw-bolder text-uppercase'>price : $ {price}</p>
                <button type='button' onClick={clickHandle}  className='btn btn-info my-2 mb-4 w-75'>add to cart</button>
                <button className='btn btn-danger mb-4 w-75' onClick={cancelHandle}  >remove Product</button>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired,
    clickHandle: PropTypes.func.isRequired,
    cancelHandle: PropTypes.func.isRequired,
}

export default Product; 