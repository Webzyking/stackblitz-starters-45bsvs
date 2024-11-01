import Image from 'next/image';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square relative overflow-hidden rounded-t-lg">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 ease-out"
          style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/20 transition-opacity"
        />
      </div>
      <div className="p-4">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-gray-500"
        >
          {product.category}
        </motion.span>
        <h3 className="text-lg font-semibold mt-1">{product.name}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-bold">${product.price}</span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
          >
            <ShoppingCartIcon className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}