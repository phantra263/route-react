import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export const Search = () => {
    const [searchParams] = useSearchParams();
    const { data, loading, error } = useFetch(`https://dummyjson.com/products/search?q=${searchParams.get('key')}`);
    return (
        <div>
            {data?.products.length > 0 ? data.products.map((item) => <div key={item.id}>{item.title}</div>) : <div>Không có kết quả search</div>}
        </div>
    )
}
