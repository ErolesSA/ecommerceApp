import { useParams } from 'react-router-dom';
import products from '../assets/products.json';  // Importar el archivo JSON

export default function ProductDetails() {
  const { id } = useParams();  // Obtener el id del producto desde la URL

  // Buscar el producto en el archivo JSON
  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">{product.name}</h2>
        <p className="mt-4 text-lg font-medium text-gray-900">{product.price}</p>
        <p className="mt-2 text-sm text-gray-500">{product.description}</p>
        <img
          alt={product.imageAlt}
          src={product.imageSrc}
          className="mt-6 w-full rounded-md object-cover"
        />
      </div>
    </div>
  );
}
