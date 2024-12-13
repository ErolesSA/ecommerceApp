// components/Home.jsx
import Dashboard from './Dashboard.jsx';
import Categories from './Category.jsx';  // Asegúrate de que esta ruta sea correcta
import ProductList from './ProductList.jsx';  // Importar el componente ProductList


export default function Home() {
  return (
    <div>
      <Dashboard />
      <Categories />
      <ProductList />  {/* Aquí agregamos el ProductList */}

    </div>
  );
}
