import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products/Products';
function App() {
  return (
    <div className='main-containere'>
      <div className='container'>
      <Header></Header>
    </div>
    <div>
    <Products></Products>
    </div>
    </div>
  );
}

export default App;
