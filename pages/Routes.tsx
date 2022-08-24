import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./shop/Home"
import DetailPage from './shop/DetailPage';
import { Switch } from '@chakra-ui/react';
import PaymentPage from './shop/payment/paymentPage';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route  path="/" element={<Home/>} />
                <Route  path="/detail-page" element={<DetailPage/>} />
                <Route path="/payment-page" element={<PaymentPage/>}/>
            </Switch>
        </BrowserRouter>
    )
}


export default Routes;
