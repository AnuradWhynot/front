import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./shop/Home"
import DetailPage from './shop/DetailPage';
import { Switch } from '@chakra-ui/react';
import Cart from './shop/cart/Cart';
import PaymentPage from './shop/payment/paymentPage';
import MyProfile from './auth/profile';
import ChangeProfile from './auth/changeProfile';
import ForgotPassword from './auth/forgotPassword';



const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/detail-page" element={<DetailPage />} />
                <Route path="/cart-items" element={<Cart />} />
                <Route path="/payment-page" element={<PaymentPage />} />
                <Route path="/my-profile" element={<MyProfile />} />
                <Route path="/change-profile" element={<ChangeProfile />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
            </Switch>
        </BrowserRouter>
    );
}


export default Routes;