import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Customer from "./pages/Customer";
import Restauranteur from "./pages/Restauranteur";
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="customer" element={<Customer />} />
          <Route path="restauranteur" element={<Restauranteur />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);