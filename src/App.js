
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ProductsPage from './Pages/ProductsPage/ProductsPage';
import AllCategoryPage from './Pages/AllCategoryPage/AllCategoryPage';
import SingleProductPage from './Pages/SingleProductPage/SingleProductPage';
import Login from './Components/Login/Login';
import SignIn from './Components/Login/SignIn';
import ForgetPassword from './Components/Login/ForgetPassword';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import CartPage from './Pages/CartPage/CartPage';
import ContactPage from './Pages/ContactPage/ContactPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/categories' element={<AllCategoryPage/>} />
          <Route path='/category/products' element={<ProductsPage/>} />
          <Route path='/category/products/product' element={<SingleProductPage/>} />
          <Route path='/cart' element={<CartPage/>} />
          {/* <Route path='/cart/checkout' element={<FinalCart/>} /> */}

          {/* Pages ---  */}
          <Route path='/contact' element={<ContactPage/>} />

          {/* ------- Authentication ---------  */}
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignIn/>} />
          <Route path='/login/forget-password' element={<ForgetPassword />} />

          {/* -- User Pages  ---  */}
          <Route path='/profile' element={<ProfilePage/>} />

        </Routes>

        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
