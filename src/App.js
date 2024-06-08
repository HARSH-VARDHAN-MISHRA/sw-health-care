
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
import ProductByCategory from './Pages/ProductsPage/ProductByCategory';
import TermCondition from './Pages/ContentPages/TermCondition';
import PrivacyPolicy from './Pages/ContentPages/PrivacyPolicy';
import ReturnRefund from './Pages/ContentPages/ReturnRefund';
import ShippingPolicy from './Pages/ContentPages/ShippingPolicy';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/categories' element={<AllCategoryPage/>} />

          {/* <Route path='/category/products' element={<ProductsPage/>} /> */}
          {/* <Route path='/category/products/product' element={<SingleProductPage/>} /> */}
          <Route path='/cart' element={<CartPage/>} />
          {/* <Route path='/cart/checkout' element={<FinalCart/>} /> */}

          {/* --- Dynamic Routing ---  */}
          <Route path='/category/:name' element={<ProductByCategory/>} />
          <Route path='/category/:name/:proname' element={<SingleProductPage/>} />


          {/* Pages ---  */}
          <Route path='/contact' element={<ContactPage/>} />

          <Route path='/terms-condition' element={<TermCondition/>} />
          <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
          <Route path='/return-refund' element={<ReturnRefund/>} />
          <Route path='/shipping-policy' element={<ShippingPolicy/>} />

          {/* ------- Authentication ---------  */}
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignIn/>} />
          <Route path='/login/forget-password' element={<ForgetPassword />} />

          {/* -- User Pages  ---  */}
          <Route path='/profile' element={<ProfilePage/>} />

          {/* category/${category.categoryName} */}

        </Routes>

        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
