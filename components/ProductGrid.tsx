import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: '4K Security Camera System',
    price: 599.99,
    image: '/products/camera-system.jpg',
    category: 'Security'
  },
  {
    id: 2,
    name: 'Professional Design Tablet',
    price: 899.99,
    image: '/products/design-tablet.jpg',
    category: 'Design'
  },
  {
    id: 3,
    name: 'Enterprise Router',
    price: 449.99,
    image: '/products/router.jpg',
    category: 'Networking'
  },
  {
    id: 4,
    name: 'Web Development Kit',
    price: 299.99,
    image: '/products/dev-kit.jpg',
    category: 'Development'
  }
];

export default function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}