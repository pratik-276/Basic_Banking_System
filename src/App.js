import './App.css';
import Layout from './components/Layout/Layout';

import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    //basename={process.env.PUBLIC_URL}
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;
