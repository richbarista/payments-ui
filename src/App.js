import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Searchbox from './components/Searchbox';
import FullTable from './components/FullTable';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header />
    <div className="container">
      <br></br>
      <Searchbox />
      <br></br>
      <FullTable />
    </div>
    </div>
  );
}

export default App;
