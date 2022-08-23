import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./shop/Home"
import DetailPage from './shop/DetailPage';
import { Switch } from '@chakra-ui/react';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route  path="/" element={<Home/>} />
                <Route  path="/detail-page" element={<DetailPage/>} />
            </Switch>
        </BrowserRouter>
    )
}


export default Routes;
