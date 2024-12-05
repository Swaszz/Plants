
import { createRoot } from 'react-dom/client'
import ProductList from './productList'
import Root from './routes/root'
import ProductDetails from './ProductDetails'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <ProductList/>,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails/>,
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(

   <RouterProvider router={router} />

)
