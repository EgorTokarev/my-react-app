
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./assets/styles/main.css";

import "./assets/styles/normalize.css";
import "./assets/styles/global.css";
import "swiper/swiper-bundle.css";
import './assets/styles/font.css';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);

    root.render(
        <React.StrictMode>
            <div className="container">
                <App />
            </div>
        </React.StrictMode >
    );
} else {
    console.error('Root element not found!');
}