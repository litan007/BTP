import Hero from '../components/Hero';
import ServicesBar from '../components/ServicesBar';
import Engagements from '../components/Engagements';
import RealisationsPreview from '../components/RealisationsPreview';
import Stats from '../components/Stats';
import FooterCta from '../components/FooterCta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesBar />
      <Engagements />
      <RealisationsPreview />
      <Stats />
      <FooterCta />
    </>
  );
}
