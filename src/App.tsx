import { BrowserRouter } from 'react-router-dom';

import { Routes } from './routes';

import { ProffyProvider } from './contexts/ProffyContext';

import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <BrowserRouter>
      <ProffyProvider>
        <Routes />
        <GlobalStyle />
      </ProffyProvider>
    </BrowserRouter>
  );
}

export default App;
