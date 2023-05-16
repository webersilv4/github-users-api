import React from 'react';
import ReactDOM from 'react-dom/client';


import 'bootstrap/dist/css/bootstrap.css';
import './styles/globals.css';
import Router from './Routes';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>
);
