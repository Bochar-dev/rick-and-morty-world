import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import FontStyles from './styles/FontStyle';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <FontStyles />
            <GlobalStyles />
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);
