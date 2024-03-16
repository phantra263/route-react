import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        if (data.message) {
                            setError(true);
                        }
                        if (data) {
                            setData(data);
                        };
                        setLoading(false);
                    });
            }
            catch (error) {
                setError(error)
            }
        })();
    }, [url])


    return { data, loading, error };
}

export default useFetch;