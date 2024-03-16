import React, { useContext, useState } from 'react'
import { themeContext } from '../../App'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  let ThemeContext = useContext(themeContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (form.name && form.name === ThemeContext.user.userName) {
      ThemeContext.setLogin(true);
      navigate('/products')
    } else alert('Sai thông tin đăng nhập!')
  }
  const handleChange = (e) => {
    setForm({
      ...form,
      name: e.target.value
    });
  }


  return (
      <form onSubmit={handleSubmit} className='form-login'>
        <h1>Login</h1>
        <input type="text" value={form.name} onChange={handleChange} />
        <button>Đăng nhập</button>
      </form>
  )
}
 