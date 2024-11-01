const categories = [
  { 
    name: 'Security Cameras',
    image: '/categories/cameras.jpg',
    description: 'Professional security solutions'
  },
  { 
    name: 'Design Tools',
    image: '/categories/design.jpg',
    description: 'Professional design equipment'
  },
  { 
    name: 'Network Equipment',
    image: '/categories/network.jpg',
    description: 'Enterprise networking gear'
  },
  { 
    name: 'Professional Services',
    image: '/categories/services.jpg',
    description: 'Expert consultation & support'
  },
];

export default function FeaturedCategories() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="group relative h-64 rounded-lg overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10" />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-4">
              <h3 className="text-white text-xl font-semibold text-center mb-2">
                {category.name}
              </h3>
              <p className="text-white/80 text-sm text-center">
                {category.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}