import Image from 'next/image';

const portfolioItems = [
  {
    title: 'Security System Installation',
    category: 'Camera Installation',
    image: '/portfolio/camera-1.jpg',
    description: 'High-end security system for corporate offices'
  },
  {
    title: 'Brand Identity Design',
    category: 'Graphic Design',
    image: '/portfolio/design-1.jpg',
    description: 'Complete brand identity package for tech startup'
  },
  {
    title: 'E-commerce Website',
    category: 'Web Design',
    image: '/portfolio/web-1.jpg',
    description: 'Custom e-commerce solution with advanced features'
  },
  {
    title: 'Network Infrastructure',
    category: 'Networking',
    image: '/portfolio/network-1.jpg',
    description: 'Enterprise network setup for large corporation'
  }
];

export default function PortfolioSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Recent Work</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our latest projects and see how we've helped businesses achieve their goals
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolioItems.map((item) => (
          <div key={item.title} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/20 transition-colors z-10" />
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <span className="text-sm text-blue-600 font-medium">{item.category}</span>
              <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}