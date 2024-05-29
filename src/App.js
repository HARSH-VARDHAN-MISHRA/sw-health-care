
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

          {/* ------- Authentication ---------  */}
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignIn/>} />
          <Route path='/login/forget-password' element={<ForgetPassword />} />
        </Routes>

        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
