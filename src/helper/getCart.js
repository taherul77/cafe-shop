import { useQuery } from "react-query";

function GetCart() {
    return useQuery("cart", () => {
        const data = localStorage.getItem("cart");
        return data ? JSON.parse(data) : null;
    });
}

export default GetCart;
