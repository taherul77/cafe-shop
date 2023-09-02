const calculateTotal = (data) => {
    const subtotal = data?.reduce((accumulator, currentValue) => {
        return accumulator + currentValue?.quantity * currentValue?.data?.discount_price
        ;
    }, 0);

    const shipping = subtotal < 1 ? 0 : 5;


    const total = (subtotal + shipping )?.toFixed(2);

    return {
        subtotal: subtotal,
        shipping: shipping,
   
        total: total,
    };
};

export default calculateTotal;