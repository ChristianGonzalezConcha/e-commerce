import './App.css'
import  Header from "./components/encabezado/encabezado"
import ProductList from './components/productlist/productlist';
import Footer from "./components/foot/foot"

function App() {
  return (
    <div className="app-container">
      <Header />
      <ProductList/>
      <Footer/>
    </div>
  );
}

export default App;
  