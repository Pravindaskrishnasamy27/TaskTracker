import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import bg from './assets/milo.jpeg'; // ✅

document.body.style.backgroundImage = `url(${bg})`;
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundPosition = 'center';
document.body.style.minHeight = '100vh';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

