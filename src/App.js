import './App.css';
import Layout from './components/Layout/Layout';

import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    //basename={process.env.PUBLIC_URL}
    //"homepage": "http://pratik-276.github.io/Basic_Banking_System",
    //"predeploy": "npm run build",
    //"deploy": "gh-pages -d build"
    <BrowserRouter>
      <div className="App">
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;
