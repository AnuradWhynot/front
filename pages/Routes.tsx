import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./shop/Home"
import DetailPage from './shop/DetailPage';
import { Switch } from '@chakra-ui/react';
import Cart from './shop/cart/Cart';
import PaymentPage from './shop/payment/paymentPage';
import MyProfile from './auth/profile';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/detail-page" element={<DetailPage />} />
                <Route path="/cart-items" element={<Cart />} />
                <Route path="/payment-page" element={<PaymentPage />} />
                <Route path="/My-Profile" element={<MyProfile />} />
                <Route path="/My-Profile" element={<MyProfile />} />
            </Switch>
        </BrowserRouter>
    );
}


export default Routes;
