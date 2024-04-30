import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/main.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store.tsx';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <ReduxProvider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </ReduxProvider>
);
