import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WatchlistProvider } from './context/WatchlistContext'; // ✅ Tambahkan ini!

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <WatchlistProvider>
        <App />
    </WatchlistProvider>
);