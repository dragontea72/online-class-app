import React from 'react';

const Cart = (props) => {
    const enroll = props.enroll;
    const totalEnrollCost = enroll.reduce((total,prd) => total + prd.price,0);
    return (
        <div>
            <h4>Course Order Summary</h4>
            <p>Course Items : {enroll.length}</p>
            <p>Total Enroll Cost: {totalEnrollCost}</p>
        </div>
    );
};

export default Cart;