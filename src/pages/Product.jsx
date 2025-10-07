import ProductHero from '../components/ProductHero';
import ProductFlow from '../components/ProductFlow';
import ProductComparison from '../components/ProductComparison';
import ProductSecurityTech from '../components/ProductSecurityTech';
import ProductIntegrations from '../components/ProductIntegrations';
import ProductHowFAQ from '../components/ProductHowFAQ';
import FinalCTA from '../components/FinalCTA';

export default function Product() {
  return (
    <main>
      <ProductHero />
      <ProductFlow />
      <ProductComparison />
      <ProductIntegrations />
      <ProductSecurityTech />
      <ProductHowFAQ />
      <FinalCTA />
    </main>
  );
}
