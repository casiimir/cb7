import Button from "./components/button";
import Counter from "./components/counter";
import Navbar from "./components/navbar";
import ProductList from "./components/productList";
import TodoList from "./components/todoList";
import { products } from "./mocks/products";
import "./App.css";

function App() {
  const emoji = "🦖";

  return (
    <div className="App">
      <TodoList />
      {/* <Counter /> */}
      {/* <Button textContent="Accetta" />
      <Button textContent="Rifiuta" isPassive={true} /> */}
      {/* <Navbar />
      <ProductList products={products} emoji={emoji} /> */}
    </div>
  );
}

export default App;
