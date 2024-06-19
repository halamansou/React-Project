import logo from './logo.svg';
import './App.css';
import { Home } from './Pages/Home';
import { Products } from './Pages/Products';
import { ProductDetails } from './Pages/ProductDetails';
import { ProductForm } from './Pages/ProductForm';

import { Footer } from './Pages/Footer';
import { MyNav } from './Pages/MyNav';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { NotFound } from './Pages/NotFound';
import { SharedLayout } from './Pages/Layout/SharedLayout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path='/Products'  element={<Products/>} />
        <Route path='/Products/:id'  element={<ProductDetails/>} />
        <Route path='/Products/:id/edit'  element={<ProductForm/>} />

        <Route path='*'  element={<NotFound/>} />

      </Route>
      </>
    )
  );
  return (
    <>
    <RouterProvider router={router}> </RouterProvider>
    </>

  );
}

export default App;
