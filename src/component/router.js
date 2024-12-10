import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Electronics from "./electronics";
import Product from "./product";
import Signin from "./SignIn";
import Signup from "./SignUp";
import ProductDetails from "./ProductDetails";
import Jewelery from "./jewelery";
import Mensclothing from "./mensclothing";
// import Productscard from "./productcard";
import Womensclothing from "./WomensClothing";

function RouteConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Default route */}
          <Route index element={<Product />} />
          
          {/* Category routes */}
          <Route path="electronics" element={<Electronics />} />
          <Route path="jewelery" element={<Jewelery />} />
          <Route path="mensclothing" element={<Mensclothing />} />
          <Route path="womensclothing" element={<Womensclothing />} />
          
          {/* Product details and other routes */}
          <Route path="product/:id" element={<ProductDetails />} />
          {/* <Route path="products" element={<Productscard />} /> */}
          
          {/* Authentication routes */}
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouteConfig;
