import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch';

export const Products = () => {
  const [inputSearch, setInputSearch] = useState('');
  const navigate = useNavigate();

  const { data, loading, error } = useFetch('https://dummyjson.com/products');

  const handleSearch = (e) => {
    e.preventDefault();
    if (inputSearch.trim()) {
      navigate(`search?key=${inputSearch}`)
    }
  }

  if (error) return <div>Page error</div>
  if (loading) return <div>loading....</div>
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} />
        <button>search</button>
      </form>
      <h1>List product</h1>
      <div className='list-product'>
        {data?.products.map(item => (
          <Link className='card' key={item.id} to={`/products/${item.id}`}>
            <img src={item.thumbnail} alt="" />
            <div className='description'>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <strong>{item.price}$</strong>
            </div>
          </Link>
        ))}
      </div>
    </div >

  )
}
