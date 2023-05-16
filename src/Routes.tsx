import React from 'react';
import App from './App';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NotFound from './pages/errors/notFound';
import Form from './pages/Form';




const Router = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route 
                    path='/' 
                    element={ <Form /> } />


                <Route 
                    path='/user/:nickname' 
                    element={ <App /> } />
   
                <Route 
                    path='/*' 
                    element={<NotFound />} />

            </Routes>
        </BrowserRouter>
    );
};

export default Router;