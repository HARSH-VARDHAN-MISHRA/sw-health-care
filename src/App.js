
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ProductsPage from './Pages/ProductsPage/ProductsPage';
import AllCategoryPage from './Pages/AllCategoryPage/AllCategoryPage';
import SingleProductPage from './Pages/SingleProductPage/SingleProductPage';

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
        </Routes>

        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
