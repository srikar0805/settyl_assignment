import logo from './logo.svg';
import './App.css';
import Form from './components/form';
import Dashboard from './components/dashboard';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import Update from './components/update';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Form />} />
      </Routes>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Routes>
        <Route exact path="/update/:id" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;
