import { CameraIcon, ComputerDesktopIcon, GlobeAltIcon, PaintBrushIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: 'Camera Installation',
    description: 'Professional security camera installation and monitoring systems',
    icon: CameraIcon,
    link: '/services/camera-installation',
    color: 'bg-blue-500'
  },
  {
    title: 'Graphic Design',
    description: 'Creative design solutions for your brand and marketing needs',
    icon: PaintBrushIcon,
    link: '/services/graphic-design',
    color: 'bg-purple-500'
  },
  {
    title: 'Web Design',
    description: 'Custom website development and responsive design',
    icon: GlobeAltIcon,
    link: '/services/web-design',
    color: 'bg-green-500'
  },
  {
    title: 'Networking',
    description: 'Enterprise-grade network solutions and infrastructure',
    icon: ComputerDesktopIcon,
    link: '/services/networking',
    color: 'bg-red-500'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ServiceShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-3xl font-bold mb-8"
      >
        Professional Services
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={item}
            whileHover={{ y: -5 }}
          >
            <Link href={service.link} className="block">
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`${service.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                >
                  <service.icon className="h-6 w-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}