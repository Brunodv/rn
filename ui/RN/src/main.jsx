import './index.css'
import App from './App'
import { createRoot } from 'react-dom/client';

const RD = createRoot(document.getElementById('root'))

RD.render(
  <App />
)

/*
 deprecated
ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);
*/