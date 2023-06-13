import Card from "./components/card";
import Navbar from "./components/navbar";
import { products } from "./mocks/products";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Prima applicazione React</h1>
      <p>Componente principale App</p>
      <div className="App__productList">
        {products.map((product) => (
          <Card data={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
