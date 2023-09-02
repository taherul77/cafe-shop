const setCart = (item) => {
    const cart = localStorage.getItem("cart");
   

    if (cart) {
        const items = JSON.parse(cart);

        const existingItem = items.find(
            (cartItem) => cartItem.data._id === item.data._id
        );

        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            items.push(item);
        }

        localStorage.setItem("cart", JSON.stringify(items));
    } else {
        const items = [item];
        localStorage.setItem("cart", JSON.stringify(items));
    }
};

export default setCart;