import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// derive a path basename that works for both full URL and plain path
const publicUrl = process.env.PUBLIC_URL || '/';
let basename = '/';
try {
  if (publicUrl) {
    // if PUBLIC_URL is a full URL (starts with http), use its pathname
    if (/^https?:\/\//i.test(publicUrl)) {
      basename = new URL(publicUrl).pathname.replace(/\/$/, '') || '/';
    } else {
      // if PUBLIC_URL is already a path like '/Lumea'
      basename = publicUrl.replace(/\/$/, '') || '/';
    }
  }
} catch (e) {
  // fallback to '/'
  basename = '/';
}

root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
