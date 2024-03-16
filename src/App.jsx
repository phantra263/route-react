import { createContext, useState } from 'react'
import './App.scss'
import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { PageNotFound } from './pages/PageNotFound';
import { Cart } from './pages/Cart';
import { Login } from './pages/auth/Login';
import { Footer } from './components/Footer';
import { Search } from './pages/Search';

export const themeContext = createContext();

const userLogin = {
  userName: 'phantra',
  isLogin: false
}


function App() {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState(userLogin);
  const [cart, setCart] = useState([]);
  const setLogin = (status) => {
    setUser({
      ...user,
      isLogin: status
    })
  }
  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <themeContext.Provider value={{ theme, handleTheme, user, setLogin, cart, setCart }}>
      <div className={`app ${theme}`}>
        <Header />
        <Routes>
          <Route path='/' element={<Products />} ></Route>
          <Route path='products' element={<Products />} ></Route>
          <Route path='products/:id' element={<ProductDetail />}></Route>
          <Route path='cart' element={<Cart />} ></Route>
          <Route path='login' element={<Login />} ></Route>
          <Route path='search' element={<Search />} ></Route>
          {/* Fallback Route */}
          <Route path='*' element={<PageNotFound />} ></Route>
        </Routes>
        <Footer />
      </div>
    </themeContext.Provider>

  )
}

export default App
