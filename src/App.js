import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import Dashboard from './Component/DashBoard/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Dashboard/>
      </Router>
    </div>
  );
}

export default App;
