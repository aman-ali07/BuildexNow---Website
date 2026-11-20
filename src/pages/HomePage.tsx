import { useFocusReveal } from '../hooks/useFocusReveal';
import { Hero } from '../sections/Hero';
import { TrustedBy } from '../sections/TrustedBy';
import { GlobalReach } from '../sections/GlobalReach';
import { Marquee } from '../sections/Marquee';
import { Services } from '../sections/Services';
import { Work } from '../sections/Work';
import { Process } from '../sections/Process';
import { Comparison } from '../sections/Comparison';
import { Testimonials } from '../sections/Testimonials';
import { Faq } from '../sections/Faq';
import { Contact } from '../sections/Contact';

export default function HomePage() {
  useFocusReveal();

  return (
    <>
      <Hero />
      <TrustedBy />
      <GlobalReach />
      <Marquee />
      <Services />
      <Work />
      <Process />
      <Comparison />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}
