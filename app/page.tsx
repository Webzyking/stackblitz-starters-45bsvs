import ProductGrid from '@/components/ProductGrid';
import Hero from '@/components/Hero';
import FeaturedCategories from '@/components/FeaturedCategories';
import ServiceShowcase from '@/components/ServiceShowcase';
import PortfolioSection from '@/components/PortfolioSection';

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />
      <ServiceShowcase />
      <FeaturedCategories />
      <PortfolioSection />
      <ProductGrid />
    </div>
  );
}