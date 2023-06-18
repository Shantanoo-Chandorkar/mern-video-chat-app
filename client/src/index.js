import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ContextProvider } from './SocketContent';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ContextProvider>
            <App />
        </ContextProvider>
    </React.StrictMode>
);

// ReactDOM.render(
//     <ContextProvider>
//         <App />
//     </ContextProvider>
//     , document.getElementById('root'));