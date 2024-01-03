import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import { FooterABC } from './components/Footer';
import Header from './components/Header';
// import FooterABC from './components/Footer'

function App() {
  let stringHello = 'bthao and thuy lieu';
  let checkabc = true;
  return (
    <div className="App">
      <NavigationBar />
      {/* <h1 className='abc'>hello</h1> */}
      {/* <Header sayHello={stringHello} isValid={checkabc} />
      <FooterABC /> */}
    </div>
  );
}

export default App;
