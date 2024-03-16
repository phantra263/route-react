import React, { useContext } from 'react'
import { themeContext } from '../App'

export const Cart = () => {
  const theme = useContext(themeContext);
  console.log(theme.cart)
  return (
    <div className='cart'>
      {
        theme.cart.length > 0 ? (<ul>
          {theme.cart.map(item => 
            (<li key={item.id}>
              <figure>
                <img src={item.thumbnail} alt="" />
              </figure>
              <div className='description'>
                <h3>{item.title}</h3>
                <p>{item.price}$</p>
              </div>
            </li>)
            )} 
        </ul>) : (<p>Giõ hàng rỗng</p>)
      }
    </div>

  )
}
