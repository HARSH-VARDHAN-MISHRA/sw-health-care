
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
// import ProductsPage from './Pages/ProductsPage/ProductsPage';
import AllCategoryPage from './Pages/AllCategoryPage/AllCategoryPage';
import SingleProductPage from './Pages/SingleProductPage/SingleProductPage';
import Login from './Components/Login/Login';
import SignIn from './Components/Login/SignIn';
import ForgetPassword from './Components/Login/ForgetPassword';
import CartPage from './Pages/CartPage/CartPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import ProductByCategory from './Pages/ProductsPage/ProductByCategory';
import TermCondition from './Pages/ContentPages/TermCondition';
import PrivacyPolicy from './Pages/ContentPages/PrivacyPolicy';
import ReturnRefund from './Pages/ContentPages/ReturnRefund';
import ShippingPolicy from './Pages/ContentPages/ShippingPolicy';
import UserProfile from './Pages/UserPage/UserProfile';
import FinalCart from './Pages/CartPage/FinalCart';
import OtpSignUp from './Components/Login/OtpSignUp';
import OrderConfirm from './Pages/orderConfirm/OrderConfirm';
import OrderFailPage from './Pages/orderConfirm/OrderFail';
import ErrorPage from './Pages/ErrorPage/ErrorPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path='/' element={<HomePage/>} />
        
          {/* --- Dynamic Routing ---  */}
          <Route path='/categories' element={<AllCategoryPage/>} />
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
          <Route path='/login/forget-password' element={<ForgetPassword />} />
          <Route path='/sign-up' element={<SignIn/>} />
          <Route path='/sign-up/confirm-account/:email' element={<OtpSignUp />} />

          {/* -- User Pages  ---  */}
          <Route path='/profile' element={<UserProfile/>} />
          <Route path='/cart' element={<CartPage/>} />

          <Route path='/cart/checkout' element={<FinalCart/>} />

          <Route path='/order-confirmed' element={<OrderConfirm />} />
          <Route path='/order-Fail' element={<OrderFailPage />} />
          <Route path='/*' element={<ErrorPage />} />

        </Routes>

        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
