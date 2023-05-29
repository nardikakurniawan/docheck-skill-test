import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

import { ItemProvider } from './pages/secondQuestion/ItemContext.tsx';
import { Provider } from 'react-redux';
import store from './redux/store.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ItemProvider>
        <Router>
          <App />
        </Router>
      </ItemProvider>
    </Provider>
  </React.StrictMode>
);
