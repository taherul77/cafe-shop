import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);

                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }

                const value = await res.json();
                setLoading(false);
                setData(value);
            } catch (error) {
                setLoading(false);
                console.log(error);
            }
        };
        fetchData();
    }, [url]);
    return { data, loading };
};

export default useFetch;
